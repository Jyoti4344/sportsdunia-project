import { NextResponse } from "next/server"
import { withClerkMiddleware } from "@clerk/nextjs/server"
import { getAuth } from "@clerk/nextjs/server"
import type { NextRequest } from "next/server"
 
export default withClerkMiddleware((req: NextRequest) => {
  const { userId } = getAuth(req)
  const publicPaths = ["/", "/sign-in*", "/sign-up*"]
  
  // Check if the current path is in the public paths
  const isPublic = publicPaths.some((path) => {
    const pathRegex = new RegExp(`^${path.replace('*', '.*')}$`)
    return pathRegex.test(req.nextUrl.pathname)
  })

  // If the path is public or user is authenticated, allow the request
  if (isPublic || userId) {
    return NextResponse.next()
  }

  // Redirect to sign-in if not authenticated
  const signInUrl = new URL("/sign-in", req.url)
  return NextResponse.redirect(signInUrl)
})
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
}

