'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function InvestorSite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investment_amount: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error } = await supabase
        .from('investment_interest')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            company: formData.company || null,
            investment_amount: formData.investment_amount || null
          }
        ])

      if (error) {
        throw error
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', investment_amount: '' })
    } catch (error: any) {
      setError(error.message || 'An error occurred while submitting your interest.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-white text-black font-light">
      <Header />

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-light text-gray-700 border border-gray-200">
              Fashion × Technology × Sports
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
              REIMAGINING
            </span>
            <br />
            <span className="text-black font-light">FASHION</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-light">
              THAT FITS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Built by tall athletes, backed by tall athletes. The AI-powered search engine that actually finds clothes that fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#team">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                Meet the Team
              </Button>
            </a>
            <a href="https://youtube.com/shorts/qtandMPSu8I?feature=share" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-light text-lg bg-transparent tracking-wide"
              >
                Watch Demo
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-extralight text-black mb-2 group-hover:text-blue-600 transition-colors">
                156%
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-light">
                User growth in last 90 days
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-extralight text-black mb-2 group-hover:text-green-600 transition-colors">
                83%
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-light">Men over 6'3" can't find pants that fit</div>
            </div>
            <div className="group">
              <div className="text-5xl font-extralight text-black mb-2 group-hover:text-yellow-600 transition-colors">
                NFL
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-light">Athlete signed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-extralight text-black mb-2 group-hover:text-purple-600 transition-colors">
                $1.8B
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-light">
                Serviceable Available Market
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extralight text-black mb-6 tracking-tight">
              THE <span className="text-purple-600 font-light">FUTURE</span> {"WE'RE BUILDING"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Three pillars of our vision to transform fashion for everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                  No more juggling 10 tabs
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Search 'jeans size 32, inseam 36' across 100+ brands. See only in-stock items that fit. Add to cart or wishlist, checkout when ready.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-black rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Athletes as Architects</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Beyond endorsements to ownership. We style athletes, curate their image, and give them stakes
                  in the brands they represent.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gray-100 rounded-3xl p-8 border border-gray-300 hover:border-gray-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Cultural Capital</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Athlete-led cap table. Culture-shaping clients. NYFW show that sets the tone for what athletes wear on
                  and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">REVENUE STREAMS</h2>
            <p className="text-xl text-gray-600 font-light">Multiple paths to profitability</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-black tracking-tight">Subscriptions</h3>
                <div className="text-3xl font-extralight text-green-600">$10/mo</div>
              </div>
              <p className="text-gray-600 font-light">Premium search access for extended sizes</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-black tracking-tight">Athlete Styling</h3>
                <div className="text-3xl font-extralight text-blue-600">$15K/mo</div>
              </div>
              <p className="text-gray-600 font-light">High-value retainer contracts</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-black tracking-tight">Brand Partnerships</h3>
                <div className="text-3xl font-extralight text-purple-600">10%</div>
              </div>
              <p className="text-gray-600 font-light">Commission on affiliate sales</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-black tracking-tight">API Platform</h3>
                <div className="text-3xl font-extralight text-orange-600">Tiered</div>
              </div>
              <p className="text-gray-600 font-light">Retailers use our API to clean + structure data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section id="investment-terms" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-4 tracking-tight">
              INVESTMENT OPPORTUNITY
            </h2>
            <p className="text-xl text-gray-600 font-light">Join us in reshaping fashion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-2">$500K</div>
              <div className="text-gray-500 uppercase tracking-wider font-light text-sm">Raising via SAFE</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-2">$6M</div>
              <div className="text-gray-500 uppercase tracking-wider font-light text-sm">Post-Money Cap</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-2">0%</div>
              <div className="text-gray-500 uppercase tracking-wider font-light text-sm">Discount</div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600 font-light text-lg">
              Available to a select group of strategic partners who share our vision for reshaping fashion.
            </p>
            <p className="text-gray-600 font-light">
              Capital will be deployed to scale engineering, enhance our proprietary fit-data platform, and accelerate user acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">LEADERSHIP TEAM</h2>
            <p className="text-xl text-gray-600 font-light">Experienced professionals from fashion, sports, and business</p>
          </div>

          {/* Founder */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/morgan-about.png"
                  alt="Morgan Mackenzie"
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-light text-black mb-2 tracking-tight">Morgan Mackenzie</h3>
                <p className="text-purple-600 text-xl mb-4 font-light">Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed font-light">
                  Ex-Goldman Sachs. Ex-AWS. Duke Economics. 6'2" Volleyball player. Self-taught developer, built the backend from scratch and shipped the MVP of simplyaboveaverage in 90 days.
                </p>
              </div>
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Caroline Sullivan */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="/Caroline.png"
                  alt="Caroline Sullivan"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <h3 className="text-2xl font-light text-black tracking-tight">Caroline Sullivan</h3>
                  <p className="text-blue-600 font-light">Head of Partnerships</p>
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                Duke grad. Associate Marketing Manager at Constellation with a focus on paid ads. Signed model with Marilyn Agency.
              </p>
            </div>

            {/* Carly Savarino */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="/Carly.jpg"
                  alt="Carly Savarino"
                  className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
                />
                <div>
                  <h3 className="text-2xl font-light text-black tracking-tight">Carly Savarino</h3>
                  <p className="text-green-600 font-light">Athlete Stylist</p>
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                Stylist for Duke men's and women's basketball players with a focus on tunnel fits and off-court looks.
              </p>
            </div>
          </div>

          {/* NYFW Team */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-black mb-4 tracking-tight">NYFW Team</h3>
              <p className="text-xl text-gray-600 font-light">Elite fashion professionals driving our cultural impact</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Olivia Meyer */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <img
                  src="/Olivia.jpg"
                  alt="Olivia Meyer"
                  className="w-20 h-20 rounded-full object-cover border-2 border-purple-200 mx-auto mb-4"
                />
                <h4 className="text-xl font-light text-black mb-2 tracking-tight">Olivia Meyer</h4>
                <p className="text-purple-600 font-light text-sm mb-4">Styling & Curation</p>
                <div className="text-gray-600 font-light text-sm space-y-1">
                  <p>Buyer at Bloomingdale's</p>
                  <p>Former Valentino team</p>
                  <p>UNESCO & Women @ Dior Mentee Finalist</p>
                  <p>2024 Fashion Scholarship Fund Chairman's Award Winner</p>
                </div>
              </div>

              {/* Tamara Marono */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <img
                  src="/Tamy.jpg"
                  alt="Tamara Marono"
                  className="w-20 h-20 rounded-full object-cover border-2 border-pink-200 mx-auto mb-4"
                />
                <h4 className="text-xl font-light text-black mb-2 tracking-tight">Tamara Marono</h4>
                <p className="text-pink-600 font-light text-sm mb-4">Event Production</p>
                <div className="text-gray-600 font-light text-sm space-y-1">
                  <p>Designer Apprentice at William Frederick</p>
                  <p>Louis Vuitton Ambassador</p>
                  <p>2024 CFDA Scholarship Fund Recipient</p>
                </div>
              </div>

              {/* Jaida Patrick */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <img
                  src="/Jaida4.jpg"
                  alt="Jaida Patrick"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-200 mx-auto mb-4"
                />
                <h4 className="text-xl font-light text-black mb-2 tracking-tight">Jaida Patrick</h4>
                <p className="text-indigo-600 font-light text-sm mb-4">Styling & Model</p>
                <div className="text-gray-600 font-light text-sm space-y-1">
                  <p>Stylist at Akira</p>
                  <p>ESPN On-Air Talent</p>
                  <p>Former NCAA basketball player (Duke, Columbia, UMiami)</p>
                  <p>MS in Media Management & Business, University of Miami</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="apply-to-invest" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">JOIN THE MOVEMENT</h2>
            <p className="text-xl text-gray-600 font-light">Ready to invest in the future of fashion?</p>
          </div>

          {isSubmitted ? (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-gray-200 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-black mb-2">Thank You!</h3>
                <p className="text-gray-600 font-light">
                  Your investment interest has been submitted successfully. We'll be in touch soon.
                </p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light"
              >
                Submit Another Interest
              </Button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-black text-sm font-light mb-3 block tracking-wide">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 border-gray-300 text-black placeholder-gray-500 rounded-xl py-3 focus:border-purple-400 focus:ring-purple-400/20 font-light"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black text-sm font-light mb-3 block tracking-wide">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 border-gray-300 text-black placeholder-gray-500 rounded-xl py-3 focus:border-purple-400 focus:ring-purple-400/20 font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-black text-sm font-light mb-3 block tracking-wide">
                      Company/Fund
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/50 border-gray-300 text-black placeholder-gray-500 rounded-xl py-3 focus:border-purple-400 focus:ring-purple-400/20 font-light"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investment_amount" className="text-black text-sm font-light mb-3 block tracking-wide">
                      Investment Amount
                    </Label>
                    <Input
                      id="investment_amount"
                      value={formData.investment_amount}
                      onChange={handleChange}
                      className="bg-white/50 border-gray-300 text-black placeholder-gray-500 rounded-xl py-3 focus:border-purple-400 focus:ring-purple-400/20 font-light"
                      placeholder="e.g., $25K"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-600 text-sm font-light">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-light text-lg transition-all duration-300 transform hover:scale-105 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Investment Interest'}
                </Button>
              </form>

              <div className="text-center mt-8 pt-8 border-t border-gray-300">
                <p className="text-gray-500 mb-2 font-light">Questions? Reach out directly:</p>
                <div className="space-y-1">
                  <p className="text-black font-light">morgan@simplyaboveaverage.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
