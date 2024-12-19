import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN!,
    }),
  })

  return response.json()
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=4', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const data = await response.json()

    const tracks = data.items.map((item: any) => ({
      name: item.track.name,
      artist: item.track.artists[0].name,
      album: item.track.album.name,
      image: item.track.album.images[0].url,
      playedAt: item.played_at,
    }))

    return NextResponse.json(tracks)
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

