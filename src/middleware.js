import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const localeMiddleware = createMiddleware(routing);
export async function middleware(req) {
  const token = await getToken({ req });

  // Check if user is authenticated
  const isAuthenticated = !!token;
  const { pathname } = req.nextUrl;
  const localeMatch = pathname.match(/^\/(ar|en)/);
  const locale = localeMatch ? localeMatch[1] : null;

  // Define protected routes
  const protectedRoutes = /^\/(en|ar)\/instructor\/.*/;

  if (protectedRoutes.test(pathname) && !isAuthenticated) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }
  if (
    protectedRoutes.test(pathname) &&
    !token?.user.role.includes("instructor")
  ) {
    return NextResponse.redirect(new URL(`/${locale}/`, req.url));
  }

  // Check if user is authenticated and trying to access login or signup
  const isLoginOrSignup = /^\/(en|ar)\/(login|signup)/.test(pathname);
  if (isAuthenticated && isLoginOrSignup) {
    // If user is authenticated and trying to access login/signup, redirect to home
    return NextResponse.redirect(new URL(`/${locale || "en"}/`, req.url));
  }

  // Apply localization middleware
  return localeMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
