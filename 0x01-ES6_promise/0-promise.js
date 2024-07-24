// Define the prototype function
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an API call with setTimeout
        setTimeout(() => {
            // Simulate a successful API response
            const success = true;

            if (success) {
                resolve("API call successful!");
            } else {
                reject("API call failed!");
            }
        }, 2000); // Simulate a 2-second delay for the API call
    });
}

// Example usage of the getResponseFromAPI function
getResponseFromAPI()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });


