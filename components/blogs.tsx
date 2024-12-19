import { HardHat } from 'lucide-react'

export function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 inline-block px-4 py-2 rainbow-text" data-text="Blogs">
          Blogs
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HardHat size={64} className="text-yellow-500" />
          <p className="text-xl font-semibold">Under Construction</p>
        </div>
      </div>
    </section>
  )
}

