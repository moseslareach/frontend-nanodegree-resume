
//var age = 32;
//console.log(firstname);

//$("#main").append("moseslareach" + "<br />");

//console.log(awesomethoughts);

//var mail = "moseslareach@blah.com";
//var email = 
//	mail.replace("blah", "gmail");

//console.log(mail);
//console.log(email);

//var awesomethoughts = "i am moses and i am awesome";

//var funthoughts = 
//awesomethoughts.replace("awesome", "fun");
//console.log(funthoughts);

//$("#main").append(funthoughts);


var firstName = "Moses Lareach";
var formattedname = HTMLheaderName.replace("%data%", firstName);

var myRole = "Entrepreneur";
var formattedrole = HTMLheaderRole.replace("%data%", myRole);



$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);

var skills = 
["awesome" + "<br />", "programming" + "<br />",
 "teaching" + "<br />", "js" + "<br />"];

$("#main").append(skills[0]);
$("#main").append(skills[1]);
$("#main").append(skills.length);


