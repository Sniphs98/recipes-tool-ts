<script lang="ts">
    import Modal from "./RecipeModal/Modal.svelte"
</script>

<!-- Button trigger modal -->
<a href="#" class="float" data-bs-toggle="modal" data-bs-target="#recipeModal">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bookmark-plus my-float"
        viewBox="0 0 16 16"
    >
        <path
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
        />
        <path
            d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"
        />
    </svg>
</a>

<!-- Modal -->
<Modal/>

<style lang="scss">
    .float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: rgb(135, 107, 204);
        color: #fff;
        border-radius: 50px;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
    }

    .float:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .my-float {
        margin-top: 22px;
    }
</style>
