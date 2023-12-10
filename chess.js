var loginBtn = document.getElementById('login-btn');
    var modal = document.getElementById('login-modal');
    var closeBtn = document.getElementsByClassName('close')[0];
    
    loginBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
    
      // Get input values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
    
      // Perform login validation
      if (username === 'MAHI' && password === '123456') {
        alert('Login successful!'); // Replace with your desired logic
        modal.style.display = 'none';
        // Redirect to the chess website or perform any necessary action
      } else {
        alert('Invalid username or password. Please try again.'); // Replace with your desired logic
      }
    });
    const form = document.getElementById("feedbackForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            // You can add your code here to process the form submission, such as sending the data to a server or displaying a thank you message.
            // For demonstration purposes, let's log the form data to the console.
            console.log("Form submitted!");
            console.log("Name: ", form.name.value);
            console.log("Email: ", form.email.value);
            console.log("Message: ", form.message.value);
            form.reset();
        });
        //material contact form animation
$('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})