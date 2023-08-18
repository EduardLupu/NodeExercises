async function main() {
    for (let i = 2; i < process.argv.length; i++) {
        const url = process.argv[i];
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
    }
}

main();