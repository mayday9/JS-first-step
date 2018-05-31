var fio, sex, age, e_mail;

do {
    fio = prompt("Введите фамилию, имя, отчество",);
    sex = prompt("Введите ваш пол",);
    age = parseInt(prompt("Введите ваш возраст",));
    e_mail = prompt("Введите ваш e-mail",);
}

while(confirm(("Ваше фио: "+fio+", "+"Ваш пол: "+sex+", "+"Ваш возраст: "+age+", "+"Ваш e-mail: "+e_mail+"."), "Все верно?" ))
      alert("Спасибо за инфо!")



