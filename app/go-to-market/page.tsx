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

      {/* Social Media Marketing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              SOCIAL MEDIA MARKETING
            </h2>
            <p className="text-xl text-gray-600 font-light">Our primary growth channel</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Instagram */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">Instagram</h3>
              </div>
              
              <h4 className="text-xl font-light text-black mb-4">3 Content Series:</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h5 className="font-medium text-black mb-2">"If I had a closet full of..."</h5>
                  <p className="text-gray-600 font-light text-sm">Aspirational content showcasing dream wardrobes</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h5 className="font-medium text-black mb-2">"simplyaboveaverage or simply not"</h5>
                  <p className="text-gray-600 font-light text-sm">Brand reviews and recommendations</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h5 className="font-medium text-black mb-2">"Growing to 6' is hard. Finding clothes shouldn't be"</h5>
                  <p className="text-gray-600 font-light text-sm">Most shareable content, converts users to followers and site users</p>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">TikTok</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-light text-black mb-3">Organic Content:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">"Tall girl problems" relatable content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">Styling hacks and tips</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">"Welcome to the 6ft plus club" community building</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-black mb-3">Paid Strategy:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">Boosting viral content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">Tall influencer partnerships (Tyler, Gabbi)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Community Growth */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* SEO */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">SEO Strategy</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Blog posts and content optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Meta descriptions and alt-text</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light">Website image optimization</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-light text-black mb-3">Results:</h4>
                <div className="text-center">
                  <div className="text-4xl font-extralight text-green-600 mb-2">#1</div>
                  <p className="text-gray-600 font-light text-sm">Google ranking for "simplyaboveaverage" and "simply above average"</p>
                </div>
              </div>
            </div>

            {/* Community Growth */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">Community Growth</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-light text-black mb-3">Facebook Groups:</h4>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-extralight text-blue-600">100+</div>
                      <p className="text-gray-600 font-light text-sm">Comments and likes on single post</p>
                    </div>
                    <p className="text-gray-600 font-light text-sm text-center">Drove significant user spike (June bump)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-black mb-3">Guerrilla Marketing:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">Business cards promoting pass-it-forward</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-600 font-light text-sm">"Pass to the next simplyaboveaverage person"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & PR Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              MEDIA & PR STRATEGY
            </h2>
            <p className="text-xl text-gray-600 font-light">Building authority in the tall fashion space</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-200">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">NYFW Show Leverage</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Post-show articles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Media interviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Press coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-gray-200">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Content Opportunities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Substack publications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Podcast appearances</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Fashion media features</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-gray-200">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Authority Building</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Thought leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Fashion × Sports merge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 font-light text-sm">Professional athlete styling</span>
                </div>
              </div>
            </div>
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
              <p className="text-gray-600 font-light">Google ranking for brand searches</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-blue-600 mb-4">100+</div>
              <p className="text-gray-600 font-light">Engagement per Facebook post</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-green-600 mb-4">3</div>
              <p className="text-gray-600 font-light">Viral content series on Instagram</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-yellow-600 mb-4">NFL</div>
              <p className="text-gray-600 font-light">Athletes already styled and signed</p>
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
            Join us in executing the most comprehensive go-to-market plan in extended-size fashion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                View Investment Terms
              </Button>
            </Link>
            <Link href="/genai">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                See Our AI Advantage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
