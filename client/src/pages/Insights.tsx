import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

/**
 * Insights: Joseph Pisa's Essays on AI, Time, and Human Potential
 *
 * A collection of thought-provoking essays exploring the intersection of
 * AI, human values, and societal transformation.
 */

// Average reading speed in words per minute
const WORDS_PER_MINUTE = 200;

/**
 * Calculate read time based on word count
 * Uses industry-standard average reading speed of 200 words per minute
 */
function calculateReadTime(content: string[]): string {
  const totalWords = content.reduce((count, paragraph) => {
    const words = paragraph.match(/\S+/g);
    return count + (words ? words.length : 0);
  }, 0);
  
  const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
  return `${minutes} min read`;
}

export default function Insights() {
  const insights = [
    {
      title: "Why Time is the New Currency",
      date: "January 5, 2026",
      readTime: "8 min read",
      excerpt:
        "For centuries, we've measured wealth in money, land, and possessions. But the true currency of a meaningful life has always been time—and AI is about to make us all rich.",
      excerpt: "For centuries, we've measured wealth in money, land, and possessions. But the true currency of a meaningful life has always been time—and AI is about to make us all rich.",
      content: [
        "I remember the moment it hit me. I was sitting in my office, drowning in paperwork, missing my daughter's school play for the third time that month. I had money in the bank, a successful career, all the traditional markers of 'making it.' But I was bankrupt where it mattered most: time.",
        "We've built a society that worships material wealth while systematically stealing our most precious resource. We trade hours of our finite lives for dollars, then spend those dollars trying to buy back moments we can never recover. It's an absurd transaction, yet we've normalized it completely.",
        "But here's what changed my life: realizing that AI can break this cycle. Not someday, not in some distant future—right now.",
        "Think about what AI can do today: analyze thousands of pages of financial documents in seconds. Qualify you for a mortgage while you sleep. Optimize your debt strategy faster than any human expert. Handle the complexity that currently consumes 10-15 hours of your week.",
        "That's not incremental improvement. That's time liberation. That's the difference between missing your kid's play and being there in the front row. Between burning out in your 40s and thriving into your 80s. Between surviving and actually living.",
        "The revolution isn't that AI makes us more productive—though it does. It's that AI makes time abundant again. And time abundance changes everything.",
        "When you have time, you can be present for your children. You can pursue creative projects. You can contribute to your community. You can sleep. You can think. You can be human.",
        "This is why we're building Time & Attention differently. We're not just another AI company trying to maximize shareholder value. We're creating a model where technology serves human flourishing, where efficiency creates space for life instead of just more work.",
        "The choice before us is simple: use AI to extract more productivity from human workers, or use AI to give humans their lives back. I know which future I'm building toward.",
        "Time is the new currency. And unlike money, we all get the same amount—24 hours a day. The question is: what will you do with yours when AI handles the rest?",
      ],
      author: "Joseph Pisa",
    },
    {
      title: "The Beautiful Paradox: Less Stress, More Productivity",
      date: "December 28, 2025",
      readTime: "6 min read",
      excerpt:
        "How can AI make life both less stressful AND more productive? It seems contradictory, but it's the key to everything we're building.",
      excerpt: "How can AI make life both less stressful AND more productive? It seems contradictory, but it's the key to everything we're building.",
      content: [
        "People look at me skeptically when I say AI will make life less stressful and more productive simultaneously. They think I'm selling snake oil. 'Pick one,' they say. 'You can't have both.'",
        "But they're wrong. And the reason they're wrong reveals everything that's broken about how we think about productivity.",
        "We've confused frantic activity with meaningful output. We've convinced ourselves that stress is the price of success. We've built entire industries around the idea that productivity requires grinding yourself into dust.",
        "This is nonsense. And AI proves it.",
        "Here's the truth: stress doesn't make you productive. Stress makes you reactive. It narrows your thinking, shortens your time horizon, and forces you into survival mode. You're busy, yes. But you're not building anything that lasts.",
        "Real productivity—the kind that creates lasting value—requires clear thinking, intentionality, and presence. All of which require low stress.",
        "This is where AI changes everything. When AI handles the complexity, the administrative burden, the document review, the qualification checks—you get your cognitive bandwidth back. You're not stressed because you're not drowning.",
        "And with that clarity comes genuine productivity. You make better decisions because you're not in crisis mode. You solve harder problems because you have mental space. You create more value because you're operating from your strengths, not just surviving.",
        "I've watched it happen in our pilot programs. People who were working 60-hour weeks, missing family dinners, barely sleeping—they suddenly have time. And yes, they spend some of it with family. But they also come back to work refreshed, creative, strategic.",
        "Their output doesn't decrease. It transforms. They're not just doing more tasks—they're solving bigger problems, seeing clearer paths, making bolder moves.",
        "This is the beautiful paradox: AI makes it possible to be less stressed AND more productive because it breaks the false equivalence between busyness and value creation.",
        "The Industrial Revolution gave us machines to multiply our physical labor. The AI Revolution gives us machines to multiply our mental clarity. That's not just an incremental improvement—it's a fundamental restructuring of what it means to work.",
        "So yes, you can have both. Less stress and more productivity. It's not a paradox—it's the natural outcome of technology that serves human flourishing instead of just corporate efficiency.",
        "This is the world we're building at Time & Attention. Not one where you work harder, but one where you work clearer. Not one where you do more, but one where you matter more.",
      ],
      author: "Joseph Pisa",
    },
    {
      title: "Why I'm Building a Non-Profit in a Capitalist World",
      date: "December 15, 2025",
      readTime: "10 min read",
      excerpt:
        "People think I'm crazy for building a non-profit AI company. They're right to be skeptical. Here's why I'm doing it anyway—and why it might be the only viable path forward.",
      excerpt: "People think I'm crazy for building a non-profit AI company. They're right to be skeptical. Here's why I'm doing it anyway—and why it might be the only viable path forward.",
      content: [
        "Let me be clear: I believe in markets. I believe in entrepreneurship. I've spent my career building businesses, creating value, serving customers. I'm not anti-capitalist.",
        "But I've also watched capitalism eat itself. I've seen companies optimize for quarterly earnings at the expense of long-term value. I've watched industries consolidate until innovation dies. I've witnessed the relentless pursuit of profit destroy communities, relationships, and lives.",
        "The mortgage industry is a perfect example. The infrastructure exists to help people buy homes and build wealth. But the incentives are completely misaligned. Lenders profit from complexity, not clarity. Brokers benefit from confusion, not education. The entire system is designed to extract maximum value from borrowers while providing minimum transparency.",
        "AI could fix this overnight. AI could make mortgage qualification simple, fast, and accessible. It could eliminate the information asymmetry that allows predatory practices. It could democratize access to financial services that have historically been gatekept by wealth and privilege.",
        "But here's the problem: if you build that AI within a traditional for-profit structure, the incentives corrupt the mission. Investors want maximum returns. That means charging maximum rates, creating maximum dependency, extracting maximum value.",
        "The AI becomes another tool of exploitation instead of liberation.",
        "So I had a choice: build a traditional company and compromise the mission, or find a different way.",
        "I chose the non-profit structure because it aligns incentives with impact. Every dollar we make beyond operational costs goes back into the community—financial literacy programs, job training, credit building initiatives. The AI doesn't exist to generate profit; it exists to create possibility.",
        "People ask me: 'How will you compete with for-profit companies?' The answer is simple: we'll compete on value, not marketing. We'll compete on transparency, not tricks. We'll compete on actual impact, not empty promises.",
        "When your AI mortgage service costs half as much as traditional options and provides twice the clarity, you don't need venture capital and Super Bowl ads. You need word of mouth and real results.",
        "Here's the beautiful part: the non-profit structure makes us MORE sustainable, not less. We're not beholden to investors demanding exponential growth. We're not forced to compromise our values for quarterly earnings. We can build slowly, carefully, correctly.",
        "And the pay-it-forward model creates a virtuous cycle: the better we serve people, the more they tell others. The more people we serve, the more impact we create. The more impact we create, the more the model proves itself.",
        "I'm not naive. I know this is hard. I know we're fighting against decades of entrenched interests and conventional wisdom. I know people will try to copy our model, corrupt our mission, steal our ideas.",
        "But I also know this: the traditional model is failing. It's creating wealth inequality, opportunity gaps, and social fragmentation at an accelerating rate. AI in the hands of purely profit-driven entities will only accelerate that fragmentation.",
        "We need a different model. One that proves technology can serve human flourishing. One that demonstrates business can be both profitable and purposeful. One that shows capitalism and compassion aren't opposites.",
        "That's why I'm building Time & Attention as a non-profit. Not because I'm anti-profit, but because I'm pro-people. Not because I don't believe in markets, but because I believe markets should serve humanity, not enslave it.",
        "This is the grand experiment. I don't know if it will work. But I know the alternative—AI controlled by corporations focused solely on profit—leads somewhere dark.",
        "So I'm betting everything on a different path. Join me.",
      ],
      author: "Joseph Pisa",
    },
    {
      title: "The Three Questions That Changed Everything",
      date: "December 1, 2025",
      readTime: "7 min read",
      excerpt:
        "Three simple questions led me to found Time & Attention. They might change your life too.",
      excerpt: "Three simple questions led me to found Time & Attention. They might change your life too.",
      content: [
        "I was successful by every conventional measure. Good income, growing business, respect in my industry. But I was miserable. And I couldn't figure out why.",
        "Then one sleepless night, I asked myself three questions. They seemed simple at the time. Looking back, they were the most important questions of my life.",
        "Question 1: If I died tomorrow, what would I regret not doing?",
        "The answers came fast: not being present for my kids. Not pursuing creative projects. Not contributing to my community. Not building something that mattered beyond quarterly earnings.",
        "None of my regrets were about work. All of my daily stress was about work. The disconnect was absurd.",
        "Question 2: What am I optimizing for?",
        "This one hit harder. I realized I was optimizing for money, status, and security—all of which are means to an end. But I'd forgotten the end. I was climbing a ladder leaning against the wrong wall.",
        "I was optimizing for tangible wealth while ignoring time, attention, relationships, health, meaning—all the things that actually constitute a good life.",
        "Question 3: What would I build if I could build anything?",
        "I gave myself permission to dream. No constraints, no 'being realistic,' no compromise. Just pure vision.",
        "The answer was immediate: I'd build a system that gives people their time back. That values attention over accumulation. That uses technology to liberate rather than enslave. That proves business can be purposeful.",
        "These three questions led directly to Time & Attention. They showed me the gap between how I was living and how I wanted to live. Between what society told me to value and what actually mattered.",
        "But here's what I've learned since: these questions aren't just for me. They're universal.",
        "Everyone I share them with has the same experience: initial discomfort, then clarity, then urgency. They realize they're also climbing the wrong ladder. They're also optimizing for the wrong things. They also have a vision for something better.",
        "The tragedy is that most people stop there. They have the epiphany, then go back to the grind. They know what they want to build, but they don't believe it's possible.",
        "This is where AI changes everything. Because AI makes the 'impossible' possible.",
        "Want to give people their time back? AI can handle the complexity that currently consumes hours of their day.",
        "Want to value attention over accumulation? AI makes services so efficient you can provide them at cost.",
        "Want technology that liberates? AI can automate the drudgery while amplifying human creativity and connection.",
        "The vision isn't the hard part. The technology isn't even the hard part. The hard part is believing it's possible and having the courage to build it.",
        "So I'm asking you the same three questions: What would you regret not doing? What are you optimizing for? What would you build if you could build anything?",
        "Sit with those questions. Let them make you uncomfortable. Let them show you the gap between how you're living and how you want to live.",
        "Then do something about it. Build something. Change something. Stop optimizing for the wrong things.",
        "The world doesn't need another app or another profit-maximizing enterprise. It needs people with vision and courage who are willing to build something that actually matters.",
        "AI gives us the tools. The question is: do we have the wisdom to use them well?",
      ],
      author: "Joseph Pisa",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b"
        style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}
      >
        <div className="container flex items-center justify-between py-4">
          <div
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-2xl font-bold text-[#c85a3a]"
          >
            <a href="/">Time & Attention</a>
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="/"
              className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors"
            >
              Home
            </a>
            <a
              href="/how-it-works"
              className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors"
            >
              How It Works
            </a>
            <a
              href="/mentors"
              className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors"
            >
              Mentors
            </a>
            <a
              href="/future-vision"
              className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors"
            >
              Future Vision
            </a>
            <a
              href="/insights"
              className="text-[#c85a3a] font-semibold transition-colors"
            >
              Insights
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <BookOpen className="w-16 h-16 text-[#c85a3a]" />
            </div>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-6xl font-bold text-[#2a2a2a] mb-6"
            >
              Insights from Joseph Pisa
            </h1>
            <p className="text-xl text-[#6b6b6b] leading-relaxed max-w-2xl mx-auto">
              Essays exploring the intersection of AI, human potential, and the
              transformation of how we live and work. Written by Joseph Pisa,
              founder of the Time & Attention movement.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-20 bg-gradient-to-br from-[#c85a3a] to-[#2d5a3d] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide opacity-90">
              Featured Essay
            </div>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {insights[0].title}
            </h2>
            <div className="flex items-center gap-6 mb-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {insights[0].date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {calculateReadTime(insights[0].content)}
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-8 opacity-95">
              {insights[0].excerpt}
            </p>
            <a
              href="#insight-0"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#c85a3a] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Read Full Essay <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-20 md:py-32 bg-[#f9f7f4]">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-32">
            {insights.map((insight, idx) => (
              <article key={idx} id={`insight-${idx}`} className="scroll-mt-20">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="mb-6">
                      <h2
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-4"
                      >
                        {insight.title}
                      </h2>
                      <div className="flex items-center gap-6 text-sm text-[#6b6b6b]">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {insight.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {calculateReadTime(insight.content)}
                        </div>
                        <div className="font-semibold text-[#c85a3a]">
                          By {insight.author}
                        </div>
                      </div>
                    </div>

                    <div className="max-w-none">
                      <p className="text-xl text-[#6b6b6b] leading-relaxed mb-8 font-semibold italic border-l-4 border-[#c85a3a] pl-6">
                        {insight.excerpt}
                      </p>

                      <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
                        {insight.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[#6b6b6b]">
                          Written by{" "}
                          <span className="font-semibold text-[#2a2a2a]">
                            {insight.author}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <button className="text-[#c85a3a] hover:text-[#b84a2a] transition-colors text-sm font-semibold">
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-bold text-[#2a2a2a]"
            >
              Join the Conversation
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              These essays are just the beginning. The Time & Attention movement
              is about collective wisdom, shared vision, and building the future
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a]"
              >
                Explore Our Mission
              </a>
              <a
                href="/future-vision"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#a8d5ba] text-[#2a2a2a] hover:bg-[#98c5aa]"
              >
                See the Future Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-white py-12">
        <div className="container">
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2026 Time & Attention. Founded by Joseph Pisa. All rights
              reserved.
            </p>
            <p className="mt-2">
              Building the future where AI serves humanity, and humanity pays it
              forward.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
