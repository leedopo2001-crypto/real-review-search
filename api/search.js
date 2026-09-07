module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const q = String((req.query && req.query.q) || '').trim();
  if (!q) return res.status(400).json({ error: 'q required' });
  return res.status(200).json({ query: q, summary: ['placeholder'], items: [], links: [] });
};
