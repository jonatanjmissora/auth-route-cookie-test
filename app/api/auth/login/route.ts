import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();
  if (name !== 'admin' || password !== 'admin') {
    return NextResponse.json({ message: 'NO autorizado' }, { status: 401 });
  }
  cookies().set({
    name: 'token',
    value: '1234',
    httpOnly: true,
    path: '/',
  });
  return NextResponse.json({ message: 'Autorizado' }, { status: 200 });
}
