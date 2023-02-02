const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//ADD event 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    ValidityState();

})
const isEmail= (emailval)=>{
    var atSymbol=emailval.indexof("@");
    if(atSymbol<1) return false;
    var dot= emailval.indexof(".");
    if(atSymbol.lastIndexof('.'));
    if(dot <= atSymbol + 2)
    return false;
    if(dot ===emailval.length -1) return false;
    return true;


}
//define validte
const validte = () => {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();

    const phoneval = phone.value.trim();

    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

   // validte username
   if(usernameval === ""){
    setErrorMsg(username, 'username cannot be blank');
   }
   else if(usernameval.length <= 2){

    setErrorMsg(username, 'username min 3 char');
   }
   else{
    setSuccessMsg(username)
   }

   //email validate
   if(emailval === ""){
    setErrorMsg(email, 'username cannot be blank');
   }
   else if(!isEmail(emailval)){

    setErrorMsg(emailval, 'Not a valid email');
   }
   else{
    setSuccessMsg(email)
   }


}
function setErrorMsg(input,errormsgs){

   const formcontrol = input.parentElement; 
   const small=formcontrol.querySelector('small');
   formcontrol.className="form-control error";
   small.innerText=errormsgs;
   

}