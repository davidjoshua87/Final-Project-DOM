// SELECTING ALL TEXT ELEMENTS
var username = document.getElementById('username');
var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');
var gender = document.getElementById('gender');
var male = document.getElementById('male_radio');
var female = document.getElementById('female_radio');
var character = document.getElementById('character');
var shooter = document.getElementById('shooter_radio');
var watcher = document.getElementById('watcher_radio');
var bomber = document.getElementById('bomber_radio');
var titleGame = document.getElementById('title_welcome');
var player = document.getElementById('name_player');
var playInstrucsi = document.getElementById('play_instrucsi');
var characterPlayer = document.getElementById('character_player');
var pictureProfile = document.getElementById('picture_profile');
var dayName = document.getElementById('day_name');
var cityTarget = document.getElementById('city_target');
var yearAssault = document.getElementById('year_assault');
var yearEnding = document.getElementById('year_ending');
var youWin = document.getElementById('text_win');
var youLose = document.getElementById('text_lose');
var tombolRun = document.getElementById('tombol_run');
var tombol = document.getElementById('tombol_process');

// SELECTING ALL ERROR DISPLAY ELEMENTS
var username_error = document.getElementById('username_error');
var birthday_error = document.getElementById('birthday_error');
var gender_error = document.getElementById('gender_error');
var character_error = document.getElementById('character_error');

// SELECTING ALL ELEMENTS DIV
var username_div = document.getElementById('username_div');
var birthday_div = document.getElementById('birthday_div');
var gender_div = document.getElementById('gender_div');
var container_div = document.getElementById('container_div');

// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', usernameVerify, true);
date.addEventListener('blur', dateVerify, true);
month.addEventListener('blur', monthVerify, true);
year.addEventListener('blur', yearVerify, true);
tombolRun.addEventListener('click', choseGender, true);
tombolRun.addEventListener('click', move, true);
tombolRun.addEventListener('click', namePlayer, true);
tombolRun.addEventListener('click', pictureChange, true);
tombolRun.addEventListener('click', birthdayDateSet, true);
tombolRun.addEventListener('click', nameCityTarget, true);
tombolRun.addEventListener('click', calcutationYear, true);
tombolRun.addEventListener('click', attacking, true);
tombolRun.addEventListener('click', resetForm);

// validation function
function validate() {
  // validate username
  var letters = /[A-Za-z]+$/;

  if (username.value == '') {
    username.style.border = '1px solid red';
    username_div.style.color = 'red';
    username_error.textContent = 'Username is required';
    username.focus();
    return false;
  }

  if (username.value.length < 3) {
    username.style.border = '1px solid red';
    username_div.style.color = 'red';
    username_error.textContent = 'Username required less than 3 letters';
    username.focus();
    return false;
  }

  if (username.value.length > 15) {
    username.style.border = '1px solid red';
    username_div.style.color = 'red';
    username_error.textContent = 'Username required more than 15 letters';
    username.focus();
    return false;
  }

  if (!username.value.match(letters)) {
    username.style.border = '1px solid red';
    username_div.style.color = 'red';
    username_error.textContent = 'The Username required is a letter';
    username.focus();
    return false;
  }

  // validate date
  if (date.value == '') {
    date.style.border = '1px solid red';
    birthday_div.style.color = 'red';
    birthday_error.textContent = 'Birthday date is required';
    date.focus();
    return false;
  }

  // validate month
  if (month.value == '') {
    month.style.border = '1px solid red';
    birthday_div.style.color = 'red';
    birthday_error.textContent = 'Birthday month is required';
    month.focus();
    return false;
  }

  // validate year
  if (year.value == '') {
    year.style.border = '1px solid red';
    birthday_div.style.color = 'red';
    birthday_error.textContent = 'Birthday year is required';
    year.focus();
    return false;
  }

  // validate gender
  if (male.checked == false && female.checked == false) {
    male.style.border = '1px solid red';
    female.style.border = '1px solid red';
    gender_div.style.color = 'red';
    gender_error.textContent = 'Gender is required, you must select between two';
    male.focus();
    female.focus();
    return false;
  }
  // validate character
  if (shooter.checked == false && watcher.checked == false && bomber.checked == false) {
    shooter.style.border = '1px solid red';
    watcher.style.border = '1px solid red';
    bomber.style.border = '1px solid red';
    character_div.style.color = 'red';
    character_error.textContent = 'Character is required, you must select between three';
    shooter.focus();
    watcher.focus();
    bomber.focus();
    return false;
  }
}

// validation function username true
function usernameVerify() {
  if (username.value !== '' || username.value.length > 3 || username.value.length < 15 || username.value.match(letters)) {
    username.style.border = '1px solid #5e6e66';
    username_div.style.color = '#5e6e66';
    username_error.innerHTML = '';
    var passName = username.value.charAt(0).toUpperCase() + username.value.slice(1);
    username.value = passName;
    return true;
  }
}

// validation function date true
function dateVerify() {
  if (date.value !== '') {
    date.style.border = '1px solid #5e6e66';
    birthday_div.style.color = '#5e6e66';
    birthday_error.innerHTML = '';
    var passDate = date.value.toString();
    date.value = passDate;
    return true;
  }
}

// validation function month true
function monthVerify() {
  if (month.value !== '') {
    month.style.border = '1px solid #5e6e66';
    birthday_div.style.color = '#5e6e66';
    birthday_error.innerHTML = '';
    var passMonth = month.value.toString();
    month.value = passMonth;
    return true;
  }
}

// validation function year true
function yearVerify() {
  if (year.value !== '') {
    year.style.border = '1px solid #5e6e66';
    birthday_div.style.color = '#5e6e66';
    birthday_error.innerHTML = '';
    var passYear = year.value.toString();
    year.value = passYear;
    return true;
  }
}

// validation function gender true
function genderVerify() {
  if (male.checked !== false || female.checked !== false) {
    male.style.border = '1px solid #5e6e66';
    female.style.border = '1px solid #5e6e66';
    gender_div.style.color = '#5e6e66';
    gender_error.innerHTML = '';
    return true;
  }
}

// validation function character true
function characterVerify() {
  if (shooter.checked !== false || watcher.checked !== false || bomber.checked !== false) {
    shooter.style.border = '1px solid #5e6e66';
    watcher.style.border = '1px solid #5e6e66';
    bomber.style.border = '1px solid #5e6e66';
    character_div.style.color = '#5e6e66';
    character_error.innerHTML = '';
    return true;
  }
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function namePlayer() {
  var isTrue = usernameVerify();
  if (isTrue === true) {
    player.innerHTML = 'Your Name: ' + username.value;
  }
  return true;
}

function choseGender() {
  if (male.checked !== false) {
    titleGame.innerHTML = 'Welcome in The Games.... Master';
  } else if (female.checked !== false) {
    titleGame.innerHTML = 'Welcome in The Games.... Madam';
  }
}

function pictureChange() {
  var charac = 'Character:';
  if (shooter.checked !== false) {
    pictureProfile.src = 's1.jpg';
    characterPlayer.innerHTML = charac + ' Shooter';
  } else if (watcher.checked !== false) {
    pictureProfile.src = 'w1.jpg';
    characterPlayer.innerHTML = charac + ' Watcher';
  } else if (bomber.checked !== false) {
    pictureProfile.src = 'b1.jpg';
    characterPlayer.innerHTML = charac + ' Bomber';
  }
}

function birthdayDateSet() {
  dateSet = month.value + '-' + date.value + '-' + year.value;
  var arr = new Array(6);
  arr[0] = 'Sunday';
  arr[1] = 'Monday';
  arr[2] = 'Tuesday';
  arr[3] = 'Wednesday';
  arr[4] = 'Thursday';
  arr[5] = 'Friday';
  arr[6] = 'Saturday';
  if (date.value !== '') {
    var birthDay = new Date(dateSet);
    var dayNameSet = birthDay.getDay();
    dayName.innerHTML = 'Your Birthday is ' + arr[dayNameSet];
  }
}

function nameCityTarget() {
  var namaKota = Number(month.value);
    switch (namaKota) {
      case 1:
        namaKota = 'Bravoss';
        break;
      case 2:
        namaKota = 'Ashaai';
        break;
      case 3:
        namaKota = 'KingTower';
        break;
      case 4:
        namaKota = 'OldValeria';
        break;
      case 5:
        namaKota = 'Volantis';
        break;
      case 6:
        namaKota = 'Qart';
        break;
      case 7:
        namaKota = 'Mereem';
        break;
      case 8:
        namaKota = 'Chroyan';
        break;
      case 9:
        namaKota = 'GultThown';
        break;
      case 10:
        namaKota = 'Sathar';
        break;
      case 11:
        namaKota = 'Penthos';
        break;
      case 12:
        namaKota = 'OldTown';
        break;
      case 0:
        namaKota = 'Not Listed';
        break;
    }
  cityTarget.innerHTML = 'The Target of The Enemy City is ' + namaKota;
}

function calcutationYear() {
  if (year.value === '') {
    return 'Submit Your Birthday';
  } else {
    var tahun = year.value;
    var tahunLahir = Number(tahun);
    var input2 = tahunLahir;
    var tahunDimulai = (input2 + Number(17));
    yearAssault.innerHTML = 'The Battle Will Begin In The Year ' + tahunDimulai;
    var input3 = tahunDimulai;
    var date = new Date();
    var years = date.getFullYear();
    var pertarungan = ((Number(years) - input2) / 4);
    pertarungan = parseInt(pertarungan);
    var tahunPertarungan = years + pertarungan;
    var tahunSet = tahunPertarungan - input3;
    var tahunSelesai = Math.abs(tahunSet);
    yearEnding.innerHTML = 'The Battle Will Be Finished For ' + tahunSelesai + ' Years';
  }
}

function attacking() {
  if (year.value === '') {
    return 'Submit Your Birthday';
  } else {
    var tahun = year.value;
    var tahunLahir = Number(tahun);
    var input2 = tahunLahir;
    var tahunDimulai = (input2 + Number(17));
    var input3 = tahunDimulai;
    var date = new Date();
    var years = date.getFullYear();
    var pertarungan = ((Number(years) - input2) / 4);
    pertarungan = parseInt(pertarungan);
    var tahunPertarungan = years + pertarungan;
    var tahunSet = tahunPertarungan - input3;
    var tahunSelesai = Math.abs(tahunSet);

    var darahPrajurit = tahunLahir * (Math.random());
    var darahMusuh = tahunLahir * (Math.random());
    var prajuritMusuh = Math.floor(Math.pow(100, Math.random()));

    for (var i = 0; i <= tahunDimulai; i++) {
      if (i % tahunSelesai === 0) {
        //console.log(username.value + ' ' + 'Attacking The City ' + namaKota1 + ' With The Guns');
        darahMusuh = darahMusuh - tahunSelesai;
      } else if (i % prajuritMusuh === 0) {
        //console.log('Enemy Shooting' + ' ' + username.value);
        darahPrajurit = darahPrajurit - prajuritMusuh;
      } else if (i % tahunSelesai === 0 && i % jenisMusuh === 0) {
        //console.log('Warrior and Foe Mutual');
        darahMusuh = darahMusuh + tahunSelesai;
        darahPrajurit = darahPrajurit + jenisMusuh;
      }
    }
    if (darahPrajurit > darahMusuh) {
      youWin.innerHTML = 'Congratulations, ' + ' ' + username.value + ' Can Destroy The City Target, This is Your Victory Day';
    } else if (darahPrajurit < darahMusuh) {
      youWin.innerHTML = 'What a pity!, ' + ' ' + username.value + ' Failure to Destroy The City Target, Try Again Another Day';
    }
  }
}

function titlePlay() {
  playInstrucsi.innerHTML = 'Player Instructions:';
}

// validation function reset form
function resetForm() {
  document.getElementById('validate_form').reset();
}
