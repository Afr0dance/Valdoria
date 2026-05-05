import { NextRequest, NextResponse } from 'next/server'

const PASSWORDS = {
  'valdoria': 'OptionB2024',
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const sessionToken = request.cookies.get('auth_token')?.value

  if (pathname === '/' || pathname.startsWith('/api/') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  if (sessionToken && isValidSessionToken(sessionToken)) {
    return NextResponse.next()
  }

  if (pathname.match(/^\/valdoria|\/login/)) {
    return NextResponse.next()
  }

  if (pathname.match(/^\/(china|usa)/)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

function isValidSessionToken(token: string): boolean {
  const parts = token.split(':')
  return parts.length === 2 && parts[0] === 'valdoria'
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
