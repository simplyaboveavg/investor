import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MarketOpportunity() {
  return (
    <div className="min-h-screen bg-white text-black font-light">
      <Header currentPage="market" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-light text-gray-700 border border-gray-200">
                Market Analysis
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                MARKET
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
                OPPORTUNITY
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              A $4.55B market waiting for a solution that actually fits
            </p>
          </div>
        </div>
      </section>

      {/* TAM Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              TOTAL ADDRESSABLE MARKET
            </h2>
            <p className="text-xl text-gray-600 font-light">The full scope of our opportunity</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* TAM */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-black mb-4">$4.55B</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Total Addressable Market</h3>
              <p className="text-gray-600 font-light">
                Complete US market for tall and extended-size apparel and footwear
              </p>
            </div>

            {/* SAM */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-black mb-4">$1.8B</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Serviceable Market</h3>
              <p className="text-gray-600 font-light">
                Online-first tall shoppers aged 18-55 (women) and 18-35 (men)
              </p>
            </div>

            {/* Target */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-black mb-4">3%</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Conservative Conversion</h3>
              <p className="text-gray-600 font-light">
                77K paying subscribers + 15K affiliate shoppers from our SAM
              </p>
            </div>
          </div>

          {/* Market Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Women Over 5'10"</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Population in US</span>
                  <span className="text-2xl font-light text-black">2.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Annual spend on apparel & shoes</span>
                  <span className="text-2xl font-light text-purple-600">$863</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-light">Market Value</span>
                    <span className="text-3xl font-light text-black">$1.9B</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Men Over 6'3"</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Population in US</span>
                  <span className="text-2xl font-light text-black">4.8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Annual spend on apparel & shoes</span>
                  <span className="text-2xl font-light text-blue-600">$553</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-light">Market Value</span>
                    <span className="text-3xl font-light text-black">$2.65B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              DATA-DRIVEN INSIGHTS
            </h2>
            <p className="text-xl text-gray-600 font-light">The numbers tell the story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-purple-600 mb-4">65%</div>
              <p className="text-gray-600 font-light">
                of U.S. women report difficulty finding clothing that fits their body type
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">NPD Group / McKinsey</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-blue-600 mb-4">83%</div>
              <p className="text-gray-600 font-light">
                of tall men (6'2"+) report challenges finding pants with inseams longer than 34"
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">Internal polls, Reddit surveys</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-green-600 mb-4">3-5</div>
              <p className="text-gray-600 font-light">
                hours per month consumers spend searching online for clothing that fits their size
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">McKinsey consumer report</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-red-500 mb-4">60%+</div>
              <p className="text-gray-600 font-light">
                of tall shoppers return over half of their online clothing purchases due to sizing
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">Community & internal data</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-yellow-600 mb-4">$30B</div>
              <p className="text-gray-600 font-light">
                lost annually in the U.S. apparel market due to returns — significant portion from poor fit
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">Shopify, McKinsey</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-extralight text-indigo-600 mb-4">20%</div>
              <p className="text-gray-600 font-light">
                higher AOV for brands that offer extended sizes vs. those that don't
              </p>
              <div className="text-xs text-gray-400 mt-4 font-light">Edited, GlobalData</div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight">The Loyalty Opportunity</h3>
            <div className="text-6xl font-extralight text-black mb-4">3x</div>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Extended-size shoppers are 3x more loyal when they find brands that cater to them — but they often can't find them. This creates a massive opportunity for simplyaboveaverage as both a discovery engine and loyalty platform.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            READY TO CAPTURE THIS MARKET?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join us in building the future of fit-first fashion discovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#apply-to-invest">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                Join the Journey
              </Button>
            </a>
            <Link href="/competitive-landscape">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                See Competition
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
