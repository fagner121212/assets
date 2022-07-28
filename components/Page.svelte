<script>
    let numbersGenerated;
    let input;
    let numberOfChars;
    let params = {};

    const debug = node => {
        console.log(node.target.checked);
    }


    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z' 
    ];

    let special = [
        '@', '$', '^', '%', '&', '!', '&', '*', '(', ')', '+', '=',
        '-', '<', '>', '?', ',', '.', '/'
    ];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const getRandomChar = params => {
        let chance = random(0, 3);
        let choice;

        if (chance == 0) {
            // the char is a number
            choice = random(1, 10);
        } else if ((chance == 1) && (params.alphabet)) {
            // the char is a character
            choice = alphabet[random(0, alphabet.length)];
            choice = random(0, 1) ? choice.toLowerCase() : choice;
        } else if (params.special) {
            choice = special[random(0, special.length)];
        }

        return choice ?? getRandomChar(params);
    };

    const generate = (charNum, prefix, params) => {

        if (numbersGenerated) 
            prefix = prefix.replace(numbersGenerated, '');

        charNum = parseInt(charNum);
        let chars = Array(charNum).fill(undefined).map(_ =>getRandomChar(params));

        numbersGenerated = chars.join('');

        return prefix + numbersGenerated;
    };

</script>

<main>
    <div class="container">
        <div class="tile is-parent">
            <article class="tile is-child notification">
                <p class="title">Password Generator</p>
                
                <div class="columns is-centered">
                    <div class="column">
                        <div class="field has-addons has-addons-centered">
                        <p class="control">
                            <button type="button" class="button is-warning" on:click={() => navigator.clipboard.writeText(input.value)}>
                                Copy
                            </button>
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Prefix" id="password" bind:this={input}>
                        </p>
                        <p class="control">
                            <button type="button" class="button is-success" on:click={input.value = generate(numberOfChars.value, input.value, params)}>
                                Generate
                            </button>
                        </p>
                        </div>
                    </div>
                </div>

                <div class="columns is-multiline">
                    <div class="column is-one-third">
                       <label class="checkbox">
                            <input type="checkbox" checked disabled>
                            Numbers
                        </label> 
                       <label class="checkbox">
                            <input type="checkbox" bind:checked={params['alphabet']} />
                            Characters
                        </label> 
                       <label class="checkbox">
                            <input type="checkbox" bind:checked={params['special']} />
                            Special characters
                        </label> 
                    </div>

                    <div class="column">
                        <label class="label">
                            No. of characters
                            <input type="text" class="input is-success" bind:this={numberOfChars} placeholder="No. of characters" />
                        </label>
                    </div>

                    <!-- <div class="column"></div> -->
                </div>
            </article>
        </div>
    </div>
</main>

<style>
    :global(html, body) {
        background-color: var(--dark);
        height: 100%;
    }

    main {
        height: 100%;
    }

    .container {
        min-height: 50%;
        width: 50%;
        border-radius: 1%;
    }
</style>