This folder is for your downloadable CV.

Place your final PDF here and name it exactly:

  Tadele_Mesfin_CV.pdf

Once the PDF is present it will be served at `/cv/Tadele_Mesfin_CV.pdf`.

How to link from your Next.js app (example in a component or header):

```jsx
<a href="/cv/Tadele_Mesfin_CV.pdf" download>Download CV</a>
```

Or using Next.js Link for navigation (no `download` attribute):

```jsx
import Link from 'next/link'

<Link href="/cv/Tadele_Mesfin_CV.pdf">Download CV</Link>
```

Recommended filename and path make it easy for recruiters to download directly.
