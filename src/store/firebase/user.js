import { writable } from "svelte/store";

function createAuthUser() {
  const { subscribe, set, update } = writable(null)
  return {
    subscribe,
    set,
    update,
    destroy: () => set(null)
  }
}

export const authUser = createAuthUser()