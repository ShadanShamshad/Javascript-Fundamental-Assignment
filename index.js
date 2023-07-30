// Q!. Suppose you are building a payment checkout page and must display the final price after the discount.
// Create a simple discount calculator that takes two values from the variables - the total cost and the discount percentage  and print the discounted value.
let totalValue = 2000;
let discountPercentage = 20;
let discount = totalValue*discountPercentage/100;
let result = totalValue-discount;
console.log(" The final price after discount is " + result +".");

// Q2. You are building a simple login system. Implement the login feature that has two variables: username and password. You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login sucessful" otherwise, print "Invalid -Credentials"//

let username = "admin";
let password = 12345;

if(username == "admin" && password == 12345){
    result= console.log(" Login Successful");
}else{
    result= console.log("Invalid Credintials");
}

//Q3. You are working on a currency conversion application. Write a program that has a variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR//

let exchangerate = 82;
let inr = 850;
let conversion = inr/exchangerate;
console.log(inr + " INR is " + conversion + " USD");

// Q4.You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child", "adult", or "senior"). Write a program which calculates the price acordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

const child = 100;
const adult = 150;
const senior = 120;
let noofchild =2;
let noofadult = 1;
let noofsenior = 1;

let ticketprice = noofchild*child +noofadult* adult +noofsenior* senior;
console.log("The total ticket price is " +ticketprice);

// Q5. You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

let typeofpackage = "overnight"

switch(typeofpackage){
  case "standard": 
    console.log("Estimated delivery time might take 3-5 days");
  break;
  case "express":
    console.log("Estimated delivery time might take 1-2 days");
  break;
  case "overnight":
    console.log("would be delivered the next day");
  break;
  default:
      console.log("invalid type of package");
    break;
  };

//Q6 You are developing a form validation system. Write a program that takes user information(such as name,email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string," "Email should be a string," or "age should be a number." if any field is not proper.("Age should be a number.")
  let names = "Mithun";
  let email = "mithun.s@pw.live";
  let age = "21";

  if(typeof names == ' '){
      console.log("Name is a string.");
  }else{
    console.log("Name should be a string.");
  }

  if(typeof email == ' '){
    console.log("Email is a string.");
}else{
  console.log("Email should be a string.");
}

if(typeof age == 21){
  console.log(" Age is a number.")
}else{
console.log("Age should be a number.")
}


 // Q7 You are building a simple shopping list app. You have the items name in an array. Write a program that uses a for loop to print all the items in the shopping list array.

    let items = ['pencil', 'paper', 'eraser', 'notebooks', 'pen'];

    for(let i =0; i <= items.length-1; i++){
      let list = [];
        list=items[i];
      console.log(list);
    }
  
 //Q8 You are creating a countdown app. Implement a program that uses a while loop to count down from 10 to 1 and prints each number.
  let i = 10; 
  let n = 1;

 while(i >= n){
  console.log(i);
      i--;
 }
  //Q9 You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

  const arr = [ 1, 2 , 999 , 56 ,"Mithun", 1234 , "PW"];
  let string = ' ';
  for(let i=0; i<= arr.length-1; i++ ){
      if( typeof string == typeof arr[i]){
                string= arr[i];
                console.log("Found the First String : " + string)
                break;               
          }
      };

 // Q10. You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.
  let array = [1, 2, -3, 5, -9, -8, -7, 7];
  let positiveno = [];
  for(let i= 0; i<= array.length-1 ; i++){
      if(arr[i] > 0){
        positiveno = arr[i];
          console.log(positiveno);
      }
    };
      