const HIDDEN_CLASS = "hidden";
const ERROR_MSG = "Empty line";
const DELETE_CONTACT = "deleteContact";
const CONTACT_ITEM = document.getElementById("contactItem").innerHTML;

const formItemName = document.getElementById("formItemName");
const formItemSurname = document.getElementById("formItemSurname");
const formItemNumber = document.getElementById("formItemNumber");
const contactList = document.getElementById("contactList");
const errorConteiner = document.getElementById("error");

document
  .getElementById("addContactForm")
  .addEventListener("submit", onAddContactFormSubmit);
formItemName.addEventListener("input", onValidInput);
formItemSurname.addEventListener("input", onValidInput);
formItemNumber.addEventListener("input", onValidInput);
contactList.addEventListener("click", onContactItemClick);

function onAddContactFormSubmit(e) {
  e.preventDefault();
  submitForm();
}

function submitForm() {
  addContacts();
  clearAllInput();
}
function onContactItemClick(e) {
  if (e.target.classList.contains(DELETE_CONTACT)) {
    deleteContact(e.target.parentElement);
  }
}

function getValueInput(val) {
  return val.value;
}

function clearAllInput() {
  formItemName.value = "";
  formItemNumber.value = "";
  formItemSurname.value = "";
}

function addContacts(value) {
  const contactItemHtml = createContactHtml(value);
  contactList.insertAdjacentHTML("beforeend", contactItemHtml);
}

function createContactHtml() {
  const name = getValueInput(formItemName);
  const surname = getValueInput(formItemSurname);
  const numb = getValueInput(formItemNumber);

  return CONTACT_ITEM.replace("{{name}}", name)
    .replace("{{surname}}", surname)
    .replace("{{number}}", numb)
    .replace("{{delete}}", "Delete");
}

function onValidInput() {
  validNameForm(formItemName);
  validNameForm(formItemSurname);
  validNameForm(formItemNumber);
}

function validNameForm(value) {
  const check = getValueInput(value);
  const error = validValInput(check);
  if (error) showError(error);
  else hideError();
}

function validValInput(value) {
  return value === "" ? ERROR_MSG : null;
}

function showError(msg) {
  errorConteiner.textContent = msg;
  errorConteiner.classList.remove(HIDDEN_CLASS);
  addBtn.disabled = true;
}

function hideError() {
  errorConteiner.textContent = "";
  errorConteiner.classList.add(HIDDEN_CLASS);
  addBtn.disabled = false;
}

function deleteContact(el) {
  el.remove();
}
