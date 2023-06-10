let form = document.getElementById('form');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let tableBody = document.getElementById('tableBody');

let data = [];

function renderTable() {
  tableBody.innerHTML = '';

  data.forEach((item, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td class="actions">
        <button class="btn btn-sm btn-info" onclick="editItem(${index})">Edit</button>
        <button  class="btn btn-sm btn-danger" onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function addItem(name, email) {
  data.push({ name, email });
  renderTable();
  resetForm();
}

function editItem(index) {
  let item = data[index];
  inputName.value = item.name;
  inputEmail.value = item.email;

  form.onsubmit = (event) => {
    event.preventDefault();
    updateItem(index, inputName.value, inputEmail.value);
  };
}

function updateItem(index, name, email) {
  data[index].name = name;
  data[index].email = email;
  renderTable();
  resetForm();
}

function deleteItem(index) {
  data.splice(index, 1);
  renderTable();
}

function resetForm() {
  inputName.value = '';
  inputEmail.value = '';

  form.onsubmit = (event) => {
    event.preventDefault();
    addItem(inputName.value, inputEmail.value);
  };
}

form.onsubmit = (event) => {
  event.preventDefault();
  addItem(inputName.value, inputEmail.value);
};

