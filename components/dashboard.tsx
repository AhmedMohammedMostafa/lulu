"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MomentsSection from "./sections/moments-section"

type Section = "home" | "moments" | "trivia"

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<Section>("home")

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "moments", label: "Best Moments", icon: "✨" },
    { id: "trivia", label: "Love Trivia", icon: "🧠" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 text-4xl floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.15,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-pink-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="font-playfair text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Our Love Story
            </h1>
            <div className="text-3xl animate-pulse mt-2">💕</div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                variant={activeSection === item.id ? "default" : "outline"}
                className={`transition-all font-poppins font-semibold px-6 py-2 rounded-full ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 shadow-lg scale-105"
                    : "border-2 border-pink-300 text-pink-700 hover:bg-pink-50 hover:border-pink-400 hover:scale-105"
                }`}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "moments" && <MomentsSection />}
        {activeSection === "trivia" && <TriviaSection />}
      </div>
    </div>
  )
}

function HomeSection() {
  type GalleryItem =
    | { id: string; type: "image"; src: string; alt: string; caption: string }
    | { id: string; type: "video"; src: string; poster: string; caption: string }

  const placeholderImage = "/placeholder.jpg"
  const galleryItems: GalleryItem[] = [
    { id: "moment-01", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.42_f92dd85b.jpg", alt: "Your mom words", caption: "Your mom words" },
    { id: "moment-02", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.51_dbb457d7.jpg", alt: "FIRST PHOTO WE TOOK TOGETHER", caption: "FIRST PHOTO WE TOGETHER  " },
    { id: "moment-03", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.52_19e4ac84.jpg", alt: "You look so beautiful in this photo", caption: "You look so beautiful in this photo" },
    { id: "moment-04", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.52_315a6aed.jpg", alt: "Funny photo of us", caption: "Funny photo of us " },
    { id: "moment-05", type: "video", src: "/WhatsApp Video 2025-10-17 at 21.23.43_f823781f.mp4", poster: "/WhatsApp Video 2025-10-17 at 21.23.43_f823781f.mp4", caption: "I LOOVE THAT VIDEO" },
    { id: "moment-06", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.52_810c43c1.jpg", alt: "Funny photo of us", caption: "Funny photo of us " },
    { id: "moment-07", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.52_78276ca5.jpg", alt: "You owe me a ride when you get your car license", caption: "You owe me a ride when you get your car license " },
    { id: "moment-08", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.57_5b33c704.jpg", alt: "WE LOOK SUPER CUTE HERE OK", caption: "WE LOOK SUPER CUTE HERE OK " },
    { id: "moment-09", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.57_31bee83f.jpg", alt: "i kept staring at it all day", caption: "i kept staring at it all day " },
    { id: "moment-10", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.23.58_22298efa.jpg", alt: "okay im kinda scared of u cooking for me", caption: "okay im kinda scared of u cooking for me " },
    { id: "moment-11", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.24.02_2c078794.jpg", alt: "I LOOVE THAT PHOTO OF U", caption: "I LOOVE THAT PHOTO OF U " },
    { id: "moment-12", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.24.02_2cd6aa50.jpg", alt: "YOUR FACE IN THIS PHOTO IS SO BEAUTIFUL", caption: "best day when i recived that letters from you" },
    { id: "moment-13", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.24.02_84ee6033.jpg", alt: "YOUR FACE IN THIS PHOTO IS SO BEAUTIFUL", caption: "WE LOOK SO CUTE HERE OK" },
    { id: "moment-14", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.24.02_797d61e7.jpg", alt: "YOUR FACE IN THIS PHOTO IS SO BEAUTIFUL", caption: "US IN THE FUTURE" },
    { id: "moment-15", type: "image", src: "/WhatsApp Image 2025-10-17 at 21.24.02_f112b13c.jpg", alt: "YOUR FACE IN THIS PHOTO IS SO BEAUTIFUL", caption: "WE LOOK ACC SUPER DUPER CUTE HERE" },


  ]
  
  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-3xl blur-2xl"></div>
        <Card className="relative p-16 bg-gradient-to-br from-white via-pink-50 to-rose-50 border-2 border-pink-200 text-center shadow-xl">
          <div className="mb-6 text-6xl animate-pulse">💕</div>
          <h2 className="font-playfair text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            I LOVE YOU
          </h2>
          <p className="font-playfair text-3xl text-rose-500 mb-8 italic">Welcome to our special place, Leyan</p>
          <p className="font-poppins text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This website is a celebration of us, our love, and all the beautiful moments we've shared. From the day we
            said we liked each other (27/08/2025) to every moment after, you've made my life infinitely better. This is
            our story, told with all the love in my heart.
          </p>
        </Card>
      </div>

      {/* I LOVE YOU scattered text */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="font-playfair text-2xl text-pink-400 shimmer">I LOVE YOU</div>
        <div className="font-playfair text-2xl text-rose-400 shimmer" style={{ animationDelay: "0.5s" }}>
          I LOVE YOU
        </div>
        <div className="font-playfair text-2xl text-pink-400 shimmer" style={{ animationDelay: "1s" }}>
          I LOVE YOU
        </div>
      </div>

      {/* Memory Gallery */}
      <section className="space-y-6">
        <div className="text-center">
          <h3 className="font-playfair text-4xl font-bold text-pink-600">Our Gallery</h3>
          <p className="font-poppins text-lg text-pink-500">
            15 tiny snapshots of us—each a reason I fall for you all over again.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col overflow-hidden border-2 border-pink-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="px-5 pt-5">
                <p className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
                  {item.caption}
                </p>
              </div>
              <div className="relative mt-3">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    className="h-56 w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {item.type === "video" && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pink-500 shadow">
                    Video
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Love Message */}
      <Card className="p-12 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 border-2 border-pink-300 shadow-lg">
        <p className="font-playfair text-center text-2xl text-pink-700 italic mb-4">
          "I LOVE YOU" appears throughout this site because that's how I feel about you every single day.
        </p>
        <p className="font-poppins text-center text-pink-600">
          You're my everything, my dream, my forever. Thank you for being you. 💕
        </p>
      </Card>

      {/* More I LOVE YOU scattered */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="font-playfair text-xl text-rose-400 shimmer" style={{ animationDelay: "0.2s" }}>
          I LOVE YOU
        </div>
        <div className="font-playfair text-xl text-pink-400 shimmer" style={{ animationDelay: "0.4s" }}>
          I LOVE YOU
        </div>
        <div className="font-playfair text-xl text-rose-400 shimmer" style={{ animationDelay: "0.6s" }}>
          I LOVE YOU
        </div>
        <div className="font-playfair text-xl text-pink-400 shimmer" style={{ animationDelay: "0.8s" }}>
          I LOVE YOU
        </div>
      </div>
    </div>
  )
}

function TriviaSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)

  const questions = [
    {
      question: "What's my favorite color?",
      options: ["Black", "Red", "Blue", "Green"],
      correct: "Black"
    },
    {
      question: "What is my favorite meal?",
      options: ["Everything", "Pasta", "Pizza", "Shawerma"],
      correct: "Everything"
    },
    {
      question: "What are the words I love most from you?",
      options: ["I love you", "Baby", "Bhbk", "All the above"],
      correct: "All the above"
    },
    {
      question: "How much do you think I love you?",
      options: ["10/10", "9/10", "1/10", "Infinity"],
      correct: "Infinity"
    },
    {
      question: "What's my favorite thing about you?",
      options: ["Your smile", "Your hair", "Your nose", "All the above"],
      correct: "All the above"
    }
  ]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    setShowResult(true)
    
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameCompleted(true)
    }
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setGameCompleted(false)
  }

  if (gameCompleted) {
    return (
      <div className="space-y-8">
        <Card className="p-12 bg-gradient-to-br from-white via-pink-50 to-rose-50 border-2 border-pink-200 text-center shadow-xl">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="font-playfair text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Trivia Complete!
          </h2>
          <p className="font-poppins text-2xl text-pink-700 mb-6">
            You scored {score} out of {questions.length}!
          </p>
          {score === questions.length ? (
            <div className="space-y-4">
              <p className="font-playfair text-2xl text-rose-600 italic">
                Perfect! You know me so well! 💕
              </p>
              <p className="font-poppins text-lg text-pink-600">
                You're absolutely amazing and I love you more than words can express!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-playfair text-2xl text-rose-600 italic">
                Good job, my love! 💕
              </p>
              <p className="font-poppins text-lg text-pink-600">
                Even if you didn't get them all right, you still know me better than anyone else!
              </p>
            </div>
          )}
          <Button 
            onClick={resetGame}
            className="mt-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all"
          >
            Play Again 💕
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Card className="p-12 bg-gradient-to-br from-white via-pink-50 to-rose-50 border-2 border-pink-200 text-center shadow-xl">
        <div className="text-5xl mb-6">🧠💕</div>
        <h2 className="font-playfair text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
          Love Trivia
        </h2>
        <p className="font-poppins text-lg text-gray-700 mb-6">
          Test how well you know me! Answer these questions about us and our love.
        </p>
        <div className="bg-pink-100 rounded-full p-2 mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full h-3 transition-all duration-500" 
               style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
        </div>
        <p className="font-poppins text-pink-600 mb-8">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </Card>

      <Card className="p-12 bg-white border-2 border-pink-200 shadow-lg">
        <h3 className="font-playfair text-3xl font-bold text-pink-600 mb-8 text-center">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="grid gap-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => !showResult && handleAnswerSelect(option)}
              className={`p-6 text-left font-poppins text-lg transition-all ${
                selectedAnswer === option
                  ? showResult
                    ? option === questions[currentQuestion].correct
                      ? "bg-green-100 border-2 border-green-500 text-green-700"
                      : "bg-red-100 border-2 border-red-500 text-red-700"
                    : "bg-pink-100 border-2 border-pink-500 text-pink-700"
                  : showResult && option === questions[currentQuestion].correct
                  ? "bg-green-100 border-2 border-green-500 text-green-700"
                  : "bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300"
              }`}
              disabled={showResult}
            >
              {option}
            </Button>
          ))}
        </div>

        {showResult && (
          <div className="text-center space-y-4">
            {selectedAnswer === questions[currentQuestion].correct ? (
              <div className="space-y-2">
                <p className="font-playfair text-2xl text-green-600">Correct! 💕</p>
                {currentQuestion === 3 && selectedAnswer === "Infinity" && (
                  <p className="font-poppins text-lg text-pink-600 italic">
                    Maybe too much, but I love you more than infinity! 💕
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <p className="font-playfair text-2xl text-red-600">YOU DUMBASS ANSWER RIGHT I LOVE YOU! 😤💕</p>
                <p className="font-poppins text-lg text-pink-600">
                  The correct answer was: <span className="font-bold">{questions[currentQuestion].correct}</span>
                </p>
              </div>
            )}
            <Button 
              onClick={handleNextQuestion}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all"
            >
              {currentQuestion < questions.length - 1 ? "Next Question 💕" : "See Results 🎉"}
            </Button>
          </div>
        )}

        {!showResult && selectedAnswer && (
          <div className="text-center">
            <Button 
              onClick={handleSubmitAnswer}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all"
            >
              Submit Answer 💕
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
