import data from "users.json"

let results = [];

function printUsersOverAge18() {
    data.sort((a, b) => a.lastName < b.lastName ? -1 : 1)
    results = data.filter(user => user.age >= 18).slice(0, 5)
    const output = results.map(user => user.firstName).join("\n")
    document.querySelector("#results").textContent = output;
}

printUsersOverAge18();
