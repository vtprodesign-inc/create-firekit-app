<script>
  import { getAuth, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
  import { authUser } from "@/store/firebase";

  let needsAuth = false
  let email = ''
  let password = ''
  let errorMessage = ''

  const auth = getAuth()
  auth.onAuthStateChanged((user) => {
    if (!user) { needsAuth = true }
    authUser.set(user)
  })

  async function loginEmailAndPass() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      authUser.set(userCredential.user)
    } catch(error) {
      console.error(error)
      errorMessage = error.message
    }
  }

  async function loginAnon() {
    await signInAnonymously(auth)
  }

</script>

{#if needsAuth}
  <div class="auth">
    <h1>Please Log In:</h1>
    <form on:submit={e => {e.preventDefault(); loginEmailAndPass()}}>
      <input type="email" placeholder="email" bind:value={email} />
      <input type="password" placeholder="password" bind:value={password} />
      <input class="bg-teal" type="submit" value="submit" />
    </form>
    {#if errorMessage}
      <p>{errorMessage}</p>
    {/if}
  </div>
{/if}

<style>
  em {
    color: orangered;
  }
</style>