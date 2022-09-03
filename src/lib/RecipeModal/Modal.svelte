<script lang="ts">

import IngredientSet from "./IngredientSet.svelte";

function addComponent(){
    number_of_rendert_componetes = number_of_rendert_componetes + 1
}

let number_of_rendert_componetes = 1


</script>

<div
    class="modal fade my-float"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <input class="modal-title form-control" placeholder="Rezept Name" id="exampleModalLabel"/>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                {#each Array(number_of_rendert_componetes) as number, i}
                    <IngredientSet/>
                {/each}
                <div class="row" style="margin: 1px;">
                    <button type="button" class="btn btn-primary" on:click="{addComponent}"> + </button>
                </div>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal">Close</button
                >
                <button type="button" class="btn btn-primary"
                    >Save changes</button
                >
            </div>
        </div>
    </div>
</div>