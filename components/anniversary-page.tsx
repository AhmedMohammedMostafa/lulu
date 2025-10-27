"use client"

import { Button } from "@/components/ui/button"

interface AnniversaryPageProps {
  onContinue: () => void
}

export default function AnniversaryPage({ onContinue }: AnniversaryPageProps) {
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
                  Enhrda it&apos;s our two month anniversary and I really want to tell you how much I&apos;m blessed and lucky I am that I have you Lulu. Maybe we argue a lot but I really love you my sweet girl and always will be here for you. Maybe I&apos;m not perfect but I always try to be better for you. I made you a chocolate gift card and got you KitKat (remember why I did that please). 💝
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 sm:border-4 border-pink-200 max-w-4xl mx-auto">
              <video
                controls
                autoPlay
                playsInline
                className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh]"
                poster="/WhatsApp Video 2025-10-27 at 16.51.06_311f85ba.mp4"
              >
                <source src="/WhatsApp Video 2025-10-27 at 16.51.06_311f85ba.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

