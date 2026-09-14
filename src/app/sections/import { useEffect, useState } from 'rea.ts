import { useEffect, useState } from 'react'

export const useIsScrollAtTop = (
  ref?: React.RefObject<HTMLElement>
): boolean => {
  const [isAtTop, setIsAtTop] = useState(true)
  useEffect(() => {
    const target = ref?.current || window
    const handleScroll = () => {
      if (ref?.current) {
        setIsAtTop(ref.current.scrollTop === 0)
      } else {
        setIsAtTop(window.scrollY === 0)
      }
    }
    handleScroll() // Initial check on mount
    target.addEventListener('scroll', handleScroll)
    return () => {
      target.removeEventListener('scroll', handleScroll)
    }
  }, [ref])
  return isAtTop
}


export default function ScrollDetector() {
  const containerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      // scrollTop measures how many pixels the content is scrolled vertically
      const scrolledFromTop = containerRef.current.scrollTop;
      
      // If it is 0, the container is exactly at the top
      setIsAtTop(scrolledFromTop === 0);
    }
  };

  
  const handleScroll = () => {
  if (containerRef.current) {
    const atTop = containerRef.current.scrollTop === 0;
    // Only update state if the status actually changed
    if (atTop !== isAtTop) {
      setIsAtTop(atTop);
    }
  }
};
