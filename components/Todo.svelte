<script>
    import { fade } from 'svelte/transition'
    let tasks = [];

    const gatherTask = () => {
        let taskName = prompt('Name');
        let date = prompt('Date');

        tasks = [...tasks, { name: taskName, dat: date }];
    };
</script>

<div class="columns is-centered">
    <div class="column is-3">
        <table class="table is-fullwidth">
            <thead>
                <th>No.</th>
                <th>Task</th>
                <th>Due date</th>
            </thead>
            <tbody>
                {#each tasks as cval, i}
                    <tr>
                        <td>{i + 1}</td>
                        <td>{cval.name}</td>
                        <td>{cval.dat}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <button on:click={gatherTask} class="button is-primary is-fullwidth" type="button">+</button>
    </div>
</div>