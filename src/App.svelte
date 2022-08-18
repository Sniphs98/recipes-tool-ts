<script lang="ts">
  import RecipeNote from "./lib/RecipeNote.svelte";
  import FloatingButton from "./lib/FloatingButton.svelte";


  let modal
</script>

<div class="container">
  <RecipeNote />
</div>

<FloatingButton />




<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
