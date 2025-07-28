'use client'

import { useEffect, useState } from 'react'

/**
 * A hook to determine if the document is in Right-to-Left (RTL) mode.
 * It initializes with the current direction and uses a MutationObserver
 * to update dynamically if the `dir` attribute on the <html> element changes.
 * @returns {boolean} `true` if in RTL mode, otherwise `false`.
 */
export function useRtl() {
  const [isRtl, setIsRtl] = useState(false)

  useEffect(() => {
    const element = document.documentElement

    // Set the initial value
    setIsRtl(element.dir === 'rtl')

    // Create an observer instance to watch for attribute changes
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'dir'
        ) {
          setIsRtl(element.dir === 'rtl')
        }
      }
    })

    // Start observing the target node for configured mutations
    observer.observe(element, { attributes: true })

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  return isRtl
}