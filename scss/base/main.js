const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('formAlert');



const setErrorFor = (input, message) =>{
  const formGroup = input.parentElement;
  formGroup.className = 'formGroup error';
  errorMsg.innerText = message;
}
const setSuccessFor = (input) => {
  const formGroup = input.parentElement;
  formGroup.className = 'formGroup';
  input.value= '';
}
const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


const checkInput = (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();

  if(!emailValue) {
    setErrorFor(email, 'Please, Email is required');
  } else if(!isEmail(emailValue)){
      setErrorFor(email, 'Oops! Please enter a valid email');
    } else{
      setSuccessFor(email);
    }

}

form.addEventListener('submit', checkInput)