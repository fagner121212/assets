 <script>
	const handleNumberClick = (event) => {
		let inputField = document.getElementById('calculus');
		inputField.value += event.target.innerHTML;
	};

	const execute = () => {
		let content = document.getElementById('calculus');
		content.value = eval(content.value);
	};

	let numpad = [
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
	];

	let teclasControle = ['*', '+', '-', '/'];
</script>

<div class="container">
	<div class="columns is-centered">
		<div class="column is-one-fifth calc">
			<input class="input is-link" disabled id="calculus" />

			<div class="columns is-multiline">
				{#each numpad as cval, i}
					<div class="column">
						{#each cval as kval, j}
							<button class="button" type="button" on:click={handleNumberClick}>{kval}</button>
						{/each}
					</div>
					{#if i + 1 == numpad.length}
						<div class="columns" style="margin-bottom: 0; padding-bottom: 0px">
							<button style="margin-left: -5px"class="button" type="button" on:click={() => { document.getElementById('calculus').value = '' }}>C</button>
							{#each teclasControle as kval, j}
								<button style="margin-left: 5px" class="button" type="button" on:click={handleNumberClick}>{kval}</button>
							{/each}
						</div>
						<button class="button is-fullwidth is-primary" type="button" on:click={execute}>=</button>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>