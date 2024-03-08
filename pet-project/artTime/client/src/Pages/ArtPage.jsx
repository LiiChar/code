import React, { useEffect, useState, useRef } from 'react'
import { IPoint } from '../store/model/model';


export const ArtPage = () => {
  const canvasRef = useRef(null)
  const [size, setSize] = useState(10)
  const [mouseClick, setMouseClick] = useState(false)
  const [points, setPoints] = useState({
    userId: 'anom',
    point: [{x: 30, y: 30}]
  })
  let z = []

  let ctx;

  if (canvasRef.current) {
    ctx = canvasRef.current.getContext('2d')
  }

  useEffect(() => {
    draw()
  })
  useEffect(() => {
    document.addEventListener('mouseup', () => setMouseClick(null))
    return () => {
      document.removeEventListener('mouseup', () => setMouseClick(null))
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', (e) => setMouseClick(e))
    
    return () => { 
      document.removeEventListener('mousedown', (e) => setMouseClick(e))
    }
  }, [])

  function draw() {
    if (mouseClick) {
      z.push({x: mouseClick.clientX, y: mouseClick.clientY})
      console.log(z);
      if (z.length > 100) {
        setPoints({userId: points.userId, point: [...points.point, ...z]})
        z = []
      }
    }

    for (let i = 0; i < points.point.length ; i ++) {
      ctx?.fillRect(points.point[i].x - (size / 2), points.point[i].y - (size / 2), size, size)
    }

    requestAnimationFrame(draw)
  }



  return (
    <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef}></canvas>
  )
}
