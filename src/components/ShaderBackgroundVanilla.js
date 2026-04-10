export function initShaderBackground(canvas, hexTop, hexBottom) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    console.error('WebGL not supported');
    return () => {};
  }

  // Convert hex to normalized RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ] : [0, 0, 0];
  }

  const colorTop = hexToRgb(hexTop);
  const colorBottom = hexToRgb(hexBottom);

  const vertexShaderSource = `
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      // position is -1 to 1. map to 0 to 1 for vUv
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  // A soft, fluid gradient shader that uses time to gently oscillate
  const fragmentShaderSource = `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uColorTop;
    uniform vec3 uColorBottom;

    void main() {
      vec2 p = vUv;
      
      // Gentle wave distortion based on time
      p.y += sin(p.x * 4.0 + uTime * 0.6) * 0.15;
      p.x += cos(p.y * 3.0 + uTime * 0.4) * 0.15;
      
      // We want Y=1 to be Top Color, Y=0 to be Bottom Color
      // WebGL canvas Y goes bottom(0) to top(1), but since we map vUv from quad,
      // it depends on how we define vertices. Our vertices put +1.0 at top.
      float mixVal = clamp(p.y, 0.0, 1.0);
      
      // Smooth out the blending slightly
      mixVal = smoothstep(0.0, 1.0, mixVal);
      
      vec3 color = mix(uColorBottom, uColorTop, mixVal);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function createShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return () => {};
  }

  gl.useProgram(program);

  // Buffer data for a full-screen quad (two triangles)
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = new Float32Array([
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
     1.0,  1.0,
  ]);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const positionAttributeLocation = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  const uTimeLoc = gl.getUniformLocation(program, "uTime");
  const uColorTopLoc = gl.getUniformLocation(program, "uColorTop");
  const uColorBottomLoc = gl.getUniformLocation(program, "uColorBottom");

  gl.uniform3fv(uColorTopLoc, colorTop);
  gl.uniform3fv(uColorBottomLoc, colorBottom);

  let animationFrameId;
  const startTime = Date.now();

  function resize() {
    // Set actual size in memory (scaled for retina displays)
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
  }

  window.addEventListener('resize', resize);
  resize();

  function render() {
    const elapsed = (Date.now() - startTime) / 1000;
    gl.uniform1f(uTimeLoc, elapsed);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteBuffer(positionBuffer);
  };
}
