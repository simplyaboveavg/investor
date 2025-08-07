import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CompetitiveLandscape() {
  return (
    <div className="min-h-screen bg-white text-black font-light">
      <Header currentPage="competition" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-light text-gray-700 border border-gray-200">
                Competitive Analysis
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                COMPETITIVE
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
                LANDSCAPE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Why no one else is solving the extended-size discovery problem
            </p>
          </div>
        </div>
      </section>

      {/* The Problem with Current Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              THE CURRENT LANDSCAPE
            </h2>
            <p className="text-xl text-gray-600 font-light">Why existing solutions fall short</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Brands, Not Platforms</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Most competitors are single brands selling their own products — not cross-brand discovery platforms. They can't help users find what fits across the entire market.

              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Generic Search Engines</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Other platforms like Google Shopping are generic and not built for fit. They don’t filter by inseam accurately, and users often describe them as utilitarian — not fashion-forward.

              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">No Personalization</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                No platform today allows tall or extended-size shoppers to find what fits them across brands with wishlist, alerts, or personalized search.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight">The simplyaboveaverage Difference</h3>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
              simplyaboveaverage is the only player combining fit-first technology with cultural storytelling — tunnel fits, athlete styling, NYFW shows, and authentic brand partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              HEAD-TO-HEAD COMPARISON
            </h2>
            <p className="text-xl text-gray-600 font-light">How we stack up against the competition</p>
          </div>

          {/* Mobile-friendly cards for smaller screens */}
          <div className="lg:hidden space-y-6">
            {/* SAA Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-light text-black mb-4">SimplyAboveAverage</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-medium">Focus:</span> Search + styling for extended sizes</div>
                <div><span className="font-medium">Fit Filters:</span> ✅ Smart filters (inseam, rise, etc.)</div>
                <div><span className="font-medium">Extended Sizes:</span> ✅ 1X-8XLT, 26-80, 4-18 shoes</div>
                <div><span className="font-medium">Personalization:</span> ✅ User profiles, wishlist, fit alerts</div>
                <div><span className="font-medium">Styling:</span> ✅ Athlete styling, "get the look"</div>
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-light text-black mb-4">Google Shopping</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div><span className="font-medium">Focus:</span> General product search</div>
                <div><span className="font-medium">Fit Filters:</span> ❌ Basic only</div>
                <div><span className="font-medium">Extended Sizes:</span> ❌ Inconsistent</div>
                <div><span className="font-medium">Personalization:</span> ❌ None</div>
                <div><span className="font-medium">Styling:</span> ❌ None</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-light text-black mb-4">Amazon Personal Shopper</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div><span className="font-medium">Focus:</span> General consumer shopping</div>
                <div><span className="font-medium">Fit Filters:</span> ✅ Limited</div>
                <div><span className="font-medium">Extended Sizes:</span> ❌ Weak in tall/plus</div>
                <div><span className="font-medium">Personalization:</span> ✅ Some styling prompts</div>
                <div><span className="font-medium">Styling:</span> ✅ But not size-specific</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-light text-black mb-4">Universal Standard</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div><span className="font-medium">Focus:</span> DTC apparel brand</div>
                <div><span className="font-medium">Fit Filters:</span> ❌ None</div>
                <div><span className="font-medium">Extended Sizes:</span> ✅ 00-40</div>
                <div><span className="font-medium">Personalization:</span> ❌ Static catalog</div>
                <div><span className="font-medium">Styling:</span> ❌ None</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-light text-black mb-4">American Tall</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div><span className="font-medium">Focus:</span> DTC brand for tall men/women</div>
                <div><span className="font-medium">Fit Filters:</span> ❌ None</div>
                <div><span className="font-medium">Extended Sizes:</span> ✅ 6'3"+ focus</div>
                <div><span className="font-medium">Personalization:</span> ❌ Static</div>
                <div><span className="font-medium">Styling:</span> ❌ None</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-light text-black mb-4">Pinterest / LTK</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div><span className="font-medium">Focus:</span> Inspiration boards</div>
                <div><span className="font-medium">Fit Filters:</span> ❌ None</div>
                <div><span className="font-medium">Extended Sizes:</span> ❌ Not filtered</div>
                <div><span className="font-medium">Personalization:</span> ❌ None</div>
                <div><span className="font-medium">Styling:</span> ✅ Looks only</div>
              </div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-light text-black">Platform</th>
                    <th className="text-left p-6 font-light text-black">Focus</th>
                    <th className="text-left p-6 font-light text-black">Fit Filters</th>
                    <th className="text-left p-6 font-light text-black">Extended Sizes</th>
                    <th className="text-left p-6 font-light text-black">Personalization</th>
                    <th className="text-left p-6 font-light text-black">Styling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
                    <td className="p-6 font-medium text-black">SimplyAboveAverage</td>
                    <td className="p-6 text-gray-700">Search + simplyaboveaverageed sizes</td>
                    <td className="p-6"><span className="text-green-600">✅ Smart filters (inseam, rise, etc.)</span></td>
                    <td className="p-6"><span className="text-green-600">✅ 1X-8XLT, 26-80, 4-18 shoes</span></td>
                    <td className="p-6"><span className="text-green-600">✅ User profiles, wishlist, fit alerts</span></td>
                    <td className="p-6"><span className="text-green-600">✅ Athlete styling, "get the look"</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-medium text-black">Google Shopping</td>
                    <td className="p-6 text-gray-600">General product search</td>
                    <td className="p-6"><span className="text-red-500">❌ Basic only</span></td>
                    <td className="p-6"><span className="text-red-500">❌ Inconsistent</span></td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-medium text-black">Amazon Personal Shopper</td>
                    <td className="p-6 text-gray-600">General consumer shopping</td>
                    <td className="p-6"><span className="text-green-600">✅ Limited</span></td>
                    <td className="p-6"><span className="text-red-500">❌ Weak in tall/plus</span></td>
                    <td className="p-6"><span className="text-green-600">✅ Some styling prompts</span></td>
                    <td className="p-6"><span className="text-green-600">✅ But not size-specific</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-medium text-black">Universal Standard</td>
                    <td className="p-6 text-gray-600">DTC apparel brand</td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                    <td className="p-6"><span className="text-green-600">✅ 00-40</span></td>
                    <td className="p-6"><span className="text-red-500">❌ Static catalog</span></td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-medium text-black">American Tall</td>
                    <td className="p-6 text-gray-600">DTC brand for tall men/women</td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                    <td className="p-6"><span className="text-green-600">✅ 6'3"+ focus</span></td>
                    <td className="p-6"><span className="text-red-500">❌ Static</span></td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-black">Pinterest / LTK</td>
                    <td className="p-6 text-gray-600">Inspiration boards</td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                    <td className="p-6"><span className="text-red-500">❌ Not filtered</span></td>
                    <td className="p-6"><span className="text-red-500">❌ None</span></td>
                    <td className="p-6"><span className="text-green-600">✅ Looks only</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Test Our Competitors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              TEST OUR COMPETITORS YOURSELF
            </h2>
            <p className="text-xl text-gray-600 font-light">Try this right now and see the difference</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                <a href="https://www.shopstyle.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  ShopStyle
                </a>
              </h3>
              <p className="text-gray-600 font-light mb-4">
                Search "36 in inseam jeans"
              </p>
              <div className="bg-red-100 rounded-xl p-4 border border-red-200">
                <p className="text-red-700 font-light text-sm">
                  ❌ Inseams don't match what they claim
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                <a href="https://lyst.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  Lyst
                </a>
              </h3>
              <p className="text-gray-600 font-light mb-4">
                Try to shop across multiple brands
              </p>
              <div className="bg-orange-100 rounded-xl p-4 border border-orange-200">
                <p className="text-orange-700 font-light text-sm">
                  ❌ Takes you to brand websites, no unified shopping experience
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                <a href="https://www.plush.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  Plush.AI
                </a>
              </h3>
              <p className="text-gray-600 font-light mb-4">
                Search for extended sizes
              </p>
              <div className="bg-blue-100 rounded-xl p-4 border border-blue-200">
                <p className="text-blue-700 font-light text-sm">
                  ❌ 10-second load times, inseams in centimeters you have to convert
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight">What We Built Instead</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-extralight text-green-600 mb-2">✓</div>
                <p className="text-gray-600 font-light">Direct brand integrations</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-green-600 mb-2">✓</div>
                <p className="text-gray-600 font-light">Multi-brand shopping carts</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-green-600 mb-2">✓</div>
                <p className="text-gray-600 font-light">Accurate fit data</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 font-light">
              <strong>Result:</strong> The unified extended-size shopping experience simply doesn't exist anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Our Unique Position */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              OUR UNIQUE POSITION
            </h2>
            <p className="text-xl text-gray-600 font-light">Why we're building something completely different</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Fit-First Technology</h3>
                <p className="text-gray-600 font-light">
                  Smart filters for inseam, rise, shoulder width, and torso length — the attributes that actually matter for fit, not just aesthetics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Cultural Storytelling</h3>
                <p className="text-gray-600 font-light">
                  Athlete styling, tunnel fits, NYFW shows — we're not just selling clothes, we're shaping culture and giving extended-size shoppers representation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Cross-Brand Discovery</h3>
                <p className="text-gray-600 font-light">
                  The only platform that lets you search, compare, and shop extended sizes across multiple brands with personalized recommendations and fit alerts.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">The Market Gap</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-light">No cross-brand extended-size discovery platform exists</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-light">No platform combines fit-tech with cultural influence</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-light">No personalized search with wishlist and fit alerts</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-light">No athlete-backed styling for extended sizes</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                <p className="text-xl text-black font-light">
                  <strong>simplyaboveaverage is first to market</strong> in this massive white space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            READY TO DOMINATE THIS SPACE?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join us in building the first true extended-size discovery platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                View Investment Terms
              </Button>
            </Link>
            <Link href="/market-opportunity">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                Market Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
