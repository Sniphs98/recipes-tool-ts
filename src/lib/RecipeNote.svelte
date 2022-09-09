<script lang="ts">
    export let recipe;

    let dish_name = Object.values(recipe)[1];
    let dish_ingredients = Object.values(recipe)[2];

    enum Unit {
        ml = "ml",
        tl = "TL",
        // TABLESPOON = 'Esslöffel', so sollte der auf bau des Enums sein
        schuss = "Schuss",
        stück = "Stück",
        priese = "Priese",
    }

    function showRecipe() {

    }
</script>

<div class="card" style="width: 18rem;" on:click={showRecipe}>
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
        <div class="card-text">
            <h2>
                <b>{dish_name}</b>
            </h2>
            {#each dish_ingredients as ingredient}
                <li>
                    {ingredient.name}
                    {ingredient.amount}
                    {ingredient.unit_of_measurement}
                </li>
            {/each}
        </div>
    </div>
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        min-width: 25%;
        border-radius: 5px;
        margin-top: 2rem;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
