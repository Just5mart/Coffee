function setActive() {

  var types = document.querySelectorAll('.type');

  // Loop through each element and toggle the 'active' class
  types.forEach(function(type) {
    type.addEventListener('click', function() {
      // Remove 'active' class from all elements
      types.forEach(function(t) {
        t.classList.remove('active');
      });

      // Add 'active' class to the clicked element
      this.classList.add('active');
    });
  });
}

