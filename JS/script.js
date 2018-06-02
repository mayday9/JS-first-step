var fio, sex, age, e_mail, result=false;


while(result==false){
    fio = prompt("Введите фамилию, имя, отчество",);
    sex = prompt("Введите ваш пол",);
    age = parseInt(prompt("Введите ваш возраст",));
    e_mail = prompt("Введите ваш e-mail",);


    result=confirm("Ваше фио: "+fio+".\n"+"Ваш пол: "+sex+".\n"+"Ваш возраст: "+age+".\n"+"Ваш e-mail: "+e_mail+".\n"+"Все верно?")
}
alert("Спасибо за инфо!")



