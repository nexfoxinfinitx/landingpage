import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLayerAssets } from '@utils/assetManager'

gsap.registerPlugin(ScrollTrigger)

/**
 * SequenceBackground — Fixed background that changes with scroll.
 * 
 * Matches the web-sandbox SequenceBackground pattern:
 * - Fixed canvas element behind everything (z: -1)
 * - Renders current image frame based on scroll position
 * - Currently uses static images (will support image sequences later)
 * - GSAP ScrollTrigger scrubs through frames
 * 
 * When image sequences are provided, this will animate through them.
 * For now, it renders the cloud sky image as a full-cover background.
 */
export default function SequenceBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return

        // Set canvas dimensions
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const layers = getLayerAssets()
        const skyAsset = layers.find((l) => l.id === 'cloud-sky')

        if (!skyAsset) return

        // For image sequence support later:
        // const frameCount = 299
        // const currentFrame = (index) => `/sequence/frame-${(index + 1).toString().padStart(3, '0')}.jpg`
        // For now, use single static image

        const img = new Image()
        img.src = skyAsset.src

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height)
            if (img && img.complete) {
                // Cover the canvas (like object-fit: cover)
                const hRatio = canvas.width / img.width
                const vRatio = canvas.height / img.height
                const ratio = Math.max(hRatio, vRatio)
                const centerShiftX = (canvas.width - img.width * ratio) / 2
                const centerShiftY = (canvas.height - img.height * ratio) / 2
                context.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    centerShiftX,
                    centerShiftY,
                    img.width * ratio,
                    img.height * ratio
                )
            }
        }

        // Draw first frame once loaded
        img.onload = render

        // For image sequence, GSAP would scrub through frames here:
        // const imageSeq = { frame: 0 }
        // const ctx = gsap.context(() => {
        //   gsap.to(imageSeq, {
        //     frame: frameCount - 1,
        //     snap: 'frame',
        //     ease: 'none',
        //     scrollTrigger: {
        //       scrub: 0.9,
        //       trigger: '#scroll-container',
        //       start: 'top top',
        //       end: 'bottom bottom',
        //     },
        //     onUpdate: render,
        //   })
        // })

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            render()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            // ctx.revert() — uncomment when using image sequence
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        />
    )
}
