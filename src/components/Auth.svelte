<script>
  import { getAuth, signInAnonymously } from "firebase/auth";
  import { authUser } from "@/store/firebase";

  const auth = getAuth()

  async function login() {
    await signInAnonymously(auth)
  }

</script>

<h1>Welcome to <em>FireKit</em></h1>
<p>Auth to do stuff: <button on:click={login}>Log In</button></p>

<style>
  em {
    color: orangered;
  }
</style>