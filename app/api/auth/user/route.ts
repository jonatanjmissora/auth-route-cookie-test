import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies()

    const token = cookieStore.get("token")
    if(!token) {
        return NextResponse.json({error: "No hay token", token: null})
    }
    return NextResponse.json({ error: null, token: token.value });
}