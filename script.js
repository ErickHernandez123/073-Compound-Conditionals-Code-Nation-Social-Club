// set the correct username and password combination below
var correctUsername = "erhernandez";
var correctPassword = "password";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    if(username===correctUsername && password===correctPassword){
 $(".message").text("Success!");
} else {$(".message").text("failed");
}
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
 



});