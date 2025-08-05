document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    // Validation
    if (!age || !name) {
        alert(`Please enter valid details`);
        return; // Exit the function if validation fails
    }

    // Create a promise
    const ageCheckPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });

    // Handle the promise
    ageCheckPromise
        .then(successMessage => alert(successMessage))
        .catch(errorMessage => alert(errorMessage));
});