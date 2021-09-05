import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log("mount")
        const listener = (e: MouseEvent) => {
            setPosition({ x: e.pageX, y: e.pageY })
        }
        document.addEventListener('mousemove', listener)

        return () => {
            document.removeEventListener('mousemove', listener);
        }
    }, [])

    return position
}

export { useMousePosition as default };