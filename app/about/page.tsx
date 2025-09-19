import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Bot, Brain, Users, Target, Award, TrendingUp, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-gray-50 to-neutral-light dark:from-neutral-dark dark:via-gray-900 dark:to-neutral-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-3xl"></div>
          <div className="relative p-8">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>
            <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-bold text-3xl md:text-5xl text-text-light dark:text-text-dark mb-6">About BuyBot</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're revolutionizing product discovery through AI-powered sentiment analysis 
              and intelligent recommendations, helping you make better purchasing decisions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-2xl mb-6 text-text-light dark:text-text-dark">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                At BuyBot, we believe that every purchase decision should be informed by real, 
                unbiased insights. Our AI analyzes millions of reviews to provide you with 
                accurate product rankings based on genuine user sentiment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We're not just another product comparison site – we're your intelligent 
                shopping companion that understands what matters most to real users.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-light rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Brain className="relative w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl text-center mb-12 text-text-light dark:text-text-dark">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-text-light dark:text-text-dark">AI-Powered Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced sentiment analysis processes millions of reviews to give you accurate product insights.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-warning-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-text-light dark:text-text-dark">Real User Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We prioritize authentic user experiences over marketing claims and sponsored content.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-warning-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-text-light dark:text-text-dark">Personalized Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our recommendations adapt to your preferences and shopping behavior over time.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-2xl text-center mb-8 text-text-light dark:text-text-dark">BuyBot by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <p className="text-gray-600 dark:text-gray-400">Reviews Analyzed</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-accent-light/5 to-warning-light/5 dark:from-accent-dark/10 dark:to-warning-dark/10 rounded-xl">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">500K+</div>
              <p className="text-gray-600 dark:text-gray-400">Products Ranked</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-warning-light/5 to-primary/5 dark:from-warning-dark/10 dark:to-primary/10 rounded-xl">
              <div className="text-3xl font-bold text-warning-light dark:text-warning-dark mb-2">95%</div>
              <p className="text-gray-600 dark:text-gray-400">Accuracy Rate</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <p className="text-gray-600 dark:text-gray-400">Happy Users</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-2xl mb-8 text-text-light dark:text-text-dark">Built by Product Enthusiasts</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Our team combines expertise in AI, data science, and e-commerce to create 
            the most reliable product discovery platform. We're passionate about helping 
            consumers make informed decisions in an increasingly complex marketplace.
          </p>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-warning-light rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Award className="relative w-16 h-16 text-accent-light dark:text-accent-dark" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
