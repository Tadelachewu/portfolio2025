import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body || {}
    if (typeof password !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 })
    }

    // Compare raw password from environment variable (ADMIN_PASSWORD)
    const envPassword = process.env.ADMIN_PASSWORD
    if (!envPassword) {
      return NextResponse.json({ success: false, message: 'Server not configured' }, { status: 500 })
    }

    if (password === envPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
