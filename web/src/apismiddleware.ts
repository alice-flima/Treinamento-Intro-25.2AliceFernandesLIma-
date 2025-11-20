import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth"; 
import { handleError } from "./app/(backend)/api/errors/Erro";
import { BetterAuthError } from "better-auth";
import { headers } from "next/headers";


export async function apiMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (!pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      const erro = handleError(
        new BetterAuthError("Usuário não autenticado")
      );
      return NextResponse.json(erro, { status: 401 });
    }

    return NextResponse.next();

  } catch (error) {
    const erro = handleError(error);
    return NextResponse.json(erro, { status: 500 });
  }
}