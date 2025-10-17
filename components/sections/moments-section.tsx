import { Card } from "@/components/ui/card"

export default function MomentsSection() {
  const moments = [
    {
      date: "27/08/2025",
      title: "Labubu Date",
      description: "The day we said we liked each other. The beginning of our forever. 💕",
      emoji: "🎉",
    },
    {
      date: "14/09/2025",
      title: "I Love You",
      description: 'The day you said "I love you" and made me the happiest person alive.',
      emoji: "💕",
    },
    {
      date: "Every Day",
      title: "Your Smile",
      description: "Every time you smile, I fall for you all over again.",
      emoji: "😊",
    },
    {
      date: "Late Nights",
      title: "Our Talks",
      description: "Those deep conversations where we share our souls.",
      emoji: "🌙",
    },
    {
      date: "Random Times",
      title: "Your Meow",
      description: 'That random "meow" voice message that always makes me laugh.',
      emoji: "🐱",
    },
    {
      date: "Always",
      title: "Your Presence",
      description: "Just being around you makes everything better.",
      emoji: "✨",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-pink-600 mb-2">🌟 Best Moments 🌟</h2>
        <p className="text-pink-500 text-lg">Memories that mean everything to me</p>
      </div>

      <div className="space-y-4">
        {moments.map((moment, index) => (
          <Card key={index} className="p-6 bg-white border-2 border-pink-200 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{moment.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-pink-500 bg-pink-100 px-3 py-1 rounded-full">
                    {moment.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-pink-600 mb-2">{moment.title}</h3>
                <p className="text-gray-700 text-lg">{moment.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-center">
        <p className="text-pink-700 italic text-lg">Every moment with you is a best moment. I LOVE YOU 💕</p>
      </Card>
    </div>
  )
}
