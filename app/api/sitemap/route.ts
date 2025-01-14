import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://bigfx-tradingacademy.vercel.app';

  // Example list of static pages
  const staticPages: string[] = ['/', '/about', '/contact'];

  // Fetch dynamic pages (replace with your real API endpoint)
  const dynamicPages = await fetch('https://api.example.com/products')
    .then((res) => res.json())
    .then((products: { slug: string }[]) => products.map((product) => `/product/${product.slug}`));

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`
        )
        .join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
