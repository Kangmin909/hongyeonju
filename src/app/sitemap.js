export default function sitemap() {
  const baseUrl = 'https://hongyeonju.com';

  const routes = ['', '/works', '/exhibition', '/about', '/cv'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  return [...routes];
}
