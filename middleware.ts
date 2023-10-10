import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      request.nextUrl.pathname.startsWith("/admin") &&
      request.nextauth.token?.role !== "ADMIN"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/customer") &&
      request.nextauth.token?.role !== "ADMIN" &&
      request.nextauth.token?.role !== "USER"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      //authorized: ({ token }) => token?.role === "ADMIN",
      authorized: ({ token }) => !!token,
    },
  },
);

// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       if (req.nextUrl.pathname === "/admin") {
//         return token?.role === 'ADMIN';
//       }
//       return !!token;
//     },
//   },
// });

export const config = {
  matcher: ["/customer/:path*", "/admin/:path*"],
};
