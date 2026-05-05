import { NextRequest, NextResponse } from 'next/server'

const PASSWORDS = {
  'china': 'RedLine2024',
  'usa': 'Minerals4200',
  'valdoria': 'OptionB2024',
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const sessionToken = request.cookies.get('auth_token')?.value

  // Allow access to login and public paths
  if (pathname === '/' || pathname.startsWith('/api/') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  // Check if user is authenticated via session token
  if (sessionToken && isValidSessionToken(sessionToken)) {
    return NextResponse.next()
  }

  // If trying to access a protected document without auth, redirect to login
  if (pathname.match(/^\/(china|usa|valdoria)/)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

function isValidSessionToken(token: string): boolean {
  // Simple validation: token should match pattern "country:timestamp"
  const parts = token.split(':')
  return parts.length === 2 && Object.keys(PASSWORDS).includes(parts[0])
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
