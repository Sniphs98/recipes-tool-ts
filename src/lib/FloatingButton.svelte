<script lang="ts">
	import CreateRecipeDialog from "./CreateRecipeDialog.svelte";
	let modal;

</script>

<a href="#" class="float" on:click={() => modal.show()}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		fill="currentColor"
		class="bi bi-bookmark-plus-fill my-float"
		viewBox="0 0 16 16"
	>
		<path
			fill-rule="evenodd"
			d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
		/>
	</svg>
</a>

<CreateRecipeDialog bind:this={modal} />

<style>
	.float {
		position: fixed;
		width: 60px;
		height: 60px;
		bottom: 40px;
		right: 40px;
		background-color: rgb(69, 68, 110);
		color: #fff;
		border-radius: 50px;
		text-align: center;
		box-shadow: 2px 2px 3px #999;
	}

	.float:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		color: rgb(215, 226, 255);
	}

	.my-float {
		margin-top: 12px;
	}
</style>
