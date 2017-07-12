var formValid = document.getElementById('form-validation');
formValid.addEventListener('submit', function(event){
  var uname = document.getElementById('unameInput');
  var pw = document.getElementById('pwInput');
  var cpw = document.getElementById('cpwInput');
  var em = document.getElementById('emInput');
  var cem = document.getElementById('cemInput');
  //getValue
  var unameValue = uname.value;
  var pwValue = pw.value;
  var cpwValue = cpw.value;
  var emValue = em.value;
  var cemValue = cem.value;
  //condition
  if(unameValue === '' || unameValue.length !=6){
    alert('username tidak boleh kosong atau kurang dari 6 karakter!');
    return false;
  }
  else if(pwValue === ''){
    alert('password tidak boleh kosong!');
    return false;
  }
  else if(cpwValue === ''){
    alert('password confirmation tidak boleh kosong!');
    return false;
  }
  else if(pwValue != cpwValue){
    alert('konfirmasi password tidak sama!');
    return false;
  }
  else if(emValue === ''){
    alert('email tidak boleh kosong!');
    return false;
  }
  else if(cemValue === ''){
    alert('email confirmation tidak boleh kosong!');
    return false;
  }
  else if(emValue != cemValue){
    alert('konfirmasi email tidak sama!');
    return false;
  }
  else{
    alert('Sukses Submit!');
    return true;
  }
});
