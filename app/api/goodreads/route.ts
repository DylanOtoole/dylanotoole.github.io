import { NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'

export async function GET() {
  try {
    const response = await fetch(
      `https://www.goodreads.com/review/list/${process.env.GOODREADS_USER_ID}?key=${process.env.GOODREADS_API_KEY}&v=2&shelf=read&sort=date_read&order=d&per_page=8`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Goodreads API')
    }

    const xml = await response.text()
    const parser = new XMLParser()
    const result = parser.parse(xml)

    if (!result.GoodreadsResponse || !result.GoodreadsResponse.reviews || !result.GoodreadsResponse.reviews.review) {
      return NextResponse.json([])
    }

    const reviews = Array.isArray(result.GoodreadsResponse.reviews.review)
      ? result.GoodreadsResponse.reviews.review
      : [result.GoodreadsResponse.reviews.review]

    const books = reviews.map((review: any) => ({
      title: review.book.title,
      author: Array.isArray(review.book.authors.author)
        ? review.book.authors.author[0].name
        : review.book.authors.author.name,
      image: review.book.image_url,
      rating: review.rating,
      dateRead: review.read_at
        ? new Date(review.read_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'Date not available',
    }))

    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching Goodreads data:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

