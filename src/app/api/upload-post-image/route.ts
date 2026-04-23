import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export async function POST(req: Request) {
    try {
        const form = await req.formData()
        const adminPassword = form.get('adminPassword')
        const file = form.get('file') as File | null

        if (!adminPassword || typeof adminPassword !== 'string') {
            return NextResponse.json({ ok: false, error: 'Missing adminPassword' }, { status: 400 })
        }

        if (adminPassword !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
        }

        if (!file) {
            return NextResponse.json({ ok: false, error: 'No file provided' }, { status: 400 })
        }

        const originalName = (file as any).name || `post-${Date.now()}`
        const ext = path.extname(String(originalName)) || '.png'
        const filename = `post-${Date.now()}${ext}`

        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const outDir = path.join(process.cwd(), 'public', 'uploads')
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

        const outPath = path.join(outDir, filename)
        await fs.promises.writeFile(outPath, buffer)

        return NextResponse.json({ ok: true, url: `/uploads/${filename}` })
    } catch (err: any) {
        return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 })
    }
}
