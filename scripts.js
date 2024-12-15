async function fetchDogData() {
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);

        let data = await response.json();
        displayData('Dog API', `<img src="${data.message}" alt="Dog Image">`);
    } catch (error) {
        console.error('Fetch error for Dog API:', error);
        displayError('Dog API', 'Could not fetch the dog image. Please try again later.');
    }
}


// Function to display fetched data on the webpage
function displayData(apiName, content) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry">
            <h2>${apiName}</h2>
            ${content}
        </div>
    `;
}

// Function to display error message
function displayError(apiName, errorMessage) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry error">
            <h2>Error from ${apiName}</h2>
            <p>${errorMessage}</p>
        </div>
    `;
}

fetchDogData();