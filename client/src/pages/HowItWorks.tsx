import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { useState } from "react";

/**
 * How It Works: AI Qualification Process
 * 
 * Design System: Organic Authenticity with Purpose
 * - Shows the step-by-step journey from document upload to closing
 * - Interactive timeline with visual illustrations
 * - Emphasizes speed, transparency, and human oversight
 */

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  const steps = [
    {
      number: 1,
      title: "Upload Your Documents",
      subtitle: "Simple. Secure. Fast.",
      description: "Start by uploading your financial documents—mortgage application, pay stubs, bank statements, tax returns. Our secure platform makes it easy with drag-and-drop functionality. No complex portals, no confusion.",
      details: [
        "Mortgage application and supporting documents",
        "Recent pay stubs (2-3 months)",
        "Bank statements (2 months)",
        "Tax returns (2 years)",
        "Employment verification"
      ],
      timeframe: "5 minutes",
      image: "/images/step1-document-upload.jpg",
      icon: "📄",
      benefits: "No stress, no complexity. Just upload and move on with your day."
    },
    {
      number: 2,
      title: "AI Analysis & Processing",
      subtitle: "Intelligent. Thorough. Instant.",
      description: "Our AI immediately analyzes your documents, extracting key information and running it against our qualification guidelines. The system identifies exceptions and flags items requiring human review.",
      details: [
        "Instant document categorization",
        "Income calculation across all sources",
        "Asset verification and analysis",
        "Debt-to-income ratio computation",
        "Exception detection and flagging"
      ],
      timeframe: "< 1 minute",
      image: "/images/step2-ai-analysis.jpg",
      icon: "🧠",
      benefits: "What used to take hours now happens in seconds. AI handles the complexity."
    },
    {
      number: 3,
      title: "Human Expert Review",
      subtitle: "Licensed. Thoughtful. Fair.",
      description: "A licensed mortgage mentor reviews the AI analysis, particularly any exceptions or edge cases. This human expertise ensures fairness, catches nuances AI might miss, and provides personalized guidance.",
      details: [
        "Licensed professional review",
        "Exception handling and decision-making",
        "Personalized guidance and consultation",
        "Cross-industry expertise applied",
        "Ethical guardrails enforced"
      ],
      timeframe: "24 hours",
      image: "/images/step3-human-review.jpg",
      icon: "👩‍⚖️",
      benefits: "AI + human wisdom. You get the best of both worlds."
    },
    {
      number: 4,
      title: "Fast Approval",
      subtitle: "Clear. Transparent. Celebratory.",
      description: "You receive your approval decision with complete transparency. No surprises, no hidden conditions. If approved, you're one step closer to your new home. If exceptions exist, they're clearly explained with next steps.",
      details: [
        "Clear approval or conditional approval",
        "Detailed explanation of decision",
        "Next steps clearly outlined",
        "Timeline to closing provided",
        "Support team available for questions"
      ],
      timeframe: "24-48 hours from submission",
      image: "/images/step4-approval.jpg",
      icon: "✅",
      benefits: "Fast decisions mean less stress and more time to celebrate."
    },
    {
      number: 5,
      title: "Smooth Closing",
      subtitle: "Professional. Warm. Complete.",
      description: "The final step is a smooth, professional closing process. Your documents are prepared, reviewed, and ready. You sign, and your dream becomes reality. The entire process—from upload to keys in hand—is streamlined.",
      details: [
        "Final document preparation",
        "Title search and insurance",
        "Final walkthrough coordination",
        "Closing meeting scheduling",
        "Funding and recording"
      ],
      timeframe: "15 days from approval",
      image: "/images/step5-closing.jpg",
      icon: "🏡",
      benefits: "From application to home ownership in record time."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b" style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}>
        <div className="container flex items-center justify-between py-4">
          <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-bold text-[#c85a3a]">
            Time & Attention
          </a>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Home
            </a>
            <a href="/#vision" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Vision
            </a>
            <a href="/#mission" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              Mission
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#e8dcc8] to-[#f9f7f4]">
        <div className="container text-center">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-bold text-[#2a2a2a] mb-6">
            How It Works
          </h1>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            From document upload to closing day, we've simplified the mortgage process. See how AI and human expertise work together to get you approved faster than ever.
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "Fast", value: "24-48 hours", description: "From upload to approval" },
              { icon: Shield, label: "Secure", value: "Bank-level", description: "Encryption & privacy" },
              { icon: Zap, label: "Smart", value: "AI + Human", description: "Best of both worlds" },
              { icon: CheckCircle2, label: "Transparent", value: "100%", description: "Clear decisions" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-12 h-12 text-[#c85a3a] mx-auto mb-4" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-bold text-[#2a2a2a] mb-2">
                  {stat.value}
                </h3>
                <p className="text-[#6b6b6b] text-sm mb-1">{stat.label}</p>
                <p className="text-[#a8d5ba] text-xs">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 md:py-32 bg-[#f9f7f4]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Timeline Steps */}
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Connector */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-[#c85a3a] to-[#a8d5ba]" />
                  )}

                  {/* Step Card */}
                  <div
                    onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                    className="cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden"
                    style={{
                      border: "1px solid rgba(212, 165, 116, 0.3)",
                      backgroundColor: expandedStep === idx ? "#ffffff" : "#f9f7f4"
                    }}
                  >
                    <div className="p-6 md:p-8 flex gap-6 items-start">
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-[#c85a3a] text-white flex items-center justify-center font-bold text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {step.number}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-bold text-[#2a2a2a]">
                              {step.title}
                            </h3>
                            <p className="text-[#a8d5ba] font-semibold text-sm">{step.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#c85a3a] font-semibold text-sm">⏱ {step.timeframe}</p>
                          </div>
                        </div>
                        <p className="text-[#6b6b6b] leading-relaxed">{step.description}</p>
                      </div>

                      {/* Expand Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-6 h-6 text-[#c85a3a] transition-transform duration-300 ${expandedStep === idx ? "rotate-180" : ""}`}>
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedStep === idx && (
                      <div className="border-t border-[#d4a574] border-opacity-30 px-6 md:px-8 py-8 bg-white">
                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Image */}
                          <div className="relative h-64 md:h-80">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                          </div>

                          {/* Details */}
                          <div className="space-y-6">
                            <div>
                              <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-4">
                                What Happens
                              </h4>
                              <ul className="space-y-3">
                                {step.details.map((detail, detailIdx) => (
                                  <li key={detailIdx} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#a8d5ba] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#6b6b6b]">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefit Callout */}
                            <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(168, 213, 186, 0.1)", borderLeft: "4px solid #a8d5ba" }}>
                              <p className="text-[#2d5a3d] font-semibold text-sm">
                                💡 {step.benefits}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-12 text-center">
              The Principles Behind Our Process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Speed Without Sacrifice",
                  description: "AI accelerates the process, but human judgment ensures quality. We don't rush decisions—we make them faster."
                },
                {
                  title: "Transparency at Every Step",
                  description: "You know exactly what's happening, why it's happening, and what comes next. No black boxes, no surprises."
                },
                {
                  title: "Human-Centered Technology",
                  description: "Technology serves you, not the other way around. Licensed experts oversee every decision to ensure fairness."
                }
              ].map((principle, idx) => (
                <div key={idx} className="rounded-lg bg-[#f9f7f4] p-6 md:p-8" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How fast is the approval process really?",
                  a: "From document upload to approval decision typically takes 24-48 hours. Our AI analyzes documents instantly, and our human experts review within 24 hours. This is significantly faster than traditional mortgage processes that can take weeks."
                },
                {
                  q: "Is my financial information secure?",
                  a: "Yes. We use bank-level encryption and security protocols. Your documents are stored securely and accessed only by authorized AI systems and licensed professionals. We comply with all HIPAA and financial privacy regulations."
                },
                {
                  q: "What if I have an unusual financial situation?",
                  a: "That's exactly what our human experts are for. Our AI flags exceptions, and our licensed mentors review them carefully. We have expertise in complex situations—self-employed income, multiple properties, non-traditional assets, and more."
                },
                {
                  q: "Can I get approved even with a lower credit score?",
                  a: "Possibly. We don't rely solely on credit scores. Our AI and human experts look at your complete financial picture—income, assets, employment history, and more. We're more flexible than traditional lenders."
                },
                {
                  q: "What happens if I'm not approved?",
                  a: "We provide clear feedback on why and what you can do next. Our mentors offer guidance on improving your application or exploring alternative options. We're here to help you succeed."
                }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-lg bg-white p-6 md:p-8" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg font-bold text-[#2a2a2a] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
              Experience the future of mortgage lending. Fast, transparent, and human-centered. Your approval could be just hours away.
            </p>
            <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-[#c85a3a] text-white hover:bg-[#b84a2a]">
              Start Your Application
            </button>
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
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Our Mission</a></li>
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
