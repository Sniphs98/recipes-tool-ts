<script lang="ts">
  import RecipeNote from './lib/RecipeNote.svelte';
</script>

<div class="container">
  <RecipeNote/>
</div>

<style>
  .container {
    display: flex; /* or inline-flex */
    flex-wrap: wrap;
    justify-content: center;
  }
</style>