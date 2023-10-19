
// Retrieve the input field value
document.querySelector('form').addEventListener('submit', function (event) {
    
    const inputValue = document.querySelector('input').value;

    // Regular expression pattern for alphanumeric input
    const alphanumericPattern = /^[A-Za-z0-9]+$/;

    // Check if the input value matches the pattern
    if (!alphanumericPattern.test(inputValue)) {
        // Invalid input: display error message
        document.getElementById('error').textContent = 'Input must be alphanumeric.';
        event.preventDefault(); // Prevent form from submitting
    } else {
        // Valid input: display confirmation
        alert('Input is valid.'); 
        document.querySelector('form').submit(); // Submit the form
    }
});

