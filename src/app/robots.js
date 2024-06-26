export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/profile/',
      },
      sitemap: 'https://asfaqrafi.com/sitemap.xml',
    }
  }