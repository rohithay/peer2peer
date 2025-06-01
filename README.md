# Love Letters

A minimalist, privacy-focused, open-source web app for exchanging and storing love letters.

## Features

- End-to-end encrypted letters (AES-GCM, your shared secret)
- Letters never leave your browser (localStorage)
- Simple, clean UI
- No accounts, no tracking, no ads

## Usage

1. Clone the repo and run:

    ```sh
    npm install
    npm run dev
    ```

2. Open `http://localhost:8080`
3. Choose a shared secret with your loved one (for encryption)
4. Write, send, and browse your private love letters

## Philosophy

- **Privacy-first**: All data is encrypted using your shared secret.
- **Minimalism**: No bloat, no dependencies except Svelte.
- **Open-source**: Fork and self-host.

## Security

- Uses Web Crypto AES-GCM.
- Letters are stored encrypted in your browser’s localStorage.
- Share your secret only with your loved one.

---

> Built with ❤️.
