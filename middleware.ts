import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  //check not logged in
  if (!token) {
    if (!request.nextUrl.pathname.startsWith("/login")) {
      const url = new URL(`/login`, request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/login")) {
      const url = new URL(`/`, request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: ["/hog_form", "/data_table", "/logout", "/login", "/profile/:path*"],
};
