import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { usePreloader } from '@hooks/usePreloader'
import LoadingScreen from '@components/ui/LoadingScreen'
import MainPage from '@/pages/MainPage'
import ProductsPage from '@/pages/ProductsPage'

/**
 * App — Main application shell with routing.
 * 
 * Loading screen gates ALL content until assets are preloaded.
 * Two routes:
 *   / → MainPage (hero + video + CTA)
 *   /products → ProductsPage (infinite scroll product showcase)
 */
export default function App() {
  const { progress, isReady } = usePreloader()
  const [showContent, setShowContent] = useState(false)

  // Only show content once loading screen starts fading out
  React.useEffect(() => {
    if (isReady) {
      // Small delay to let loading screen fade animation start
      const timer = setTimeout(() => setShowContent(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isReady])

  return (
    <BrowserRouter>
      {/* Loading Screen — covers everything until assets ready */}
      <LoadingScreen progress={progress} isReady={isReady} />

      {/* Content only renders after preloading is complete */}
      {showContent && (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
