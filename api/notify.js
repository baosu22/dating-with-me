module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  const sendKey = process.env.SERVERCHAN_SENDKEY;
  if (!sendKey) {
    return res.status(500).json({ ok: false, message: 'SERVERCHAN_SENDKEY 未配置' });
  }

  const { title, desp } = req.body || {};
  if (!title || !desp) {
    return res.status(400).json({ ok: false, message: '缺少 title 或 desp' });
  }

  try {
    const response = await fetch(`https://sctapi.ftqq.com/${sendKey}.send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams({ title, desp }).toString()
    });

    const data = await response.json();
    if (!response.ok || Number(data?.code) !== 0) {
      return res.status(502).json({
        ok: false,
        message: data?.message || `Server酱响应异常: ${response.status}`
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, message: '推送请求失败' });
  }
};
