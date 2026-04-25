export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const response = await fetch('https://cah-point.vercel.app/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-AR,es;q=0.9',
      }
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'No se pudo obtener el sitio', status: response.status });
    }

    const html = await response.text();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ html });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
