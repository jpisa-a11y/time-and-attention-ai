import { Zap, Brain, Heart, Globe, Sparkles, Rocket } from "lucide-react";

/**
 * Future Vision: Joseph Pisa's Transformative AI Possibilities
 *
 * A bold exploration of how AI can revolutionize every aspect of human existence,
 * authored by Joseph Pisa, founder of the Time & Attention movement.
 */

export default function FutureVision() {
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
              className="text-[#c85a3a] font-semibold transition-colors"
            >
              Future Vision
            </a>
            <a
              href="/insights"
              className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors"
            >
              Insights
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-[#c85a3a] to-[#2d5a3d]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 flex justify-center">
              <Rocket className="w-20 h-20 animate-pulse" />
            </div>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              The Nuclear Possibilities of AI
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              By Joseph Pisa, Founder of Time & Attention
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              We stand at the threshold of the most profound transformation in
              human history. AI isn't just a tool—it's the key to unlocking
              humanity's fullest potential. Let me show you the future we're
              building together.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-8"
            >
              A Letter from Joseph Pisa
            </h2>
            <div className="space-y-6 text-lg text-[#6b6b6b] leading-relaxed">
              <p className="text-xl font-semibold text-[#c85a3a]">
                Dear Friend,
              </p>
              <p>
                For too long, we've accepted that life must be stressful,
                fragmented, and overwhelming. We've normalized the idea that
                success means sacrificing time with family, personal growth, and
                community connection. We've built a world where we're always
                busy but never truly present.
              </p>
              <p>
                But what if I told you this doesn't have to be our reality? What
                if AI could liberate us from this exhausting treadmill? Not in
                some distant future, but right now, today.
              </p>
              <p className="font-semibold text-[#2a2a2a]">
                I'm not talking about incremental improvements. I'm talking
                about a complete paradigm shift—a nuclear transformation of how
                we live, work, and relate to one another.
              </p>
              <p>
                Let me share with you the possibilities that keep me awake at
                night with excitement. These aren't science fiction—they're the
                inevitable result of AI serving humanity instead of
                corporations. This is the future we're building at Time &
                Attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Sections */}
      <section className="py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Vision 1: Financial Liberation */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#c85a3a] text-white">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#2a2a2a]"
                >
                  Vision 1: Universal Financial Liberation
                </h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  Imagine a world where <strong>every person</strong>,
                  regardless of their background or income level, has access to
                  world-class financial guidance. Not once a year during tax
                  season, but <strong>every single day</strong>.
                </p>
                <p>
                  AI can analyze your entire financial life—mortgage options,
                  debt strategy, investment opportunities, tax optimization—in
                  seconds. But here's the revolutionary part: it does this for{" "}
                  <strong>free or near-free</strong>, because the marginal cost
                  of AI assistance approaches zero.
                </p>
                <p className="text-[#2a2a2a] font-semibold text-lg">
                  The result? Financial inequality doesn't disappear overnight,
                  but the playing field levels dramatically.
                </p>
                <p>
                  The single mother working two jobs gets the same sophisticated
                  financial strategy as a Fortune 500 executive. The recent
                  immigrant receives mortgage guidance in their native language
                  with cultural sensitivity. The entrepreneur with an
                  unconventional income stream finally qualifies for a home loan
                  because AI understands nuance that traditional systems miss.
                </p>
                <p className="italic border-l-4 border-[#c85a3a] pl-4 text-[#2a2a2a]">
                  "This isn't charity. It's not even altruism. It's the natural
                  outcome of technology that serves people instead of profits.
                  And it changes everything." —Joseph Pisa
                </p>
              </div>
            </div>

            {/* Vision 2: Time Abundance */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#a8d5ba] text-[#2a2a2a]">
                  <Heart className="h-8 w-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#2a2a2a]"
                >
                  Vision 2: The Era of Time Abundance
                </h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  We've lived through the Agricultural Revolution, the
                  Industrial Revolution, and the Information Revolution. Now
                  comes the <strong>Time Revolution</strong>.
                </p>
                <p>
                  Think about how much time you spend on administrative tasks:
                  reviewing documents, scheduling appointments, researching
                  options, comparing prices, filing paperwork, tracking
                  deadlines. Conservatively, that's{" "}
                  <strong>10-15 hours per week</strong> for the average person.
                </p>
                <p className="text-[#2a2a2a] font-semibold text-lg">
                  AI gives you that time back. All of it.
                </p>
                <p>
                  But here's where it gets truly nuclear: when millions of
                  people suddenly have an extra 10-15 hours per week, what
                  happens? Some will spend it with family. Others will pursue
                  creative projects. Many will contribute to their communities.
                  A few will start businesses that change the world.
                </p>
                <p>
                  The compounding effect is staggering. More time means less
                  stress. Less stress means better health. Better health means
                  more presence. More presence means stronger relationships.
                  Stronger relationships mean more resilient communities. More
                  resilient communities mean{" "}
                  <strong>a fundamentally different society</strong>.
                </p>
                <p className="italic border-l-4 border-[#a8d5ba] pl-4 text-[#2a2a2a]">
                  "We're not just reclaiming hours. We're reclaiming our
                  humanity. We're remembering what it means to be truly alive."
                  —Joseph Pisa
                </p>
              </div>
            </div>

            {/* Vision 3: Collective Intelligence */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#2d5a3d] text-white">
                  <Brain className="h-8 w-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#2a2a2a]"
                >
                  Vision 3: Collective Intelligence Amplification
                </h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  AI isn't just about individual productivity. It's about{" "}
                  <strong>collective intelligence</strong>—the ability for
                  humans to solve problems together at a scale previously
                  unimaginable.
                </p>
                <p>
                  Consider this: right now, there's someone in your city who has
                  solved a problem you're struggling with. But you'll never meet
                  them. You'll never learn from their experience. That knowledge
                  dies with them, and you waste months or years reinventing
                  solutions.
                </p>
                <p className="text-[#2a2a2a] font-semibold text-lg">
                  AI changes this fundamentally.
                </p>
                <p>
                  Imagine AI that learns from every mortgage application, every
                  debt repayment strategy, every financial success and failure
                  across millions of people. Not to exploit that data, but to{" "}
                  <strong>share wisdom</strong>. To connect you with the exact
                  solution that worked for someone in a similar situation. To
                  show you the path forward based on real-world outcomes, not
                  theoretical models.
                </p>
                <p>
                  This is collective intelligence in action: human wisdom,
                  multiplied by AI's ability to find patterns and connections.
                  Licensed human mentors guide the ethics and ensure fairness,
                  but the knowledge base grows with every interaction.
                </p>
                <p className="italic border-l-4 border-[#2d5a3d] pl-4 text-[#2a2a2a]">
                  "We're building a future where no one has to struggle alone.
                  Where every challenge you face has already been solved by
                  someone, somewhere—and AI helps you find that solution."
                  —Joseph Pisa
                </p>
              </div>
            </div>

            {/* Vision 4: Pay It Forward Economy */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#c85a3a] text-white">
                  <Globe className="h-8 w-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#2a2a2a]"
                >
                  Vision 4: The Pay It Forward Economy
                </h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  Here's the most radical idea: what if businesses didn't need
                  to maximize profit? What if AI made it possible to provide
                  world-class services at cost, with{" "}
                  <strong>
                    excess revenue automatically funding community support
                  </strong>
                  ?
                </p>
                <p>
                  This isn't theoretical. It's the model we're building at Time
                  & Attention.
                </p>
                <p className="text-[#2a2a2a] font-semibold text-lg">
                  AI-powered services run at a fraction of traditional costs.
                  Instead of pocketing that difference, we invest it in the
                  community.
                </p>
                <p>
                  Mortgage services fund financial literacy programs. Document
                  review fees support job training initiatives. The AI that
                  helps you qualify for a home loan also funds programs that
                  help others build credit and financial stability.
                </p>
                <p>
                  The beautiful part? This creates a{" "}
                  <strong>virtuous cycle</strong>. As more people gain financial
                  stability, they have more capacity to pay it forward—whether
                  through time, money, or expertise. The community strengthens
                  itself, exponentially, automatically.
                </p>
                <p className="italic border-l-4 border-[#c85a3a] pl-4 text-[#2a2a2a]">
                  "We're proving that capitalism and compassion aren't
                  opposites. AI makes it possible to be profitable AND
                  purposeful. This is the new business model for the 21st
                  century." —Joseph Pisa
                </p>
              </div>
            </div>

            {/* Vision 5: Human Potential Unleashed */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#a8d5ba] text-[#2a2a2a]">
                  <Zap className="h-8 w-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#2a2a2a]"
                >
                  Vision 5: Human Potential Unleashed
                </h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  This is where it all comes together. Financial liberation +
                  time abundance + collective intelligence + a pay-it-forward
                  economy = <strong>unprecedented human flourishing</strong>.
                </p>
                <p>
                  Think about the artists who never created because they were
                  trapped in soul-crushing jobs. The inventors who never
                  invented because they couldn't afford to take risks. The
                  teachers, caregivers, and community organizers who burned out
                  because they gave everything and received nothing in return.
                </p>
                <p className="text-[#2a2a2a] font-semibold text-lg">
                  When AI handles the complexity and monotony, human creativity
                  and compassion can finally flourish at scale.
                </p>
                <p>
                  We're not talking about a few privileged people having better
                  lives. We're talking about <strong>billions of people</strong>{" "}
                  discovering they have time, energy, and resources to pursue
                  what makes them come alive.
                </p>
                <p>
                  Some will write novels. Others will coach Little League. Many
                  will simply be present for their children's bedtime stories.
                  All of it matters. All of it strengthens the fabric of society
                  in ways we can barely imagine.
                </p>
                <p className="italic border-l-4 border-[#a8d5ba] pl-4 text-[#2a2a2a]">
                  "This is the nuclear possibility: AI doesn't replace human
                  potential. It unleashes it. And when billions of humans are
                  unleashed, we solve problems we currently think are
                  unsolvable." —Joseph Pisa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-8 text-center"
            >
              The Path Forward
            </h2>
            <div className="space-y-6 text-lg text-[#6b6b6b] leading-relaxed">
              <p>
                These visions aren't fantasies. They're{" "}
                <strong>possibilities</strong>—real, achievable outcomes if we
                make the right choices about how to deploy AI.
              </p>
              <p>
                At Time & Attention, we're building the proof of concept. We're
                showing that AI-powered services can be accessible, ethical, and
                transformative. We're demonstrating that the pay-it-forward
                model works. We're creating the template that others can
                replicate and improve upon.
              </p>
              <p className="text-[#2a2a2a] font-semibold text-xl">
                But this isn't about one company or one founder. This is about a
                movement.
              </p>
              <p>
                I'm inviting you to join us—not as customers, but as{" "}
                <strong>co-creators</strong>. To imagine boldly. To demand
                better. To insist that AI serves humanity's highest aspirations,
                not just corporate bottom lines.
              </p>
              <p>
                Together, we can build a world where technology liberates rather
                than enslaves. Where time and attention are valued above
                material accumulation. Where paying it forward is the natural
                response to having received.
              </p>
              <p className="text-[#c85a3a] font-semibold text-xl italic">
                The future isn't something that happens to us. It's something we
                create together.
              </p>
              <p className="text-right font-semibold text-[#2a2a2a] mt-8">
                — Joseph Pisa
                <br />
                Founder, Time & Attention Movement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d5a3d] to-[#c85a3a] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-bold"
            >
              Ready to Build the Future?
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Join the Time & Attention movement. Experience AI that serves your
              life. Discover what's possible when technology liberates humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-white text-[#2d5a3d] hover:bg-gray-100"
              >
                Learn More
              </a>
              <a
                href="/insights"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a]"
              >
                Read More Insights
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
