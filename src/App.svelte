<script lang="ts">
  import RecipeNote from "./lib/RecipeNote.svelte";
  import FloatingButton from "./lib/FloatingButton.svelte";
  import Loading from "./lib/Loading.svelte";
  import Modal from "./lib/Modal/Modal.svelte"

  let modal
  const backendURL = "http://localhost:8080/recipe";
  let promise = Promise.resolve([]);
  getRecipes()

  async function fetchUsers(request) {
    const response = await fetch(backendURL + request);
    if (response.ok) {
      var data = await response.json();
      return await data;
    }

    throw new Error();
  }

  function getRecipes() {
    promise = fetchUsers("/getAll");

  }
</script>

<div class="container">
  {#await promise}
    <Loading />
  {:then recipes}
    {#each recipes as recipe}
      <RecipeNote {recipe} />
    {/each}
  {/await}
</div>

<FloatingButton />

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
