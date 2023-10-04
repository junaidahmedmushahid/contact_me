$(".container").hide();
$(".container").fadeIn(1000);

document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var userDetailsDiv = document.getElementById("user-details");

  var name = urlParams.get("name");
  var email = urlParams.get("email");
  var linkedin = urlParams.get("linkedin");
  var profession = urlParams.get("profession");
  var message = urlParams.get("message");

  userDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>LinkedIn ID:</strong> ${linkedin}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
});
if (window.location.pathname.includes('success.html')) {
  document.querySelector('.back-btn').addEventListener('click', function(e) {
      e.preventDefault();
      $('.container').slideUp(1500, function() {  
          window.location.href = 'index.html'; 
      });
  });
}