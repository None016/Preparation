const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');


const peopleContainer = document.getElementById('people-container');
const addPersonButton = document.getElementById('add-person');
let personCount = 0;

addPersonButton.addEventListener('click', () => {
  personCount++;
  
  peopleContainer.style.display = "block"
  const personContainer = document.createElement('div');
  personContainer.classList.add('person-container');
  personContainer.innerHTML = `
    <label for="name-${personCount}">Имя:</label>
    <input type="text" id="nam-${personCount}" name="name-${personCount}">
    
    <label for="surname-${personCount}">Фамилия</label>
    <input type="text" id="surname-${personCount}" name="surname-${personCount}"> 

    <label for="age-${personCount}">Возраст:</label>
    <input type="number" id="age-${personCount}" name="age-${personCount}" min="0" required>

    <label for="gender-${personCount}">Пол:</label>
    <select id="gender-${personCount}" name="gender-${personCount}">
      <option value="man">Мужской</option>
      <option value="woman">Женский</option>
      <option value="uncertain">Чехословатский</option>
    </select> <br>
    
    <button type="button" class="remove-person">Удалить</button>
  `;

  peopleContainer.appendChild(personContainer);

  const removeButton = personContainer.querySelector('.remove-person');
  removeButton.addEventListener('click', () => {
    peopleContainer.removeChild(personContainer);
  });
});

    
form.addEventListener('submit', (event) => {
      event.preventDefault();
    
      const errorSpans = document.querySelectorAll('.error');
      errorSpans.forEach(span => span.textContent = '');
      messageDiv.textContent = '';
      messageDiv.className = '';
    
      const email = document.getElementById('email').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const ageSelect = document.getElementById('ageSelect').value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('passwordConfirm').value;
      const familyPhoto = document.getElementById('familyPhoto').value;
      const consent = document.getElementById('consent').checked;
    
      let isValid = true;
    
      if (!email) {
        document.getElementById('emailError').textContent = 'Поле E-mail обязательно для заполнения';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Некорректный формат E-mail';
        isValid = false;
      }
    
      if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Поле Имя обязательно для заполнения';
        isValid = false;
      }
    
      if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Поле Фамилия обязательно для заполнения';
        isValid = false;
      }
    
      if (!age && !ageSelect) {
        document.getElementById('ageError').textContent = 'Поле Возраст обязательно для заполнения';
    isValid = false;
  } else if (age < 0 || ageSelect < 0) {
    document.getElementById('ageError').textContent = 'Возраст не может быть отрицательным';
    isValid = false;
  }

  if (!gender) {
    document.getElementById('genderError').textContent = 'Выберите пол';
    isValid = false;
  }

  if (!password) {
    document.getElementById('passwordError').textContent = 'Поле Пароль обязательно для заполнения';
    isValid = false;
  }

  if (!passwordConfirm) {
    document.getElementById('passwordConfirmError').textContent = 'Поле Повтор пароля обязательно для заполнения';
    isValid = false;
  } else if (password !== passwordConfirm) {
    document.getElementById('passwordConfirmError').textContent = 'Пароли не совпадают';
    isValid = false;
  }

  if (!familyPhoto) {
    document.getElementById('familyPhotoError').textContent = 'Загрузите семейную фотографию';
    isValid = false;
  }

  if (!consent) {
    document.getElementById('consentError').textContent = 'Необходимо согласие на обработку персональных данных';
    isValid = false;
  }

  if (isValid) {
    messageDiv.textContent = 'Регистрация прошла успешно!';
    messageDiv.className = 'success';
    form.reset();
  } else {
    messageDiv.textContent = 'Пожалуйста, исправьте ошибки в форме.';
    messageDiv.className = 'error';
  }
});

var isreg = true;
const button_reg_aut = document.getElementById("regaut");

function reg(){
  document.getElementById('add-person').style.display = "block";
  document.getElementById('people-container').style.display = "block";
  document.getElementById('aut').classList.remove('active');
  document.getElementById('reg').classList.remove('active');
  document.getElementById('reg').classList.add('active');
}

function aut(){
  document.getElementById('add-person').style.display = "none";
  document.getElementById('people-container').style.display = "none";
  document.getElementById('aut').classList.remove('active');
  document.getElementById('reg').classList.remove('active');
  document.getElementById('aut').classList.add('active');
}

