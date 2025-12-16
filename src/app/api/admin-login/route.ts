import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body || {}
    if (typeof password !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 })
    }

    const envHash = process.env.ADMIN_PASSWORD_HASH
    if (!envHash) {
      return NextResponse.json({ success: false, message: 'Server not configured' }, { status: 500 })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    if (hash === envHash) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
