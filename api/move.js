export default async function handler(req, res) {
  // Enable CORS just in case
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fileId, targetMonth, fromMonth } = req.body;
    const response = await fetch('https://api.contreal.io/api/endpoints/ep_MuQGCX-pHFtK4GlO', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ctk_GSKNxMUUZkTw0t90tfCqPoYxFLSmZmh3Fbt-Q6xW49g'
      },
      body: JSON.stringify({ fileId, targetMonth, fromMonth })
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
