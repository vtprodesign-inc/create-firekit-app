<script>
  import "@/firebase";
  import { getAuth } from "firebase/auth";
  import { authUser } from "@/store/firebase";

  const auth = getAuth()
  auth.onAuthStateChanged((user) => {
    authUser.set(user)
  })
</script>

<slot></slot>