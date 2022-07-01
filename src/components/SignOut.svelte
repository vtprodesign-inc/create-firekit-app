<script>
  import { getAuth, signOut } from "firebase/auth"
  export let hide = false
  
  const auth = getAuth()
</script>

<span style="opacity: {hide ? 0 : 1}" id="SignOut" on:click={e => signOut(auth)}>Sign Out</span>