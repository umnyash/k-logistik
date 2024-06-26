export async function sendData(url, body, onSuccess, onFail, onFinally) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error(`${response.status} – ${response.statusText}`);
    }
    onSuccess();
  } catch(err) {
    onFail();
  } finally {
    onFinally();
  }
}
