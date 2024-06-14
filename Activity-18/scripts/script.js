document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    
    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username should be at least 5 characters long and contain only letters and numbers
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Simple email pattern check
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); // Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters
    var phoneValid = /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phone); // Phone number should match the format +1 (XXX) XXX-XXXX

    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';

    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Please type again. The phone number is not vaild';

    var formValid = usernameValid && emailValid && passwordValid && phoneValid;

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').style.display = 'block';
        // Here you can also handle the form submission, e.g. send data to the server
    } else {
        document.getElementById('registrationFeedback').textContent = '';
        document.getElementById('registrationFeedback').style.display = 'none';
    }
});

document.getElementById('phone').addEventListener('input', function(event) {
    var input = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    if (input.length > 0) {
        input = '+1 (' + input;
        if (input.length > 7) {
            input = input.slice(0, 7) + ') ' + input.slice(7);
        }
        if (input.length > 12) {
            input = input.slice(0, 12) + '-' + input.slice(12, 16);
        }
    }
    event.target.value = input;
});

document.getElementById('phone').value = '+1 (___) ___-____';