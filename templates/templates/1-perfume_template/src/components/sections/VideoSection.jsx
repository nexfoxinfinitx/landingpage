import React, { useRef, useEffect } from 'react'
import { useSectionProgress } from '@hooks/useScrollProgress'

/**
 * VideoSection — Scroll-driven spray video.
 * 
 * Video playback is synced to scroll position.
 * Currently a placeholder — video will be provided later.
 * 
 * 300vh container with sticky inner for scroll-driven scrubbing.
 */
export default function VideoSection() {
    const sectionRef = useRef(null)
    const videoRef = useRef(null)
    const progress = useSectionProgress(sectionRef)

    // Sync video currentTime to scroll progress
    useEffect(() => {
        if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = progress * videoRef.current.duration
        }
    }, [progress])

    return (
        <section className="video-section" ref={sectionRef} id="video-section">
            <div className="video-section__sticky">
                {/* 
          Replace this placeholder with actual video:
          <video
            ref={videoRef}
            className="video-section__video"
            src="/path/to/spray-video.mp4"
            muted
            playsInline
            preload="auto"
          />
        */}
                <div className="video-section__placeholder">
                    <div className="video-section__placeholder-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                    </div>
                    <span>Spray Video Section</span>
                    <span style={{ fontSize: 'var(--text-xs)', opacity: 0.4 }}>
                        Scroll-driven · {Math.round(progress * 100)}%
                    </span>
                </div>
            </div>
        </section>
    )
}
