import { Card } from "@/components/ui/card"

export default function ReasonsSection() {
  const reasons = [
    "You are the only person that understands me",
    "You aren't afraid of showing your love for me",
    "You have the purest and kindest heart",
    "You treat me the best a man ever could",
    "You always listen to me (which is a lot)",
    "You make me feel really safe",
    "You never get bored of me",
    "Of the way you look at me",
    "You are my everything",
    "I can be myself when I'm around you",
    "We're almost the same person",
    "You make me so happy",
    "You care",
    "You're the one I've always wanted",
    "You made me believe in love",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-5xl font-bold text-pink-600 mb-3">❤️ 15 Reasons Why She Loves Me ❤️</h2>
        <p className="font-poppins text-lg text-pink-500">In her own handwriting</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className="p-6 bg-white border-2 border-pink-200 hover:shadow-lg transition-all hover:scale-105 hover:border-pink-400"
          >
            <div className="flex items-start gap-4">
              <span className="font-playfair text-4xl text-pink-500 font-bold flex-shrink-0">{index + 1}.</span>
              <p className="font-poppins text-gray-700 text-lg leading-relaxed">I love you because {reason}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-10 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 border-2 border-pink-300 shadow-lg">
        <p className="font-playfair text-center text-2xl text-pink-700 font-bold">
          And so many more reasons... I LOVE YOU 💕
        </p>
      </Card>
    </div>
  )
}
