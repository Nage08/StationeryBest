function firmbutt() {
    user = document.getElementById("name").value;
    
   hihi = alert('Thank you for purchasing' + ' '  + user);

    if (confirm('Proceed to the delivery information')) {
        window.location.href = "confirm.html"; 
    }
  }