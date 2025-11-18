import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/'

  // Construct the base URL more robustly for deployed environments
  const protocol = request.headers.get('x-forwarded-proto') || requestUrl.protocol.slice(0, -1)
  const host = request.headers.get('x-forwarded-host') || requestUrl.host
  const origin = `${protocol}://${host}`

  console.log("Server-side protocol:", protocol);
  console.log("Server-side host:", host);
  console.log("Server-side constructed origin:", origin);

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    } else {
      console.error("Error exchanging code for session:", error);
    }
  }

  // return the user to an error page with some instructions
  return NextResponse.redirect(`${origin}/error`)
}
