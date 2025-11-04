import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/about(.*)",
  "/services(.*)",
  "/providers(.*)",
  "/locations(.*)",
  "/insurance(.*)",
  "/contact(.*)",
  "/blog(.*)",
  "/patient-resources(.*)",
  "/careers(.*)",
  "/referring-physicians(.*)",
  "/privacy(.*)",
  "/terms(.*)",
  "/hipaa(.*)",
  "/accessibility(.*)",
  "/nondiscrimination(.*)",
  "/api/public(.*)",
]);

// Define admin routes
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// Define provider routes
const isProviderRoute = createRouteMatcher(["/provider-portal(.*)"]);

// Define patient portal routes
const isPatientRoute = createRouteMatcher(["/patient-portal(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // Allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Protect all other routes - require authentication
  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Role-based access control
  const role = sessionClaims?.metadata?.role as string | undefined;

  // Admin routes require admin role
  if (isAdminRoute(req) && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Provider routes require provider role (doctor, nurse)
  if (
    isProviderRoute(req) &&
    !["doctor", "nurse", "staff", "admin"].includes(role || "")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Patient portal requires patient or admin role
  if (isPatientRoute(req) && !["patient", "admin"].includes(role || "")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
