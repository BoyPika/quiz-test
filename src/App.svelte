<script type="ts">
    let a = 1
    let b = 1
    let c = 1
    let result = null

    async function doPost () {
        const res = await fetch('https://answerchecker.fly.dev/alg2', {
            method: 'POST',
            body: JSON.stringify({a, b, c}),
        })
        const json = await res.json()
        result = JSON.stringify(json);
    }
</script>

<h1>Choose Which Practice Test You Want to Take</h1>
<a href="algebra2/"><button>Algebra 2</button></a>
<a href="chemistry/"><button>Chemistry</button></a><br />

<button type="button" on:click={doPost}>
    Post it.
</button>
<p>
    Result:
</p>
<pre>
{result}
</pre>