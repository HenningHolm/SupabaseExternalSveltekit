<script lang="ts">
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js'
  import Account from '../lib/Account.svelte';
  import { supabase } from '../supabaseClient';

  let session: AuthSession | null

  async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session
    })
    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session
    })
  })
</script>
<div class="container" style="padding: 50px 0 100px 0">
  {#if !session}
  <button onclick={signInWithGithub}>Login with github</button>
  {:else}
  <Account {session} />
  {/if}
</div>