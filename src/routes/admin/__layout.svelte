<script>
  import { authUser } from "@/store/firebase";
  import Auth from "@/components/Auth.svelte";
  import SignOut from "@/components/SignOut.svelte";

</script>

{#if !$authUser}
  <Auth />
{:else}
  <SignOut />
  <slot></slot>
{/if}

<style>
  :global(#SignOut) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>