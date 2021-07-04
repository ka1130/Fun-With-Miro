function addRowInput(value) {
  const row = document.createElement('div');
  row.classList.add('row');
  rowsContainer.appendChild(row);

  //create input
  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('row-input');
  input.value = value;
  row.appendChild(input);

  //create delete button
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.classList.add('delete-button');
  button.addEventListener('click', () => {
    row.remove();
  });
  row.appendChild(button);
}
