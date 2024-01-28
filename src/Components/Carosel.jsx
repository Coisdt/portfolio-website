import React, { useEffect, useState } from 'react'
import { sliderData } from '../data.js'

const Carosel = () => {
  const [slides, setSlides] = useState(sliderData)
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    const newSlide = setCurrentSlide(
      (currentSlide - 1 + slides.length) % slides.length
    )
    return newSlide
  }
  const nextSlide = () => {
    const newSlide = setCurrentSlide((currentSlide + 1) % slides.length)
    return newSlide
  }

  useEffect(() => {
    const slideId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => {
      clearInterval(slideId)
    }
  }, [currentSlide])

  return (
    <section className='slider-container'>
      {sliderData.map((slide, slideIndex) => {
        const { id, image, title, description } = slide
        return (
          <article
            key={id}
            className='slide'
            style={{
              transform: `translateX(${100 * (slideIndex - currentSlide)}%)`,
            }}
          >
            <h2>{title}</h2>
            <img src={image} alt={title} className='person-img' />
            <p className='text'>{description}</p>
          </article>
        )
      })}
      <button className='prev' type='button' onClick={prevSlide}>
        -
      </button>
      <button className='next' type='button' onClick={nextSlide}>
        +
      </button>
    </section>
  )
}

export default Carosel
