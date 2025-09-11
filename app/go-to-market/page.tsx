import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function GoToMarket() {
  return (
    <div className="min-h-screen bg-white text-black font-light">
      <Header currentPage="gtm" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-light text-gray-700 border border-gray-200">
                Growth Strategy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                GO-TO-MARKET
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
                STRATEGY
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Multi-channel approach to dominate the extended-size fashion discovery market
            </p>
          </div>
        </div>
      </section>




      {/* Athlete Styling as Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              STYLING AS MARKETING
            </h2>
            <p className="text-xl text-gray-600 font-light">Revenue-generating marketing strategy</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">The Strategy</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Built by tall athletes, funded by tall athletes, helping all tall people find clothes that fit. Using the brand power of sports to build credibility and market share.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Each styled athlete becomes marketing content</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Social proof: "We make tall people look good"</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Builds trust and credibility with customer base</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-6 tracking-tight">Brand Collaborations</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Exclusive Lines</h4>
                  <p className="text-gray-600 font-light text-sm">simply × Levi's distributed directly on simplyaboveaverage</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Pop-up Stores</h4>
                  <p className="text-gray-600 font-light text-sm">In-person events with all extended sizes from top brand partners</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Supreme-Style Drops</h4>
                  <p className="text-gray-600 font-light text-sm">Exclusive releases for subscribers first, then public</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 border border-gray-800 text-center">
            <h3 className="text-3xl font-light text-white mb-8 tracking-tight">The Flywheel Effect</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extralight text-purple-400 mb-4">Style</div>
                <p className="text-gray-300 font-light text-sm">Athletes get styled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-blue-400 mb-4">Content</div>
                <p className="text-gray-300 font-light text-sm">Looks become social content</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-green-400 mb-4">Trust</div>
                <p className="text-gray-300 font-light text-sm">Builds customer credibility</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-yellow-400 mb-4">Revenue</div>
                <p className="text-gray-300 font-light text-sm">Drives subscriptions & sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              GROWTH METRICS
            </h2>
            <p className="text-xl text-gray-600 font-light">Proven results across channels</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-purple-600 mb-4">#1</div>
              <p className="text-gray-600 font-light">Google ranking as a result of our current SEO strategy</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-blue-600 mb-4">100+</div>
              <p className="text-gray-600 font-light">Comments from our target demo per Facebook post</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-green-600 mb-4">3</div>
              <p className="text-gray-600 font-light">Content series on Instagram</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-yellow-600 mb-4">NFL</div>
              <p className="text-gray-600 font-light">Athlete already signed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            READY TO SCALE THIS STRATEGY?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join us in building the future of extended-size fashion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#apply-to-invest">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                Join the Journey
              </Button>
            </a>
            <Link href="/traction">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                See Our Early Momentum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
