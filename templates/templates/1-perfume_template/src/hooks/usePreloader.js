import { useState, useEffect, useCallback } from 'react'
import { preloadAllAssets } from '@utils/assetManager'

/**
 * usePreloader — Tracks asset preloading progress.
 * 
 * Returns { progress (0-1), isReady (boolean) }
 * Used by LoadingScreen to show progress, then fade out.
 */
export function usePreloader() {
    const [progress, setProgress] = useState(0)
    const [isReady, setIsReady] = useState(false)

    const handleProgress = useCallback((value) => {
        setProgress(value)
    }, [])

    useEffect(() => {
        let cancelled = false

        const load = async () => {
            try {
                await preloadAllAssets((p) => {
                    if (!cancelled) handleProgress(p)
                })

                // Small delay for smooth transition
                if (!cancelled) {
                    setTimeout(() => {
                        setIsReady(true)
                    }, 600)
                }
            } catch (error) {
                console.warn('Some assets failed to preload:', error)
                if (!cancelled) {
                    setProgress(1)
                    setIsReady(true)
                }
            }
        }

        load()

        return () => {
            cancelled = true
        }
    }, [handleProgress])

    return { progress, isReady }
}
