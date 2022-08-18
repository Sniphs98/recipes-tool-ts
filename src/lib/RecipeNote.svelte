<script lang="ts">
    
    let dish_name = 'Test Greicht'

    enum Unit {
        ml = 'ml',
        tl = 'TL',
        // TABLESPOON = 'Esslöffel', so sollte der auf bau des Enums sein
        schuss = 'Schuss',
        stück = 'Stück',
        priese = 'Priese'
    }

    let ingredients = [
        {amount: '2', unit_of_measurement: Unit.stück, name: 'Zwiebeln', preparation:''},
        {amount: '200', unit_of_measurement: Unit.ml, name: 'Milch', preparation:''},
        {amount: '200', unit_of_measurement: Unit.priese ,name: 'Zucker', preparation:''},
        {amount: '200', unit_of_measurement: Unit.ml, name: 'Wasser', preparation:''},
        {amount: '200', unit_of_measurement: Unit.priese ,name: 'Petersieleie', preparation:''},
        {amount: '200', unit_of_measurement: Unit.stück ,name: 'Chilli', preparation:''}
    ]



</script>

<div class="card">
    <div class="container">
    <h2>
        <b>{dish_name}</b>
    </h2> 
    {#each ingredients as ingredient}
        <li>{ingredient.name} {ingredient.amount} {ingredient.unit_of_measurement}</li>
    {/each}

    </div>
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        min-width: 25%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>