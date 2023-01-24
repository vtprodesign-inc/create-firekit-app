<script>
  import { authUser } from "@/store/firebase";
</script>

<p>Hey you:<br/><br/>{JSON.stringify($authUser)}</p>