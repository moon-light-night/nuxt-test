export default function({ store, redirect }) {
  if (!store.getters.GET_TOKEN) {
    redirect("/login?message=login");
  }
}
