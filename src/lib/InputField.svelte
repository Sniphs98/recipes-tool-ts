<script lang="ts">
</script>

<div class="form-group">
    <input
        type="text"
        class="form-control"
        placeholder="Name"
        id="dishName"
        tabindex="1"
        required
    />
    <label for="dishName" class="form-label">Name</label>
</div>

<style lang="scss">
    .form-group {
        margin-bottom: 1em;
        transition: all 0.3s;
        padding: 2em;
    }

    .form-label {
        font-size: 1em;
        color: #aaa;
        display: block;
        opacity: 1;
        transform: translateY(-1.25em);
        transform-origin: 0 0;
        transition: all 0.3s;
    }

    .form-control {
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 0px;
        border-color: #ccc;
        border-style: none none solid none;
        width: 100%;
        transition: all 0.5s;
        padding: 5px;
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
</style>
