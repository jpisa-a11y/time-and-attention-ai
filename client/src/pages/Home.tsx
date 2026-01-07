import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Zap, Users, Globe } from "lucide-react";

/**
 * Time & Attention: The Joseph Pisa AI Vision
 * 
 * Design System: Organic Authenticity with Purpose
 * - Typography: Cormorant Garamond (headlines) + Lato (body)
 * - Colors: Terracotta (#c85a3a), Sage (#a8d5ba), Forest Green (#2d5a3d), Sand (#e8dcc8)
 * - Spacing: Generous whitespace with organic rhythm
 * - Interactions: Gentle, natural, accessible
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b" style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}>
        <div className="container flex items-center justify-between py-4">
          <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-bold text-[#c85a3a]">
            Time & Attention
          </div>
          <div className="flex gap-8 items-center">
            <a href="#vision" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Vision
            </a>
            <a href="#impact" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Impact
            </a>
            <a href="#mission" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Mission
            </a>
            <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a]">
              Join Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-bold text-[#2a2a2a] leading-tight">
                  Your Time is Your <span className="text-[#c85a3a]">Most Precious Asset</span>
                </h1>
                <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-lg">
                  Imagine a world where AI handles life's complexity—mortgage qualification, debt strategy, document review—so you can reclaim your time and attention. This is Joseph Pisa's vision: technology that liberates humanity, not enslaves it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a] flex items-center justify-center gap-2">
                  Discover the Vision <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#a8d5ba] text-[#2a2a2a] hover:bg-[#98c5aa]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/images/hero-ai-liberation.jpg"
                alt="AI Liberation - Person finding peace through technology"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="vision" className="my-20 md:my-32 py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Modern life is fragmented. Work, finance, family, and self-care all compete for your limited time and attention. Traditional systems demand your presence at every step—document review, qualification checks, exception handling. AI should free us from this burden, not add to it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Complexity Overload",
                description: "Mortgage qualification, debt strategy, and financial planning require hours of manual work and expert review."
              },
              {
                icon: Users,
                title: "Fragmented Services",
                description: "Multiple systems, multiple logins, multiple touchpoints. No unified approach to your financial life."
              },
              {
                icon: Globe,
                title: "Misaligned Incentives",
                description: "Traditional finance prioritizes profit over people. Where's the incentive to truly serve your interests?"
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-white shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                <item.icon className="w-12 h-12 text-[#c85a3a] mb-4" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-3">{item.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joseph Pisa Vision Section */}
      <section className="my-20 md:my-32 py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full">
              <img
                src="/images/pay-it-forward-cycle.jpg"
                alt="Pay It Forward Cycle - Interconnected community and AI"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a]">
                  Joseph Pisa's Vision: Pay It Forward
                </h2>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  Joseph Pisa founded a revolutionary non-profit business structure that shifts our value system from tangible wealth to <span className="font-semibold text-[#c85a3a]">time and attention</span>. The model is elegantly simple:
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "AI-powered services handle the complexity of financial life—mortgages, debt strategy, document review, qualification.",
                  "These services operate with the lowest possible rates, making them accessible to everyone.",
                  "Profits fund non-profit initiatives and community support programs.",
                  "The cycle continues: AI frees time, freed time enables people to pay it forward, and the community strengthens."
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c85a3a] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-[#6b6b6b] leading-relaxed pt-0.5">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Human Partnership Section */}
      <section id="impact" className="my-20 md:my-32 py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              AI + Human Wisdom = Transformation
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              AI doesn't replace human judgment—it enhances it. Licensed human mentors oversee AI decisions, ensuring that technology serves humanity's best interests while maintaining the highest standards of care and ethics.
            </p>
          </div>
          <div className="relative h-96 md:h-96 mb-12">
            <img
              src="/images/ai-mentor-connection.jpg"
              alt="AI Mentor Connection - Diverse professionals supported by AI"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-white shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#c85a3a]" />
                AI Capabilities
              </h3>
              <ul className="space-y-3 text-[#6b6b6b]">
                <li className="flex gap-2">
                  <span className="text-[#c85a3a] font-bold">•</span>
                  <span>Instant document analysis and categorization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c85a3a] font-bold">•</span>
                  <span>Borrower qualification based on written guidelines</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c85a3a] font-bold">•</span>
                  <span>Exception detection and escalation routing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c85a3a] font-bold">•</span>
                  <span>24/7 availability for complex financial analysis</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#a8d5ba]" />
                Human Oversight
              </h3>
              <ul className="space-y-3 text-[#6b6b6b]">
                <li className="flex gap-2">
                  <span className="text-[#a8d5ba] font-bold">•</span>
                  <span>Licensed mentors review exceptions and edge cases</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a8d5ba] font-bold">•</span>
                  <span>Ethical guardrails ensure fairness and transparency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a8d5ba] font-bold">•</span>
                  <span>Cross-industry expertise for holistic guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a8d5ba] font-bold">•</span>
                  <span>Employer network for job placement support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Reclaimed Section */}
      <section className="my-20 md:my-32 py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a]">
                  Time Reclaimed, Life Enhanced
                </h2>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  When AI handles the complexity, something beautiful happens. People have time for what matters: family, creativity, rest, community. The paradox is that this liberation makes us more productive—not in the hustle-culture sense, but in the way that truly matters.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#c85a3a] text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#2a2a2a] font-semibold mb-1">More Time with Family</h4>
                    <p className="text-[#6b6b6b]">Hours saved on financial administration become moments with loved ones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#a8d5ba] text-[#2a2a2a]">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#2a2a2a] font-semibold mb-1">Creative Pursuits</h4>
                    <p className="text-[#6b6b6b]">Energy previously spent on stress can now fuel passion projects and personal growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#2d5a3d] text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#2a2a2a] font-semibold mb-1">Community Impact</h4>
                    <p className="text-[#6b6b6b]">With time and energy restored, people naturally pay it forward, strengthening communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/images/time-reclaimed.jpg"
                alt="Time Reclaimed - Person enjoying life's moments"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="my-20 md:my-32 py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              Our Mission: A New Value System
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              We're building a world where AI serves humanity's highest aspirations. Where time and attention are valued above material accumulation. Where technology enables a less stressful, more balanced life. Where paying it forward becomes the natural response to liberation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                description: "Lowest rates in the business. AI-powered mortgage and financial services available to everyone, regardless of background.",
                color: "text-[#c85a3a]"
              },
              {
                title: "Integrity",
                description: "Licensed human mentors ensure ethical AI deployment. Transparency in all decisions. Fairness as a core principle.",
                color: "text-[#a8d5ba]"
              },
              {
                title: "Community",
                description: "Non-profit structure ensures profits fund community initiatives. Pay it forward isn't a slogan—it's our business model.",
                color: "text-[#2d5a3d]"
              }
            ].map((value, idx) => (
              <div key={idx} className="rounded-lg bg-white shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md text-center" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className={`text-2xl font-bold mb-4 ${value.color}`}>{value.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Paradox Section */}
      <section className="my-20 md:my-32 py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg bg-white shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6 text-center">
                The Beautiful Paradox
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                <span className="font-semibold text-[#c85a3a]">"AI makes it possible to live a less stressful life and be just as or more productive while increasing efficiency in all sectors of life, allowing for balance between work and family and self-life in the new world of AI."</span>
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                This isn't a contradiction. When AI handles complexity, we experience less stress. With less stress, we think more clearly and act more intentionally. This intentionality translates to genuine productivity—not the frenetic kind, but the kind that builds lasting value.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed">
                The result? A life where efficiency serves balance, not the other way around. Where technology is a tool for liberation, not control. Where paying it forward becomes the natural expression of a life well-lived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-20 md:my-32 py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
              Join Joseph Pisa's movement. Experience AI that serves your life, not the other way around. Discover how technology can liberate your time and attention—and how that liberation can change everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a] flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#a8d5ba] text-[#2a2a2a] hover:bg-[#98c5aa]">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold mb-4">Time & Attention</h4>
              <p className="text-gray-300 text-sm">Building a world where AI serves humanity's highest aspirations.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">AI Mortgage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Time & Attention. Founded by Joseph Pisa. All rights reserved.</p>
            <p className="mt-2">Building the future where AI serves humanity, and humanity pays it forward.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
