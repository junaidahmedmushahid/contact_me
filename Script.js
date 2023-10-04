document.addEventListener('DOMContentLoaded', function() {
    

    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var container = document.querySelector('.container');
        // Slide up animation on form submission
        $(container).slideUp(2000, function() {
            container.style.display = 'none';
            var formData = new FormData(form);
            var params = new URLSearchParams(formData).toString();
            window.location.href = 'success.html?' + params;
        });
    });

});

