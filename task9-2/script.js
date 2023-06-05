let form = document.getElementById('myForm');
let tableBody = document.querySelector('#dataTable tbody');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let pincode = document.getElementById('pincode').value;
  let gender = document.getElementById('gender').value;
  let food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value).join(', ');
  let state = document.getElementById('state').value;
  let country = document.getElementById('country').value;

  let row = tableBody.insertRow();
  let cell1 = row.insertCell();
  cell1.textContent = firstName;
  let cell2 = row.insertCell();
  cell2.textContent = lastName;
  let cell3 = row.insertCell();
  cell3.textContent = address;
  let cell4 = row.insertCell();
  cell4.textContent = pincode;
  let cell5 = row.insertCell();
  cell5.textContent = gender;
  let cell6 = row.insertCell();
  cell6.textContent = food;
  let cell7 = row.insertCell();
  cell7.textContent = state;
  let cell8 = row.insertCell();
  cell8.textContent = country;

  
  form.reset();
});