import { useState, useEffect } from 'react';

export default function useMousePosition() {
  const [mousePosition, SetMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    SetMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
