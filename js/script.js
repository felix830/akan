
function getAkan(){
var gender = document.getElementById("gender").checked;
var username = document.getElementById("name").value;
var date = document.getElementById("date").value;
var day = new Date(date).getDay();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];


//testing if inputs are filled
//!== means not equal to
if(username && date !== null){
    //alert("you filled all of them");
    if(gender == true){
        //male
        var akanNames = ["kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"][day];
        //var akanNames = [];


    }else{
        //female
        var akanNames = ["Akosua", "Adwoa", "Abbena", "Akua", "Yaa", "Afua", "Ama"][day];
        
    }
    alert("Hello, Your Akan Name is " + akanNames + ". You Were Born On A " + weekDay);
}else{
    alert("You Must Fill All The Required Fields");
}

}