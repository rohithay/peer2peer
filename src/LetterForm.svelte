<script>
  import { encrypt } from './encryption.js';

  export let password;
  let to = '';
  let content = '';
  let sending = false;

  async function send() {
    if (!to || !content) return;
    sending = true;
    const data = await encrypt(JSON.stringify({ to, content, date: new Date().toISOString() }), password);
    const letter = { data };
    to = '';
    content = '';
    sending = false;
    dispatch('newLetter', letter);
  }

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault={send}>
  <label>
    To:
    <input bind:value={to} required autocomplete="off" />
  </label>
  <label>
    Letter:
    <textarea bind:value={content} required rows="4"></textarea>
  </label>
  <button type="submit" disabled={sending}>Send & Store</button>
</form>
