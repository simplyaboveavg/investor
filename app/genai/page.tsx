import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GenAI() {
  return (
    <div className="min-h-screen bg-white text-black font-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-wide text-black">simplyaboveaverage</h1>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-sm">
                  Overview
                </Button>
              </Link>
              <Link href="/market-opportunity">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-sm">
                  Market
                </Button>
              </Link>
              <Link href="/competitive-landscape">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-sm">
                  Competition
                </Button>
              </Link>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-light text-gray-700 border border-gray-200">
                Technology & AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                GENERATIVE
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
                AI ADVANTAGE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              How we're building defensible moats through proprietary AI and data infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Fine-tuned Proprietary Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              FINE-TUNED PROPRIETARY MODEL
            </h2>
            <p className="text-xl text-gray-600 font-light">Built specifically for extended sizes</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 border border-gray-200 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Current Implementation</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  We use GenAI to automatically tag and categorize inventory, maintaining accuracy across sizing, color, inseams, and style types without fear of LLM hallucination or mislabeling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 font-light">Automated inventory tagging and categorization</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 font-light">Accurate sizing, color, and inseam classification</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 font-light">No hallucination or mislabeling issues</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h4 className="text-2xl font-light text-black mb-6 tracking-tight">Operational Impact</h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-extralight text-green-600 mb-2">{'<10 min'}</div>
                    <p className="text-gray-600 font-light text-sm">Processing time vs. hours with OpenAI API</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extralight text-blue-600 mb-2">90%</div>
                    <p className="text-gray-600 font-light text-sm">Reduction in operational costs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extralight text-purple-600 mb-2">100%</div>
                    <p className="text-gray-600 font-light text-sm">Accuracy in extended-size classification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future AI Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              AI ROADMAP
            </h2>
            <p className="text-xl text-gray-600 font-light">The future of personalized extended-size discovery</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trend Forecasting */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="mb-6">
                
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                  AI-Driven Trend Forecasting & Inventory Insights
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Generative AI models analyze purchasing patterns, user searches, and external trend data to predict emerging demand in extended-size fashion.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Purchasing pattern analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">User search behavior insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">External trend data integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Demand prediction for extended sizes</span>
                </div>
              </div>
            </div>

            {/* Personalization */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="mb-6">
                
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                  AI-Powered Product Recommendations & Personalization
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Generative AI models analyze user searches, preferences, saved products, sizing, and style data to deliver hyper-personalized recommendations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Improved conversion rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Increased customer retention & LTV</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Specialized ad emails for brands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Members corner highlights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-8 tracking-tight">Business Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-extralight text-green-600 mb-4">3x</div>
                <p className="text-gray-600 font-light">Higher conversion rates through personalization</p>
              </div>
              <div>
                <div className="text-5xl font-extralight text-blue-600 mb-4">40%</div>
                <p className="text-gray-600 font-light">Increase in customer lifetime value</p>
              </div>
              <div>
                <div className="text-5xl font-extralight text-purple-600 mb-4">5x</div>
                <p className="text-gray-600 font-light">More effective brand partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property & Data Moat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              INTELLECTUAL PROPERTY
            </h2>
            <p className="text-xl text-gray-600 font-light">Our defensible data moat</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Proprietary Data Pipelines</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                We've built proprietary data pipelines that ingest, clean, and structure product information from over 100+ extended-size brands — mapping inconsistent size formats into a unified, searchable experience.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="text-xl font-light text-black mb-4">Size Format Examples:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-500">US:</span> 2XLXT
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-500">UK:</span> Size 22
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-500">EU:</span> 36.5
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-500">Pants:</span> 38 x 38
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-6 tracking-tight">Our System Handles:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Complex Inseam + Waist Combinations</h4>
                  <p className="text-gray-600 font-light text-sm">Standardizing measurements across brands</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">International Sizing</h4>
                  <p className="text-gray-600 font-light text-sm">EU, UK, Japan, and regional variations</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Brand-Specific Naming</h4>
                  <p className="text-gray-600 font-light text-sm">Unique conventions and terminology</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Hidden Fit Metadata</h4>
                  <p className="text-gray-600 font-light text-sm">Scraped from product descriptions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Differentiator */}
          <div className="bg-black rounded-3xl p-12 border border-gray-800 text-center">
            <h3 className="text-3xl font-light text-white mb-6 tracking-tight">The Key Differentiator</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-xl font-light text-red-400 mb-4">Other Platforms:</h4>
                <p className="text-gray-300 font-light">Surface clothes</p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-light text-green-400 mb-4">simplyaboveaverage:</h4>
                <p className="text-gray-300 font-light">Surface what fits — across global brands and extended-size ranges no one else has prioritized</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 font-light">
              This infrastructure powers personalized discovery, styling, and fit-based search across a massively fragmented category
            </p>
          </div>
        </div>
      </section>

      {/* Defensible Moats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              DEFENSIBLE MOATS
            </h2>
            <p className="text-xl text-gray-600 font-light">Why our AI advantage compounds over time</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Product Coverage</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                100+ extended-size brands mapped and standardized. The more brands we add, the stronger our data network becomes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Customer Loyalty</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Personalized fit recommendations create switching costs. Users invest time in our platform, making it harder to leave.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Brand Relationships</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Deep integrations and data partnerships create mutual dependency. Brands rely on our insights and customer targeting.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Network Effects</h3>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
              As we add more users, brands, and data points, our AI becomes smarter, our recommendations more accurate, and our moat deeper. This creates a flywheel effect that's nearly impossible for competitors to replicate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            INVEST IN THE AI FUTURE
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join us in building the most advanced extended-size discovery platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                View Investment Terms
              </Button>
            </Link>
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

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-light">© 2024 simplyaboveaverage — Private Investment Opportunity</p>
        </div>
      </footer>
    </div>
  )
}
