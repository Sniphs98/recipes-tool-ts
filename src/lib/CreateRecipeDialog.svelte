<script lang="ts">
	import InputField from "./InputField.svelte";

	let iteams = [{ name: "test" }];

	let visible = false;

	export function show() {
		visible = true;
	}

	export function hight() {
		visible = false;
	}

	function addNewStep() {
		iteams.push({ name: "test" });
		console.log(iteams)
	}
</script>

{#if visible}
	<div class="modal-wrapper">
		<div class="modal">
			<span class="xButton" on:click={() => hight()}>&times</span>
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
			<button on:click={addNewStep}>add</button>
			{#each iteams as iteam}
				<svelte:component this={InputField} />
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-wrapper {
		background-color: rgba($color: #494949, $alpha: 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
	}

	.modal {
		background-color: white;
		max-width: 80vw;
		padding: 1rem;
		margin: 15% auto;
	}

	.xButton {
		float: right;
		cursor: pointer;
	}

	.xButton:hover {
		font-weight: bold;
	}

	.form-group {
		margin-bottom: 1em;
		transition: all 0.3s;
		padding: 2em;
		max-width: 200px;
		margin: auto;
		width: 50%;
		min-width: 200px;
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
