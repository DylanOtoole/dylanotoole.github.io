'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 inline-block bg-black text-white px-4 py-2 rounded">
          Get in Touch
        </h2>
        <div className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-xl p-8 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                className="shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

