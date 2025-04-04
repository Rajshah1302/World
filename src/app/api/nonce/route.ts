import { NextResponse } from "next/server";

export async function GET() {

  const uuid = crypto.randomUUID().replace(/-/g, "");
  const response = NextResponse.json({ nonce: uuid });
  response.cookies.set({
    name: "siwe",
    value: uuid,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600, 
  });

  return response;
}