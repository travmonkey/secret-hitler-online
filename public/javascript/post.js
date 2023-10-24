function postData() {
    // Get data from the forms by their ID
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value

    // Put the data into JSON format
    const data = {
        name: name,
        age: age
    }

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(responseText => {
        // Handle the response from the server
        console.log(responseText);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}