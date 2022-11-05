<script lang="ts">
    import Modal from "./Modal/Modal.svelte"
    export let recipe;
    let modal;
    let dish_id = Object.values(recipe)[0]
    let dish_name = Object.values(recipe)[1];
    let dish_ingredients = Object.values(recipe)[2];

    enum Unit {
        ml = "ml",
        tl = "TL",
        // TABLESPOON = 'Esslöffel', so sollte der auf bau des Enums sein
        schuss = "Schuss",
        stück = "Stück",
        priese = "Priese",
        gramm = "GRAM"
    }

    function showRecipe() {
        modal.show()
        console.log(dish_name)
        console.log(dish_ingredients)
    }
</script>





<div class="card" style="width: 18rem;" on:click={showRecipe}>
    <img class="card-img-top">
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
<div class="modal-infront">
    <Modal bind:this={modal}>
        <h1>{dish_name}</h1>
        <p>{dish_ingredients}</p>
        {dish_id}
    </Modal>
</div>
    

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        min-width: 25%;
        border-radius: 25px;
        margin-top: 2rem;
        z-index: auto;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card-img-top{
        border-top-right-radius: 25%;
        border-top-left-radius: 25%;
        height: 120px;
        width: 100%;
    }

    .modal-infront{
        position: absolute;
        z-index: 7;
    }
</style>
