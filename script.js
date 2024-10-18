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


    // === CHECK 2 LOGIC === //

    // Extracting next 4 character from input
    const part2 = input.slice(4, 8);

    //Initialising boolean for second check
    let check2 = false;

    // Checking if 4 characters are alphanumeric characters
    const yearAsInteger = parseInt(part2);

    if (isNaN(yearAsInteger) === false) {
        check2 = true;
    }


    // === CHECK 3 LOGIC === //

    // Extracting the rest of the input
    const part3 = input.slice(8);

    //Initialising boolean for third check
    let check3 = false;

    // Checking if the rest of the inputs length is greater than 0
    if (part3.length > 0) {
        check3 = true;
    }


    // === Last checks if all three checks are true. Set result to 'Valid' otherwise sets it to 'Invalid' === //

    if (check1 && check2 && check3) {
        result = "Valid Syntax 🟢";
    } else {
        result = "Invalid Syntax 🔴";
    }

    document.getElementById('result').innerHTML = result;
}


