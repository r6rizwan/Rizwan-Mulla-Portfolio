export default async function handler(req, res) {
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY environment variable is not set' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  if (!body) {
    return res.status(400).json({ error: 'Request body is empty' });
  }

  // Groq uses OpenAI-compatible format — convert from Anthropic format
  // Anthropic: { model, max_tokens, system, messages: [{role,content}] }
  // Groq:      { model, max_tokens, messages: [{role,content}] } — system goes as first message
  const groqMessages = [];
  if (body.system) {
    groqMessages.push({ role: 'system', content: body.system });
  }
  if (body.messages) {
    groqMessages.push(...body.messages);
  }

  const groqBody = {
    model: body.model || 'llama-3.3-70b-versatile',
    max_tokens: body.max_tokens || 4000,
    messages: groqMessages,
    temperature: 0.4,
  };

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(groqBody),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
    }

    // Convert Groq response back to Anthropic format so the HTML needs zero changes
    // Groq: data.choices[0].message.content
    // Anthropic: data.content[0].text
    const text = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({
      content: [{ type: 'text', text }],
    });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
}
