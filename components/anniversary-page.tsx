"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface AnniversaryPageProps {
  onContinue: () => void
}

interface Video {
  src: string
  poster: string
  title: string
}

export default function AnniversaryPage({ onContinue }: AnniversaryPageProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const videos: Video[] = [
    {
      src: "/202510272317.mp4",
      poster: "/202510272317.mp4",
      title: "Our Special Anniversary Moment 💕"
    },
    {
      src: "/WhatsApp Video 2025-10-27 at 23.25.45_5bf0be49.mp4",
      poster: "/WhatsApp Video 2025-10-27 at 23.25.45_5bf0be49.mp4",
      title: "Our Beautiful Memories Together ✨"
    },
    {
      src: "/WhatsApp Video 2025-10-27 at 16.51.06_311f85ba.mp4",
      poster: "/WhatsApp Video 2025-10-27 at 16.51.06_311f85ba.mp4",
      title: "Forever and Always 💖"
    }
  ]

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex(currentVideoIndex + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (currentVideoIndex > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex(currentVideoIndex - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleDotClick = (index: number) => {
    if (index !== currentVideoIndex && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex(index)
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentVideoIndex > 0 && !isTransitioning) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentVideoIndex(prev => prev - 1)
          setIsTransitioning(false)
        }, 300)
      } else if (e.key === "ArrowRight" && currentVideoIndex < videos.length - 1 && !isTransitioning) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentVideoIndex(prev => prev + 1)
          setIsTransitioning(false)
        }, 300)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentVideoIndex, isTransitioning, videos.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 overflow-y-auto">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-3xl sm:text-4xl md:text-5xl floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.2,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl my-8">
        <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-3xl border-4 border-pink-300 shadow-2xl overflow-hidden">
          {/* Confetti/hearts animation overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-400 text-2xl sm:text-3xl animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {['💕', '💖', '✨', '🎉', '💝'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-20 p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse">💕✨🎉✨💕</div>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent px-2">
                Happy 2 Month Anniversary!
              </h1>
              <p className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-600 italic">
                October 27, 2025
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-pink-300 shadow-lg max-w-4xl mx-auto">
                <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-pink-700 leading-relaxed text-left">
                  Enhrda it&apos;s our two month anniversary and I really want to tell you how much I&apos;m blessed and lucky I am that I have you Lulu. Maybe we argue a lot but I really love you my sweet girl and always will be here for you. Maybe I&apos;m not perfect but I always try to be better for you. I got you some chocolate because ik ur fatty, just know lulu you are my everything and i love you so much. with you life has a meaning and without you life has no meaning. I love you so much lulu and i always will be here for you. and i will keep saying i love you brdo aashan words cannot describe how much i really really love you ya habibt alby. 💝
                </p>
              </div>
            </div>

            {/* Video Carousel */}
            <div className="space-y-4">
              {/* Video Title */}
              <div className={`text-center transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl text-pink-600 font-semibold">
                  {videos[currentVideoIndex].title}
                </h3>
              </div>

              {/* Video Container with Navigation */}
              <div className="relative max-w-5xl mx-auto">
                {/* Previous Button - Desktop */}
                <button
                  onClick={handlePrevious}
                  disabled={currentVideoIndex === 0}
                  className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 z-30 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transition-all duration-300 ${
                    currentVideoIndex === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:scale-110 hover:shadow-xl active:scale-95'
                  }`}
                  aria-label="Previous video"
                >
                  <span className="text-2xl font-bold">‹</span>
                </button>

                {/* Video Display */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 bg-gradient-to-br from-pink-100 to-rose-100 transition-all duration-300 ${
                  isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <video
                    key={currentVideoIndex}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[65vh]"
                    poster={videos[currentVideoIndex].poster}
                  >
                    <source src={videos[currentVideoIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video counter badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="font-poppins text-sm sm:text-base font-semibold text-pink-600">
                      {currentVideoIndex + 1} / {videos.length}
                    </span>
                  </div>
                </div>

                {/* Next Button - Desktop */}
                <button
                  onClick={handleNext}
                  disabled={currentVideoIndex === videos.length - 1}
                  className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 z-30 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transition-all duration-300 ${
                    currentVideoIndex === videos.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:scale-110 hover:shadow-xl active:scale-95'
                  }`}
                  aria-label="Next video"
                >
                  <span className="text-2xl font-bold">›</span>
                </button>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="flex md:hidden gap-4 justify-center items-center px-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentVideoIndex === 0}
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transition-all duration-300 ${
                    currentVideoIndex === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'active:scale-95'
                  }`}
                  aria-label="Previous video"
                >
                  <span className="text-3xl font-bold">‹</span>
                </button>

                {/* Progress Dots */}
                <div className="flex gap-2 sm:gap-3">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentVideoIndex
                          ? 'w-10 sm:w-12 h-3 sm:h-4 bg-gradient-to-r from-pink-500 to-rose-500'
                          : 'w-3 sm:w-4 h-3 sm:h-4 bg-pink-300 hover:bg-pink-400'
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentVideoIndex === videos.length - 1}
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transition-all duration-300 ${
                    currentVideoIndex === videos.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'active:scale-95'
                  }`}
                  aria-label="Next video"
                >
                  <span className="text-3xl font-bold">›</span>
                </button>
              </div>

              {/* Desktop Progress Dots */}
              <div className="hidden md:flex gap-3 justify-center">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentVideoIndex
                        ? 'w-16 h-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg'
                        : 'w-4 h-4 bg-pink-300 hover:bg-pink-400 hover:scale-125'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Love message */}
            <div className="text-center space-y-3 sm:space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-pink-300 animate-fade-in max-w-3xl mx-auto">
              <p className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-700 italic">
                &quot;Two months down, forever to go&quot;
              </p>
              <p className="font-poppins text-base sm:text-lg md:text-xl text-rose-600 font-semibold">
                I LOVE YOU SO MUCH, LULU! 💖
              </p>
            </div>

            {/* 10 Things I Hate About You Reference */}
            <div className="text-center space-y-2 bg-gradient-to-r from-pink-100/80 via-rose-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-rose-300 animate-slide-up max-w-3xl mx-auto">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">📝💕</div>
              <p className="font-playfair text-base sm:text-lg md:text-xl lg:text-2xl text-rose-700 italic leading-relaxed">
                &quot;But mostly I hate the way I don&apos;t hate you.
                <br />
                Not even close, not even a little bit, not even at all.&quot;
              </p>
              <p className="font-poppins text-xs sm:text-sm md:text-base text-pink-600 mt-2">
                — 10 Things I Hate About You 💕
              </p>
            </div>

            {/* Continue button */}
            <div className="text-center pb-2 pt-4">
              <Button
                onClick={onContinue}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full font-bold text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg"
              >
                Continue to Our Love Story 💕
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

