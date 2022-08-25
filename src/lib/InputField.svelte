<script lang="ts">


</script>

<div class="form-group">
    <div class="container">
        <div class="ingredient-div">
            <input
                type="text"
                class="form-control"
                placeholder="Name"
                id="ingredient"
                tabindex="1"
                required
            />
            <label for="ingredient" class="form-label">Zutat</label>
        </div>
        <div class="ingredient-div" style="display: flex; flex-wrap: nowrap;">
            <div>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    id="amount"
                    tabindex="2"
                    required
                />
                <label for="amount" class="form-label">Mänge</label>
            </div>
            <div class="selector" tabindex="3">
                <select name="amount" id="units">
                    <option value="volvo">TL</option>
                    <option value="saab">ml</option>
                    <option value="mercedes">ES</option>
                </select>
            </div>
        </div>
        <div class="preparation-div" style="flex: 0 0 40%;">
            <!-- <input
                type="text"
                class="form-control"
                placeholder="Name"
                id="preparation"
                tabindex="1"
                required
            />
            <label for="preparation" class="form-label">Zubereitung</label> -->
            <label for="preparation" class="form-label-textarea"
                >Zubereitung</label
            >
            <textarea id="preparation" class="form-control" tabindex="4" />
        </div>
    </div>
</div>

<style lang="scss">


    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .selector{
        padding-left: 15px;
    }

    select{
        position: relative;
        background-color: transparent;
        font-size: 1em;
        border-radius: 0;
        border: none;
        border-bottom: 2px solid rgba(0,0,0, 0.15);
    }


    .ingredient-div {
        width: 20%;
    }


    .preparation-div {
        width: 40%;
        height: 50px;
        
    }

    .form-group {
        margin-bottom: 1em;
        transition: all 0.3s;
        padding: 1em;
    }

    .form-label {
        font-size: 1em;
        color: #aaa;
        display: block;
        opacity: 1;
        transform: translateY(-1.25em);
        transform-origin: 0 0;
        transition: all 0.3s;
        max-width: 20px;
    }

    .form-label-textarea {
        font-size: 1em;
        color: #aaa;
        display: block;
        opacity: 1;
        transform: translateY(-1.25em);
        transform-origin: 0 0;
        transition: all 0.3s;
        width: 20%;
    }

    .form-control {
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 0px;
        border-color: #ccc;
        border-style: none none solid none;
        width: 100%;
        transition: all 0.5s;
        margin-right: 10rem;
    }

    .form-control::placeholder {
        color: transparent;
    }

    .form-control:focus {
        box-shadow: none;
        outline: none;
        border-color: #24266b;
    }

    .form-control:focus + .form-label,
    .form-control:not(:placeholder-shown) + .form-label {
        transform: translateY(-2.5em) scale(0.8);
    }

    .form-group:focus-within {
        transform: scale(1.05, 1.05);
    }

    @media (max-width: 900px) {
        .ingredient-div {
            width: 45%;
            padding: 5px;
        }
        .preparation-div {
            width: 100%;
            padding: 5px;
        }
    }

    @media (max-width: 660px) {
        .ingredient-div {
            width: 100%;
        }
        .preparation-div {
            width: 100%;
            padding: 5px;
        }
    }
</style>
