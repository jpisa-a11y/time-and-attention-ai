import { Award, Heart, Briefcase, Shield } from "lucide-react";

/**
 * Mentor Spotlight: Meet the Licensed Professionals
 * 
 * Design System: Organic Authenticity with Purpose
 * - Introduces the human experts behind the AI process
 * - Builds trust through transparency and personal connection
 * - Emphasizes diverse expertise and genuine care
 */

export default function Mentors() {
  const mentors = [
    {
      name: "Sarah Chen",
      title: "Licensed Mortgage Banker & Financial Advisor",
      credentials: "MBA, CFP®, Licensed Mortgage Broker",
      experience: "18 years in mortgage banking and financial planning",
      image: "/images/mentor-sarah-chen.jpg",
      bio: "Sarah specializes in helping first-time homebuyers navigate the mortgage process with confidence. Her background in financial planning means she looks at your complete picture—not just your credit score. She believes that mortgages should be accessible to everyone.",
      expertise: [
        "Mortgage qualification and underwriting",
        "Financial planning and wealth building",
        "First-time homebuyer guidance",
        "Complex financial situations"
      ],
      philosophy: "\"Every person deserves a fair shot at homeownership. My job is to make sure the process is transparent and the outcome is fair.\"",
      color: "text-[#c85a3a]"
    },
    {
      name: "James Rodriguez",
      title: "Certified Financial Planner & Real Estate Expert",
      credentials: "CFP®, CRE, 25+ Years Real Estate Experience",
      experience: "Served over 3,000 families in real estate transactions",
      image: "/images/mentor-james-rodriguez.jpg",
      bio: "James brings decades of real estate expertise to every decision. He understands that buying a home is more than a financial transaction—it's about building your future. His cross-industry knowledge helps him see opportunities others miss.",
      expertise: [
        "Real estate investment strategy",
        "Market analysis and timing",
        "Property valuation and negotiation",
        "Long-term wealth building through real estate"
      ],
      philosophy: "\"Real estate is where dreams meet strategy. I help clients make smart decisions that build lasting wealth.\"",
      color: "text-[#2d5a3d]"
    },
    {
      name: "Priya Patel",
      title: "Licensed Attorney, Real Estate Law & Consumer Protection",
      credentials: "JD, Licensed Real Estate Attorney, Consumer Rights Advocate",
      experience: "15 years protecting consumer interests in real estate",
      image: "/images/mentor-priya-patel.jpg",
      bio: "Priya is passionate about fairness and transparency. Her legal expertise ensures that every decision made by our AI is defensible and ethical. She fights for consumer protection while embracing the efficiency of technology.",
      expertise: [
        "Real estate law and contract review",
        "Consumer protection and fair lending",
        "Ethical AI oversight and compliance",
        "Exception handling and legal guidance"
      ],
      philosophy: "\"Technology should serve people, not exploit them. I ensure that AI decisions are fair, transparent, and legally sound.\"",
      color: "text-[#a8d5ba]"
    },
    {
      name: "Michael Torres",
      title: "Certified Credit Counselor & Debt Management Specialist",
      credentials: "CCCS, Certified Debt Counselor, Community Advocate",
      experience: "12 years helping families achieve financial wellness",
      image: "/images/mentor-michael-torres.jpg",
      bio: "Michael understands that financial stress impacts every aspect of life. His background in credit counseling and community support means he sees the human side of every application. He's committed to helping people not just get approved, but build sustainable financial health.",
      expertise: [
        "Credit counseling and improvement strategies",
        "Debt management and consolidation",
        "Financial wellness coaching",
        "Community support and employer networks"
      ],
      philosophy: "\"Financial freedom isn't just about approval—it's about building a foundation for long-term wellbeing and peace of mind.\"",
      color: "text-[#c85a3a]"
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
            <a href="/how-it-works" className="text-[#2a2a2a] hover:text-[#c85a3a] transition-colors">
              How It Works
            </a>
            <a href="/mentors" className="text-[#c85a3a] font-semibold">
              Mentors
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#e8dcc8] to-[#f9f7f4]">
        <div className="container text-center">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-bold text-[#2a2a2a] mb-6">
            Meet Your Mentors
          </h1>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Behind every AI decision is a licensed human professional. Meet the experts who ensure fairness, transparency, and genuine care in every approval.
          </p>
        </div>
      </section>

      {/* Why Human Oversight Matters */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6 text-center">
              Why Human Expertise Matters
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed text-center mb-12">
              AI is powerful, but it's not perfect. Our licensed mentors provide the human judgment, ethical oversight, and personalized guidance that technology alone cannot offer. They catch exceptions, understand nuance, and ensure every decision serves your best interests.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Ethical Oversight",
                description: "Licensed professionals ensure AI decisions are fair, transparent, and legally compliant."
              },
              {
                icon: Heart,
                title: "Human Judgment",
                description: "Nuanced decisions that consider your complete situation, not just data points."
              },
              {
                icon: Award,
                title: "Expertise",
                description: "Decades of combined experience across mortgage, finance, law, and community support."
              },
              {
                icon: Briefcase,
                title: "Accountability",
                description: "Licensed professionals who stand behind every decision and are answerable to you."
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-[#f9f7f4] p-6 md:p-8 text-center" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                <item.icon className="w-12 h-12 text-[#c85a3a] mx-auto mb-4" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Spotlight Cards */}
      <section className="py-20 md:py-32 bg-[#f9f7f4]">
        <div className="container">
          <div className="space-y-20">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-96 md:h-full ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="mb-6">
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2">
                        {mentor.name}
                      </h3>
                      <p className={`text-lg font-semibold ${mentor.color} mb-2`}>{mentor.title}</p>
                      <p className="text-sm text-[#6b6b6b] mb-1">
                        <span className="font-semibold">Credentials:</span> {mentor.credentials}
                      </p>
                      <p className="text-sm text-[#6b6b6b]">
                        <span className="font-semibold">Experience:</span> {mentor.experience}
                      </p>
                    </div>

                    <p className="text-[#6b6b6b] leading-relaxed mb-6">
                      {mentor.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg font-bold text-[#2a2a2a] mb-3">
                        Areas of Expertise
                      </h4>
                      <ul className="space-y-2">
                        {mentor.expertise.map((exp, expIdx) => (
                          <li key={expIdx} className="flex gap-3">
                            <span className={`text-lg font-bold ${mentor.color} flex-shrink-0`}>✓</span>
                            <span className="text-[#6b6b6b]">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Philosophy */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(200, 90, 58, 0.05)", borderLeft: "4px solid #c85a3a" }}>
                      <p className="text-[#2a2a2a] italic font-semibold text-sm">
                        {mentor.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-8 text-center">
              Our Collective Philosophy
            </h2>

            <div className="rounded-lg bg-[#e8dcc8] p-8 md:p-12 mb-12">
              <p className="text-lg text-[#2a2a2a] leading-relaxed mb-6">
                We believe that technology should serve humanity, not the other way around. Our mentors bring diverse expertise—mortgage banking, financial planning, law, and community support—to ensure that every decision is not just smart, but fair and human-centered.
              </p>
              <p className="text-lg text-[#2a2a2a] leading-relaxed mb-6">
                We're committed to the "pay it forward" mission. Our mentors don't just approve mortgages—they build relationships, provide guidance, and connect people with resources. When you succeed, we succeed. And when you succeed, you pay it forward.
              </p>
              <p className="text-lg text-[#2a2a2a] leading-relaxed">
                This is what human-centered AI looks like: technology that amplifies human wisdom, not replaces it. AI that serves people's dreams, not corporate profits.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Diverse Expertise",
                  description: "Our team spans mortgage banking, finance, law, and community support—bringing comprehensive perspective to every decision."
                },
                {
                  title: "Genuine Care",
                  description: "We're not just processing applications. We're helping people achieve their dreams and build better lives."
                },
                {
                  title: "Accountability",
                  description: "As licensed professionals, we're answerable to you and to our regulatory bodies. Your trust is our responsibility."
                }
              ].map((value, idx) => (
                <div key={idx} className="rounded-lg bg-[#f9f7f4] p-6 md:p-8 text-center" style={{ border: "1px solid rgba(212, 165, 116, 0.3)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2a2a2a] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#e8dcc8]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
              Experience the difference that human expertise combined with AI intelligence can make. Our mentors are ready to guide you through the process with care, transparency, and genuine commitment to your success.
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
                <li><a href="/mentors" className="hover:text-white transition-colors">Our Mentors</a></li>
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
