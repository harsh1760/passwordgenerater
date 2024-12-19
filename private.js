const passbox=document.getElementById("Password"); // out id here call
var hii=document.getElementById("prakash");  // function here cal
hii.addEventListener("click",createPassword); 
const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$^&*()~{}[]?/;:'|\/=";

const allchars=uppercase+lowercase+number+symbol;

function createPassword(){
 
    let password="";
     
    password += Math.floor(Math.random() * uppercase.length);  //uppercase
    password += Math.floor(Math.random() * lowercase.length); //lowercase
    password += Math.floor(Math.random() * number.length); //number
    password += Math.floor(Math.random() * symbol.length);//symbol

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passbox.value = password;

}


function copypasswords()
{
    passbox.select();
  // document.execCommand("copy");
}