import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware: Redirect www.funesneumaticos.com → funesneumaticos.com
 *
 * This runs at the Edge before any page is rendered, ensuring Google
 * (and all visitors) always land on the canonical apex domain with a
 * proper 301 Permanent Redirect. This consolidates all PageRank and
 * prevents Google from treating www and non-www as two separate sites.
 */
export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || ''

    // If the request comes from the www subdomain, redirect to the apex domain
    if (host.startsWith('www.')) {
        const apexHost = host.replace(/^www\./, '')
        const url = request.nextUrl.clone()
        url.host = apexHost

        return NextResponse.redirect(url, {
            status: 301, // Permanent redirect — tells Google to consolidate authority
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Run on all paths EXCEPT:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico
         * - API routes that may need www access
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
