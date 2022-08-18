<script lang="ts">
  import RecipeNote from './lib/RecipeNote.svelte';
  import FloatingButton from './lib/FloatingButton.svelte';
  import CreateRecipeDialog from './lib/CreateRecipeDialog.svelte';
</script>

<div class="container">
  <RecipeNote/>
</div>

<FloatingButton></FloatingButton>
<CreateRecipeDialog></CreateRecipeDialog>


<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>