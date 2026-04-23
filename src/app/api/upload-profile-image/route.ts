import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as any;
        const adminPassword = formData.get('adminPassword')?.toString();

        if (!file || typeof file.name !== 'string') {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        const envPassword = process.env.ADMIN_PASSWORD;
        if (!envPassword) {
            return NextResponse.json({ success: false, message: 'Server not configured' }, { status: 500 });
        }

        if (!adminPassword || adminPassword !== envPassword) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await fs.promises.mkdir(uploadsDir, { recursive: true });

        const originalName = String(file.name || `upload-${Date.now()}`);
        const ext = path.extname(originalName) || '.png';
        const filename = `profile-${Date.now()}${ext}`;

        // `file` is a File-like object in the server FormData API
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const destPath = path.join(uploadsDir, filename);
        await fs.promises.writeFile(destPath, buffer);

        // Update the source placeholder-images.json so the uploaded image becomes the default
        try {
            const jsonPath = path.join(process.cwd(), 'src', 'lib', 'placeholder-images.json');
            const jsonRaw = await fs.promises.readFile(jsonPath, 'utf-8');
            const json = JSON.parse(jsonRaw);
            if (Array.isArray(json.placeholderImages)) {
                json.placeholderImages = json.placeholderImages.map((img: any) => {
                    if (img.id === 'profile-picture') {
                        // Preserve original image URL so we can fall back if uploaded file is removed
                        const original = img.originalImageUrl || img.imageUrl;
                        return { ...img, originalImageUrl: original, imageUrl: `/uploads/${filename}` };
                    }
                    return img;
                });
                await fs.promises.writeFile(jsonPath, JSON.stringify(json, null, 2), 'utf-8');
            }
        } catch (err) {
            // Non-fatal: continue even if we can't write the json
            console.warn('Could not update placeholder-images.json', err);
        }

        const publicUrl = `/uploads/${filename}`;
        return NextResponse.json({ success: true, url: publicUrl });
    } catch (err: any) {
        console.error('Upload error', err);
        return NextResponse.json({ success: false, message: err?.message || 'Server error' }, { status: 500 });
    }
}
