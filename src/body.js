export function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';

    req.on('data', chunk => {
      data += chunk.toString();
    });

    req.on('end', () => {
      try {
        const params = new URLSearchParams(data);
        const body = {};
        for (const [key, value] of params) {
          body[key] = value;
        }
        resolve(body);
      } catch (err) {
        reject(err);
      }
    });

    req.on('error', reject);
  });
}
