function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    let result = ''; // Placeholder for validation result
    
    // Validation logic goes here
    // Check if input starts with 'pet_' and followed by alphanumeric characters

    // === CHECK 1 LOGIC === //

    // Extracting first 4 characters form input
    const part1 = input.slice(0, 4);

    //Initialising boolean for first check
    let check1 = false;

    // Checking if 4 characters are 'pet_'
    if (part1 === "pet_") {
        check1 = true;
    }

    document.getElementById('result').innerText = result;
}


