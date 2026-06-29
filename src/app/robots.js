export default function robots() {
  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'CCBot',
        ],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/ld/'],
      },
    ],
    sitemap: 'https://homerepairpro.in/sitemap.xml',
  };
}
