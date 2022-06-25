<script>
  import "@/firebase";
  import { getAuth } from "firebase/auth";
  import { authUser } from "@/store/firebase";
  import Auth from "@/components/Auth.svelte";

  const auth = getAuth()
  auth.onAuthStateChanged((user) => {
    authUser.set(user)
  })
</script>

{#if !$authUser}
  <Auth />
{:else}
  <slot></slot>
{/if}