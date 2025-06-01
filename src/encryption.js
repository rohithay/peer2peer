// Minimal AES-GCM encryption using Web Crypto API

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export async function generateKey(password) {
  const pwUtf8 = encoder.encode(password);
  const pwHash = await window.crypto.subtle.digest('SHA-256', pwUtf8);
  return window.crypto.subtle.importKey(
    'raw', pwHash, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']
  );
}

export async function encrypt(text, password) {
  const key = await generateKey(password);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = encoder.encode(text);
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoded
  );
  return {
    iv: Array.from(iv),
    ciphertext: Array.from(new Uint8Array(ciphertext))
  };
}

export async function decrypt({ iv, ciphertext }, password) {
  const key = await generateKey(password);
  const ct = new Uint8Array(ciphertext);
  const ivArr = new Uint8Array(iv);
  const plaintext = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: ivArr },
    key,
    ct
  );
  return decoder.decode(plaintext);
}
