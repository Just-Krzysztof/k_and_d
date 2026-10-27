import { NextResponse, type NextRequest } from "next/server";
import { detectLocale, legacyServicePaths } from "@/lib/routing";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyPath = legacyServicePaths[pathname];
  if (legacyPath) {
    const url = request.nextUrl.clone();
    url.pathname = legacyPath;
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${detectLocale(request.headers.get("accept-language"))}`;
    const response = NextResponse.redirect(url, 307);
    response.headers.set("Vary", "Accept-Language");
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/uslugi/:path*"] };
