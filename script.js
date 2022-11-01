// /* ___________________Yosh__________________________________ */

// var num1 = +prompt('Yoshingizni raqamda kiriting: ')
// if (num1 > 0 && num1<=18) {alert('San hali yoshsan. Uqishing kerak')}
// else if (num1 > 18 && num1<=50) {alert('Siz ishlashingiz kerak')}
// else if (num1 > 50 && num1<=59) {alert('Siz choyhonaga boring')}
// else if (num1 > 59 && num1<=150) {alert('Siz tayyorgarlik koring')}
// else {(!isNaN(num1)) 
//     alert('Siz yoshingizni raqamda kiritmadingiz!!!')}

// /* ____________________Soat_________________________________ */

// var num1 = +prompt('Vaqtni kiriting: ')
// if (num1 == 0) {alert('Tungi soat: 12')}
// else if (num1 >= 1 && num1 <= 3) {alert('Tungi soat: ' + num1)}
// else if (num1 > 3 && num1 <= 8) {alert('Tonggi soat: ' + num1)}
// else if (num1 > 8 && num1 <= 12) {alert('Ertalabki soat: ' + num1)}
// else if (num1 > 12 && num1 <= 18) {alert('Kunduzgi soat: ' + (num1 - 12))}
// else if (num1 > 18 && num1 <= 21) {alert('Kechki soat: ' + (num1 - 12))}
// else if (num1 > 21 && num1 <= 24) {alert('Tungi soat: ' + (num1 - 12))}
// else if(isNaN(num1)) {alert('Notugri kiritdingiz!!!')}
// else {alert('Nimadir notugri kiritdingiz!!!')}



// /* ____________________Urta son topish_______________________ */

// var num1 = +prompt('Son kiriting: ')
// var num2 = +prompt('Yana son kiriting: ')
// var num3 = +prompt('Va yana son kiriting: ')
// if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {alert('Orta son: ' + num1)}
// else if ((num1 < num2 && num2 < num3) || (num3 < num2 && num2 < num1)) {alert('Orta son: ' + num2)}
// else if ((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1)) {alert('Orta son: ' + num3)}

// else { if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {alert('Siz umuman son kiritmadingiz!!!')}
// else if (isNaN(num1)) {alert('Son emas!')}
// else if (isNaN(num2)){alert('Son emas!')}
// else{alert('Son emas!')}}


/* _______________________________Daraja_________________________ */

do{
    var son= +prompt('Son kiriting: ')
}
while
    (son < 0 || isNaN(son)==true)
    var daraja= +prompt('Daraja kiriting: ')
    daraja = !isNaN(daraja) && daraja>0 ? daraja : daraja=2
    let natija = 1 

for(let i = 1; i <= daraja; i++){
    natija = natija * son}

alert(natija)
















