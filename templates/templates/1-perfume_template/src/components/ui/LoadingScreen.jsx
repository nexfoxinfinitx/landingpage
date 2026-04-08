import React from 'react'

/**
 * LoadingScreen — Asset preload progress indicator.
 * 
 * Displays while assets are loading, fades out when ready.
 * Design is a minimal placeholder — user will configure the final version.
 * 
 * @param {Object} props
 * @param {number} props.progress - Loading progress 0-1
 * @param {boolean} props.isReady - Whether all assets are loaded
 */
export default function LoadingScreen({ progress = 0, isReady = false }) {
    return (
        <div className={`loading-screen ${isReady ? 'loading-screen--hidden' : ''}`}>
            <h1 className="loading-screen__brand">
                Maison Élysée
            </h1>

            <div className="loading-screen__progress-track">
                <div
                    className="loading-screen__progress-bar"
                    style={{ width: `${progress * 100}%` }}
                />
            </div>

            <p className="loading-screen__percent">
                {Math.round(progress * 100)}%
            </p>
        </div>
    )
}
