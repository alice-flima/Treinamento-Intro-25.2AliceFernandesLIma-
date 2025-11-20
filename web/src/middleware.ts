import { apiMiddleware } from "./apismiddleware";
import { pagesMiddleware } from "./pagesmiddleware";
import { NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return apiMiddleware(request);
  }

  return pagesMiddleware(request);
}
export const config = {
  runtime: "nodejs",
  matcher: ["/api/:path*", "/((?!_next).*)"],
};


