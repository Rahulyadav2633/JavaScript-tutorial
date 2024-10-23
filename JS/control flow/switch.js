// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month  = 7;
switch(month) {
    case 1:
        console.log("january");
        break;
        
    case 7:
        console.log("july");
        break;

    default:
        console.log("defaut case");
        break;
}

function mybirthday(num1){
   if(num1 == 26){
    console.log(' Today is my birthday');

   }
   else{
    console.log('today is not my birthday');
   }
}
mybirthday(26);