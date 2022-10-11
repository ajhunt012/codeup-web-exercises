let externalGreeting = "Hello from external Javascript";
console.log(externalGreeting);
alert("Welcome to my Website!");
let colorChoice = prompt("What is you favorite color?");
alert("Great, " + colorChoice + " is my favorite color too!");

let dailyRate = prompt("What is the daily rate of rentals?");
let littleMermaid = prompt("How many days do you want to rent The Little Mermaid?");
let brotherBear = prompt("How many days do you want to rent Brother Bear?");
let hercules = prompt("How many days do you want to rent Hercules?");
let movieTotal = ([parseFloat(littleMermaid) + parseFloat(brotherBear) + parseFloat(hercules)] * parseFloat(dailyRate));
alert("Your total cost is $" + movieTotal);

let googleHours = prompt("How many hours did you work at Google?");
let googlePay = prompt("How much is Google paying per hour?");
let amazonHours = prompt("How many hours did you work at Amazon?");
let amazonPay = prompt("How much is Amazon paying per hour?");
let facebookHours = prompt("How many hours did you work at Facebook?");
let facebookPay = prompt("How much is Facebook paying per hour?");
let workTotal = (parseFloat(googleHours) * parseFloat(googlePay)) + (parseFloat(amazonHours) * parseFloat(amazonPay))
    + (parseFloat(facebookHours) * parseFloat(facebookPay));
alert("Your income this week is $" + workTotal);

let enrollment = confirm("If there is room in the class click ok, otherwise click cancel ");
let conflict = confirm("If there is no conflict between the class and your schedule click ok, otherwise click cancel ");
let classAnswer = enrollment && conflict
if (classAnswer === true)
    alert("You can enroll!");
else
    alert("You can't enroll, I'm so sorry.");

let offer = confirm("Is the offer still ongoing? Click ok for yes and cancel for no.");
let premiumMember = confirm("Are you currently a Premium Member? Click ok for yes and cancel for no.");
let cartItems = prompt("How many items are you buying?");
let offerAvailable = (((parseFloat(cartItems) > 2) || (premiumMember === true)) && (offer === true));
if (offerAvailable === true)
    alert("The Discount will be applied!");
else
    alert("The discount will not be applied, I'm so sorry.");
