import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * useScrollProgress — Returns normalized scroll progress (0-1) 
 * for a given element, using requestAnimationFrame for 60fps.
 * 
 * @param {React.RefObject} containerRef - Ref to the scroll container element
 * @returns {{ progress: number, scrollY: number }}
 */
export function useScrollProgress(containerRef) {
    const [progress, setProgress] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const rafId = useRef(null)

    const handleScroll = useCallback(() => {
        if (rafId.current) cancelAnimationFrame(rafId.current)

        rafId.current = requestAnimationFrame(() => {
            if (!containerRef?.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementHeight = containerRef.current.offsetHeight

            // How far through this element the viewport has scrolled
            const scrolled = windowHeight - rect.top
            const total = elementHeight + windowHeight
            const normalizedProgress = Math.max(0, Math.min(1, scrolled / total))

            setProgress(normalizedProgress)
            setScrollY(window.scrollY)
        })
    }, [containerRef])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafId.current) cancelAnimationFrame(rafId.current)
        }
    }, [handleScroll])

    return { progress, scrollY }
}

/**
 * useSectionProgress — Returns scroll progress specifically within
 * a sticky section (0 = just entered, 1 = about to leave).
 * 
 * Perfect for scroll-driven animations in hero/video sections.
 */
export function useSectionProgress(sectionRef) {
    const [progress, setProgress] = useState(0)
    const rafId = useRef(null)

    const handleScroll = useCallback(() => {
        if (rafId.current) cancelAnimationFrame(rafId.current)

        rafId.current = requestAnimationFrame(() => {
            if (!sectionRef?.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const sectionHeight = sectionRef.current.offsetHeight
            const viewportHeight = window.innerHeight

            // Progress through the section (accounting for sticky content)
            const scrollableDistance = sectionHeight - viewportHeight
            const scrolled = -rect.top
            const normalizedProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

            setProgress(normalizedProgress)
        })
    }, [sectionRef])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafId.current) cancelAnimationFrame(rafId.current)
        }
    }, [handleScroll])

    return progress
}
