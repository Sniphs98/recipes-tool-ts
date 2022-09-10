<script lang="ts">

    export let data;

</script>

<div
    class="modal-display fade my-float"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <input
                    class="modal-title form-control"
                    placeholder="Rezept Name"
                    id="exampleModalLabel"
                />
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal-display"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">


            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal-display">Close</button
                >
            </div>
        </div>
    </div>
</div>