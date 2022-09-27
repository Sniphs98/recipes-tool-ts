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
        gramm = "GRAM"
    }

    function showRecipe() {
        
        console.log(dish_ingredients)

        // var modalWraper = null;
        // const shwoModal = () => {
        //     if(modalWraper !== null){
        //         modalWraper.remove();
        //     }

        //     modalWraper.innerHTLM = `
        //     <div class="modal" tabindex="-1">
        //         <div class="modal-dialog">
        //             <div class="modal-content">
        //             <div class="modal-header">
        //                 <h5 class="modal-title">Modal title</h5>
        //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div class="modal-body">
        //                 <p>Modal body text goes here.</p>
        //             </div>
        //             <div class="modal-footer">
        //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button type="button" class="btn btn-primary">Save changes</button>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        //     `;
        //     document.body.append(modalWraper)
        //     var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
        //     modal.show()
        // }
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

    .card-img-top{
        height: 120px;
        width: 100%;
    }
</style>
