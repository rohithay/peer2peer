<script>
  import { decrypt } from './encryption.js';
  export let letters = [];
  export let password;
  let decryptedLetters = [];

  $: update();

  async function update() {
    decryptedLetters = [];
    for (let l of letters) {
      try {
        const text = await decrypt(l.data, password);
        decryptedLetters.push(JSON.parse(text));
      } catch {
        decryptedLetters.push({ to: '[Decryption failed]', content: '', date: '' });
      }
    }
  }
</script>

<h2>Your Letters</h2>
{#if decryptedLetters.length === 0}
  <p>No letters yet.</p>
{:else}
  <ul>
    {#each decryptedLetters as letter, i}
      <li style="margin-bottom:1em;">
        <b>To:</b> {letter.to}<br/>
        <b>Date:</b> {letter.date && new Date(letter.date).toLocaleString()}<br/>
        <pre>{letter.content}</pre>
      </li>
    {/each}
  </ul>
{/if}
