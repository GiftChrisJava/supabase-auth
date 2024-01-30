import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "inspector";
import { NextRequest, NextResponse } from "next/server";

// goal is to prevent anyone to enter inside the app if not logged in..
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  if (!Session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
