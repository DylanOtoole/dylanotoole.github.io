'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Book, ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoCard {
  image: string;
  description: string;
  store: string;
  location: string;
  rating: string;
  imagePosition?: string;
}

const photoCards: PhotoCard[] = [
  {
    image: "/dylan_pizza_1.jpg",
    description: "Classic Neapolitan style, perfect char.",
    store: "Avalanche Pizza",
    location: "Whistler, BC, Canada",
    rating: "6.3/10",
    imagePosition: "object-[center_50%] scale-99"
  },
  {
    image: "/dylan_pizza_2.jpg",
    description: "Crispy crust, generous toppings.",
    store: "Topper's Pizza",
    location: "Collingwood, Ontario, Canada",
    rating: "7.2/10",
    imagePosition: "object-[center_75%]"
  },
  {
    image: "/dylan_pizza_3.jpg",
    description: "Cheese lover's dream.",
    store: "Prince Street Pizza",
    location: "Toronto, Ontario, Canada",
    rating: "8.8/10",
    imagePosition: "object-[center_100%]"
  },
  {
    image: "/dylan_pizza_4.jpg",
    description: "Earthy flavors, thin crust.",
    store: "Tortuga Pizza",
    location: "Madrid, Spain",
    rating: "6.7/10"
  },
  {
    image: "/dylan_pizza_5.jpg",
    description: "Earthy flavors, thin crust.",
    store: "Pizza Pizza - Deep fried slice",
    location: "Toronto, Ontario, Canada",
    rating: "5.5/10",
    imagePosition: "object-[center_100%]"
  }
];

export function About() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % photoCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + photoCards.length) % photoCards.length);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center inline-block px-4 py-2 rainbow-text" data-text="About Me">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div
              className={`shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-xl p-8 bg-white transition-all duration-300 ${isHovered ? 'transform scale-103 translate-y-[-2px] translate-x-[-2px] shadow-[6px_6px_0_0_rgba(0,0,0,1)]' : ''
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-2xl font-extrabold mb-4">
                  Personal:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xl text-black">
                  <li>Born and raised in Vancouver, BC.</li>
                  <li>Competitive tennis player. 🎾</li>
                  <li>Avid skier. ⛷️</li>
                  <li>Pizza enthusiast and reviewer. 🍕</li>
                  <li>Banana connoisseur 🍌</li>
                  <li>Sci-fi reader; <a href="https://www.goodreads.com/book/show/58416952-the-will-of-the-many" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">The Will of the Many</a> tops my list.</li>
                </ul>
                <div className="mt-6 mb-8">
                  <Button
                    className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all bg-[#5C3317] hover:bg-[#3B2110] text-white"
                    asChild
                  >
                    <a href="https://www.goodreads.com/user/show/164665279-dylan" target="_blank" rel="noopener noreferrer">
                      <Book className="mr-2 h-4 w-4" />
                      Check out my Goodreads
                    </a>
                  </Button>
                </div>
                <p className="text-2xl font-extrabold mb-4 mt-6">
                  Professional:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xl text-black">
                  <li>Computer Engineering @ University of Toronto.</li>
                  <li>Experience in systems programming, networking, and web development.</li>
                  <li>Enjoy working in teams and learning from others.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-6 inline-flex px-4 py-2 rainbow-text w-fit" data-text="Dylan's Pizza Reviews">
              Dylan's Pizza Reviews
            </h3>
            <div
              className={`shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-xl bg-white overflow-hidden transition-all duration-300 ${isPhotoHovered ? 'transform scale-103 translate-y-[-2px] translate-x-[-2px] shadow-[6px_6px_0_0_rgba(0,0,0,1)]' : ''
                }`}
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              <div className="relative h-[500px] w-full">
                <div className="absolute inset-0 transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentCard * 100}%)` }}>
                  <div className="flex">
                    {photoCards.map((card, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="relative h-[500px]">
                          <Image
                            src={card.image}
                            alt={`Pizza review ${index + 1}`}
                            fill
                            className={`object-cover ${card.imagePosition || ''}`}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-50 text-white p-4">
                            <h4 className="text-xl font-bold mb-2 text-white/90">{card.store}</h4>
                            <p className="text-lg mb-2 text-white italic">{card.location}</p>
                            <p className="text-lg font-semibold text-white/90">Rating: {card.rating}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button
                onClick={prevCard}
                className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all px-6 py-3 bg-white hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </Button>
              <Button
                onClick={nextCard}
                className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all px-6 py-3 bg-white hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

