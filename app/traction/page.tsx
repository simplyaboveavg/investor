import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Traction() {
  return (
    <div className="min-h-screen bg-white text-black font-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-wide text-black">simplyaboveaverage</h1>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-xs px-2">
                  Overview
                </Button>
              </Link>
              <Link href="/market-opportunity">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-xs px-2">
                  Market
                </Button>
              </Link>
              <Link href="/competitive-landscape">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-xs px-2">
                  Competition
                </Button>
              </Link>
              <Link href="/genai">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-xs px-2">
                  GenAI
                </Button>
              </Link>
              <Link href="/go-to-market">
                <Button variant="ghost" className="text-gray-600 hover:text-black font-light text-xs px-2">
                  GTM
                </Button>
              </Link>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Series Seed</div>
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
                Early Success Metrics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                PROVEN
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
                TRACTION
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Strong early momentum across user growth, engagement, and cultural impact
            </p>
          </div>
        </div>
      </section>

      {/* User Growth */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              USER GROWTH
            </h2>
            <p className="text-xl text-gray-600 font-light">Strong website growth for our brand discovery platform</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-green-600 mb-4">+156%</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">90-Day Growth</h3>
              <p className="text-gray-600 font-light">
                Consistent website user growth over the past quarter
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-blue-600 mb-4">+227%</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">May to June MoM</h3>
              <p className="text-gray-600 font-light">
                Following new marketing tests and strategies
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-200 text-center">
              <div className="text-6xl font-extralight text-purple-600 mb-4">+3%</div>
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">July Growth</h3>
              <p className="text-gray-600 font-light">
                Flat growth despite strong test performance — both strategies viable
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200 text-center">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Growth Strategy Validation</h3>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
              July's flat growth despite equally strong test performance indicates that both our marketing strategies are viable and sustainable for driving users to our brand discovery platform. This gives us multiple proven paths to scale website traffic and user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Returning Users & Engagement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Returning Users */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-light text-black mb-6 tracking-tight">RETURNING USERS</h3>
                <div className="text-6xl font-extralight text-purple-600 mb-4">20-30%</div>
                <p className="text-xl text-gray-600 font-light">of daily sessions are returning users</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-xl font-light text-black mb-3">Strong Problem-Solution Fit</h4>
                  <p className="text-gray-600 font-light text-sm">
                    Users return without notifications or engagement loops, signaling genuine value
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-xl font-light text-black mb-3">Baseline Performance</h4>
                  <p className="text-gray-600 font-light text-sm">
                    20% return rate on a content site not yet optimized for retention
                  </p>
                </div>
              </div>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-light text-black mb-6 tracking-tight">ENGAGEMENT</h3>
                <p className="text-xl text-gray-600 font-light">Improving user behavior metrics</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-light text-black">Bounce Rate</h4>
                    <div className="text-2xl font-extralight text-green-600">-11%</div>
                  </div>
                  <p className="text-gray-600 font-light text-sm">
                    Down MoM, now at 42.5%
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-light text-black">Pages per Session</h4>
                    <div className="text-2xl font-extralight text-blue-600">+8%</div>
                  </div>
                  <p className="text-gray-600 font-light text-sm">
                    Up MoM, now averaging 2.6 pages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cumulative Traction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              CUMULATIVE TRACTION
            </h2>
            <p className="text-xl text-gray-600 font-light">Total platform metrics to date</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-blue-600 mb-4">3,535</div>
              <h4 className="text-xl font-light text-black mb-2">Total Site Sessions</h4>
              <p className="text-gray-600 font-light text-sm">From 2,488 unique users</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-green-600 mb-4">114</div>
              <h4 className="text-xl font-light text-black mb-2">Waitlist Signups</h4>
              <p className="text-gray-600 font-light text-sm">100% organic growth</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-purple-600 mb-4">108</div>
              <h4 className="text-xl font-light text-black mb-2">Contact Submissions</h4>
              <p className="text-gray-600 font-light text-sm">Separate from waitlist</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-yellow-600 mb-4">83</div>
              <h4 className="text-xl font-light text-black mb-2">Newsletter Subscribers</h4>
              <p className="text-gray-600 font-light text-sm">Growing email list</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-red-500 mb-4">200+</div>
              <h4 className="text-xl font-light text-black mb-2">Brands in Database</h4>
              <p className="text-gray-600 font-light text-sm">Comprehensive product catalog</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-extralight text-gray-600 mb-4">2,488</div>
              <h4 className="text-xl font-light text-black mb-2">Unique Users</h4>
              <p className="text-gray-600 font-light text-sm">Distinct individuals reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Growth */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              SOCIAL GROWTH
            </h2>
            <p className="text-xl text-gray-600 font-light">Strong social media momentum</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-6xl font-extralight text-purple-600 mb-4">133.4K</div>
                  <h3 className="text-2xl font-light text-black tracking-tight">Views in Last 30 Days</h3>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-6xl font-extralight text-blue-600 mb-4">1,450</div>
                  <h3 className="text-2xl font-light text-black tracking-tight">New Followers</h3>
                  <p className="text-gray-600 font-light">Now at 1,690 total</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">Engagement Metrics</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-light text-black">Total Interactions</h4>
                    <div className="text-3xl font-extralight text-purple-600">1,321</div>
                  </div>
                  <p className="text-gray-600 font-light text-sm">Across all social platforms</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-light text-black">Boosted Content Engagement</h4>
                    <div className="text-3xl font-extralight text-blue-600">63%</div>
                  </div>
                  <p className="text-gray-600 font-light text-sm">Strong performance on paid content</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-gray-600 font-light text-sm text-center">
                  <strong>Note:</strong> Organic engagement TBD — ads currently running, minimal feed posting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Traction & Target Demo Feedback */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              TIKTOK TRACTION & USER FEEDBACK
            </h2>
            <p className="text-xl text-gray-600 font-light">Real responses from our target demographic</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Viral Content Examples */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Viral Content Performance</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8150.jpg-zJnGg3IKpRDBsQJZr0GNSwe0GFcHgW.jpeg" 
                      alt="TikTok comment showing 698 comments on shoes for wide feet content"
                      className="w-full rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <div className="text-4xl font-extralight text-purple-600 mb-2">698</div>
                      <p className="text-gray-600 font-light text-sm">Comments on "Shoes For Wide Feet" content</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8145.jpg-uw4zCcOspX9RtkOaBlVV8ai7nOlxPD.jpeg" 
                      alt="TikTok comment with 99 likes about adding brands to website"
                      className="w-full rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <div className="text-4xl font-extralight text-blue-600 mb-2">99</div>
                      <p className="text-gray-600 font-light text-sm">Likes on single brand partnership comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Testimonials */}
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">Target Demo Validation</h3>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8142.jpg-yqtvgFQqJvUWj6ocOMN27a6obITP5a.jpeg" 
                  alt="User comment: Thank you for this I NEED"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600 font-light text-sm italic">"Thank you for this I NEED"</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8144.jpg-h6kbdiO4QXTZPxuzrXy5fp98aBpzfR.jpeg" 
                  alt="User sharing their struggle finding brands that fit"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600 font-light text-sm italic">"It took me years to find brands that fit my body, but I got stuck with limited looks. Can't wait to learn more"</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8141.jpg-kmOcqn3aNnVm8o0GytXSfh4emBYCQt.jpeg" 
                  alt="User excited about jeans that fit right"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600 font-light text-sm italic">"Especially jeans 😭😭😭 I need the length and fit right"</p>
              </div>
            </div>
          </div>

          {/* Community Engagement Examples */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-gray-200">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8133.PNG-Nw5sTc17wmYzNJDvZldApEqs7lqJR3.png" 
                alt="Multiple positive TikTok comments from tall women"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-xl font-light text-black mb-2">Community Building</h4>
              <p className="text-gray-600 font-light text-sm">Users finding their tribe and expressing genuine excitement</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-gray-200">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8136.jpg-2e3iE5oKjhZPE2XN0jT4dNJejvSYpr.jpeg" 
                alt="User requesting natural fabrics with Morgan responding positively"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-xl font-light text-black mb-2">Product Feedback</h4>
              <p className="text-gray-600 font-light text-sm">Users providing valuable input on fabric preferences and needs</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-gray-200">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8135.jpg-sfs9GpnWGM9H55Lco8cQs8IZApwEe2.jpeg" 
                alt="6'3 user requesting different aesthetics and style choices"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-xl font-light text-black mb-2">Style Diversity</h4>
              <p className="text-gray-600 font-light text-sm">Requests for varied aesthetics showing market depth</p>
            </div>
          </div>

          {/* Real User Problems */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 border border-gray-200">
            <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">Real User Pain Points</h3>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8129.PNG-Q1ZCEBpz1D1snVrxl9B0WkrzdT1T6x.png" 
                  alt="Instagram DM showing user's frustrating shopping experience"
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-xl font-light text-black mb-3">The Shopping Reality</h4>
                  <p className="text-gray-600 font-light text-sm mb-4">
                    "We measured and none looked promising for inseam"
                  </p>
                  <p className="text-gray-600 font-light text-sm mb-4">
                    "I've walked in their stores before with the kiddo and they kind of gave her a look and said yes no. We don't have 36" inseam"
                  </p>
                  <p className="text-gray-600 font-light text-sm">
                    "Wide leg still gets worn with the waist at the waist"
                  </p>
                </div>
                
                <div className="bg-red-100 rounded-xl p-6 border border-red-200 text-center">
                  <h4 className="text-xl font-light text-black mb-3">The Problem We're Solving</h4>
                  <p className="text-red-700 font-light">
                    Traditional retail fails our customers before they even try on clothes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional User Feedback & Product Validation */}
          <div className="mt-16 space-y-12">
            {/* Community Support */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">Community Support & Validation</h3>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tall_girls_only_introtocompany_2-IiUCZDRfeZCn8mfqPkvbskucxyRQqp.png" 
                    alt="LinkedIn-style comments showing overwhelming community support"
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-light text-black mb-3">Niche Facebook Group Validation</h4>
                    <div className="space-y-3">
                      <p className="text-gray-600 font-light text-sm italic">"You are my hero! ❤️"</p>
                      <p className="text-gray-600 font-light text-sm italic">"Awesome Morgan! I just started following you on insta! You are going to help a lot of people! ❤️"</p>
                      <p className="text-gray-600 font-light text-sm italic">"This is AMAZING"</p>
                      <p className="text-gray-600 font-light text-sm italic">"love love love!! if i could love this anymore i would!!"</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 rounded-xl p-6 border border-green-200 text-center">
                    <h4 className="text-xl font-light text-black mb-3">Cross-Platform Growth</h4>
                    <p className="text-green-700 font-light">
                      Users actively following across Facebook, Instagram, and TikTok
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed User Testing & Feedback */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">In-Depth User Testing & Product Development</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8128.PNG-rjG2Uth7Z9phkzPRiMSIRpKBlCa2Go.png" 
                    alt="User providing detailed feedback about website functionality and bugs"
                    className="w-full rounded-lg"
                  />
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-light text-black mb-3">Product Development Insights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 font-light text-sm">Users identifying and reporting bugs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 font-light text-sm">Requesting natural language search: "jeans size 32, inseam 36"</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 font-light text-sm">Providing thoughtful, detailed feedback</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8127.PNG-z7Her1XatXD0Ns5qu8K0UfTzDy1nuh.png" 
                    alt="Plus size tall user testing the website and providing specific feedback"
                    className="w-full rounded-lg"
                  />
                  
                  <div className="bg-blue-100 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-xl font-light text-black mb-3">Plus Size + Tall Market Gap</h4>
                    <p className="text-blue-700 font-light text-sm mb-3">
                      "I thought SO much about this today, there are literally no brands that cater to plus size AND tall girls."
                    </p>
                    <p className="text-blue-700 font-light text-sm">
                      User tested: Size 16 & XXL & 36" inseam - highlighting the intersection challenge
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Discovery & Conversion */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight text-center">Product Discovery & Conversion Success</h3>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8143.jpg-0mBPBPM0QqNJEA4JC77dV06d2HkBVH.jpeg" 
                    alt="User discovering extended shoe sizes and expressing extreme excitement"
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-light text-black mb-3">Product Category Expansion</h4>
                    <p className="text-gray-600 font-light text-sm mb-4 italic">
                      "I just checked your website, and you found extended shoe sizes too!!! 😭 OMG!! You're a godsend. from one 6ft girly to another"
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-purple-700 font-light text-sm">
                        <strong>Morgan's Response:</strong> "I have 500+ brands saved and slowly sharing them to the website"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-light text-black mb-3">Actual Purchase Intent</h4>
                    <p className="text-gray-600 font-light text-sm italic">
                      "I was up last night exploring new brands I found through your page and will be placing some orders!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Network Engagement */}
            
          </div>

          {/* Engagement Insights */}
          <div className="mt-16 bg-black rounded-3xl p-12 border border-gray-800 text-center">
            <h3 className="text-3xl font-light text-white mb-8 tracking-tight">Community Engagement Insights</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-extralight text-purple-400 mb-4">Immediate</div>
                <p className="text-gray-300 font-light text-sm">Response to content</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-blue-400 mb-4">Personal</div>
                <p className="text-gray-300 font-light text-sm">Stories shared</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-green-400 mb-4">Specific</div>
                <p className="text-gray-300 font-light text-sm">Size requests</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-yellow-400 mb-4">Grateful</div>
                <p className="text-gray-300 font-light text-sm">Tone of responses</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 font-light mt-8">
              Every comment validates our core thesis: this market is underserved and desperate for solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships & Cultural Momentum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              CULTURAL MOMENTUM
            </h2>
            <p className="text-xl text-gray-600 font-light">Building brand authority and industry presence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* NYFW */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">NYFW Debut</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">September 14 Official Debut</h4>
                  <p className="text-gray-600 font-light text-sm">Hosting, producing, casting, and styling original runway show</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Theme: "Tunnel Fits"</h4>
                  <p className="text-gray-600 font-light text-sm">Celebrating how athletes are shaping fashion culture</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-black mb-2">Brand Partners</h4>
                  <p className="text-gray-600 font-light text-sm">Avant Parc and Reps Capital</p>
                </div>
              </div>
              
              <p className="text-purple-600 font-light text-center">
                Aligning perfectly with our mission at the intersection of sports and fashion
              </p>
            </div>

            {/* NFL Partnership */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-3xl font-light text-black tracking-tight">NFL Partnership</h3>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-6xl font-extralight text-green-600 mb-4">✓</div>
                <h4 className="text-2xl font-light text-black mb-4">NFL Rookie Signed</h4>
                <p className="text-gray-600 font-light">
                  First professional athlete signed to our Styling Division
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <h4 className="text-xl font-light text-black mb-3">Strategic Validation</h4>
                <p className="text-gray-600 font-light text-sm">
                  Validates our positioning at the intersection of sports, fashion, and fit — proving our unique market position
                </p>
              </div>
            </div>
          </div>

          {/* Mission Alignment */}
          <div className="bg-black rounded-3xl p-12 border border-gray-800 text-center">
            <h3 className="text-3xl font-light text-white mb-8 tracking-tight">Mission Alignment</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-extralight text-purple-400 mb-4">Sports</div>
                <p className="text-gray-300 font-light text-sm">NFL athlete partnerships</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-blue-400 mb-4">Fashion</div>
                <p className="text-gray-300 font-light text-sm">NYFW runway debut</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-green-400 mb-4">Fit</div>
                <p className="text-gray-300 font-light text-sm">Extended-size focus</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 font-light">
              Every partnership and cultural moment reinforces our unique position in the market
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              KEY INSIGHTS
            </h2>
            <p className="text-xl text-gray-600 font-light">What our traction tells us</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Product-Market Fit</h3>
              <p className="text-gray-600 font-light">
                20-30% returning users without engagement loops proves strong problem-solution fit
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Scalable Growth</h3>
              <p className="text-gray-600 font-light">
                Multiple viable marketing strategies validated through testing
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
              
              <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Cultural Authority</h3>
              <p className="text-gray-600 font-light">
                NYFW debut and NFL partnerships establish credibility in both fashion and sports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            MOMENTUM IS BUILDING
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join us as we scale this proven traction into market dominance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#investment-terms">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                View Investment Terms
              </Button>
            </a>
            <Link href="/go-to-market">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                See Growth Strategy
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
