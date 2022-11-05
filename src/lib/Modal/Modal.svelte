
<script lang="ts">
    let shown = false;
    
    export function show(){
        shown = true;
    }
    export function hight(){
        shown = false;
    }
</script>

    {#if shown}
        <div class="modal-wrapper">
            <div class="modal_desig">
                <span class="close" on:click={hight}>&times</span>
                <slot/>
            </div>
        </div>
    {/if}

    <style>
        .modal-wrapper{
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .modal_desig{
            border-radius: 25px;
            position: absolute;
            width: 80%;
            min-width: 20;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            max-width: 80%;
            padding: 1rem;
            margin: 15%,auto;
        }
    
        .close{
            float: right;
            cursor: pointer;
            margin-right: 5px;
        }

    </style>    