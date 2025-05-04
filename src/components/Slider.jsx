// Slider.jsx
import React, { useEffect, useRef, useState } from 'react'
import pancake from '../assets/images/pancakes.jpg'
import eggs from '../assets/images/eggs.jpg'
import salad from '../assets/images/salad.jpg'
import burger from '../assets/images/burger.jpg'
import salmon from '../assets/images/salmon.jpg'
import steak from '../assets/images/steak.jpg'

const images = [pancake, eggs, salad, burger, salmon, steak]

export default function Slider() {
  const sliderRef = useRef()
  const [index, setIndex] = useState(0)
  const maxIndex = Math.ceil(images.length / 2) - 1

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`
    }
  }, [index])

  return (
    <section className="gallery">
      <div className="gallery-section">
        <h2>Gallery</h2>
      </div>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} />
          ))}
        </div>
        <button className="prev" onClick={() => setIndex(i => (i - 1 + maxIndex + 1) % (maxIndex + 1))}>
          &#10094;
        </button>
        <button className="next" onClick={() => setIndex(i => (i + 1) % (maxIndex + 1))}>
          &#10095;
        </button>
      </div>
    </section>
  )
}
