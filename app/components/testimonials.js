// app/components/Testimonials.js

"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  { text: "BevEX helped us avoid a major fine and cleared everything before our DOB hearing. Super responsive and professional!", author: "J. Martinez, Property Manager" },
  { text: "Very efficient and reliable team. They handled all our violation issues without any hassle.", author: "T. Lewis, Commercial Owner" },
  { text: "Highly recommend BevEX. They explained everything clearly and took action quickly.", author: "R. Chen, Homeowner" },
  { text: "Saved us thousands in penalties. Incredible service!", author: "S. Patel, Developer" },
  { text: "Fast, friendly, and totally transparent with pricing and process.", author: "D. Rivera, Architect" },
  { text: "Took care of a last-minute permit need right before our deadline. Lifesavers.", author: "A. Singh, Contractor" },
  { text: "Navigated all the DOB complexities for us. We didn’t lift a finger.", author: "E. Johnson, Landlord" },
  { text: "The team was proactive, thorough, and extremely easy to work with.", author: "M. Alvarez, Project Manager" },
  { text: "Helped us close open violations fast and move forward with our renovation.", author: "H. Osei, Homeowner" },
  { text: "We felt fully supported from start to finish. Great experience!", author: "N. Davis, Real Estate Agent" }
]

const Testimonials =()=> {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)
  const intervalRef = useRef(null)
  const containerRef = useRef(null)

  // Set responsive number of testimonials
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4)
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3)
      } else {
        setItemsToShow(1)
      }
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)
    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    startAutoScroll()
    return stopAutoScroll
  }, [currentIndex, itemsToShow])

  const startAutoScroll = () => {
    stopAutoScroll()
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 5000)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0
    setCurrentIndex(prevIndex)
  }

  const handleNext = () => {
    const maxIndex = testimonials.length - itemsToShow
    const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0
    setCurrentIndex(nextIndex)
  }

  return (
    <section
      id="testimonials"
      className="bg-white py-12 px-4 text-center relative group"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <h2 className="text-3xl font-semibold mb-6 text-blue-800">Client Testimonials</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Slider */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
            width: `${(100 / itemsToShow) * testimonials.length}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full px-4 md:px-6 lg:px-8"
              style={{ flex: `0 0 ${100 / testimonials.length}%` }}
            >
              <div className="bg-blue-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <p className="text-blue-900">“{testimonial.text}”</p>
                <p className="mt-4 font-semibold text-blue-800">– {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 shadow-md rounded-full hover:bg-blue-100 z-10"
          onClick={handlePrev}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 shadow-md rounded-full hover:bg-blue-100 z-10"
          onClick={handleNext}
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  )
}

export default Testimonials