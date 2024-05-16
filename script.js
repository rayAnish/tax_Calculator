$(document).ready(function() {
  // Function to calculate tax and display result
  function calculateTax() {
      var grossIncome = parseFloat($('#grossIncome').val());
      var extraIncome = parseFloat($('#extraIncome').val());
      var age = parseInt($('#age').val());
      var deductions = parseFloat($('#deductions').val());

      console.log('Gross Income:', grossIncome);
      console.log('Extra Income:', extraIncome);
      console.log('Age:', age);
      console.log('Deductions:', deductions);

      if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(age) || isNaN(deductions)) {
          $('#result').html('<p>Please fill in all fields with valid numerical values.</p>');
          return;
      }

      var totalIncome = grossIncome + extraIncome - deductions;
      console.log('Total Income:', totalIncome);

      var taxRate = 0;
      var taxAmount = 0;

      if (totalIncome <= 800000) {
         
          console.log('Tax amount is 0 for income less than or equal to 800000');
      } else {
          if (age < 40) {
              taxRate = 0.3;
          } else if (age >= 40 && age < 60) {
              taxRate = 0.4;
          } else {
              taxRate = 0.1;
          }
          taxAmount = (totalIncome - 800000) * taxRate;
          console.log('Tax amount:', taxAmount);
      }

      $('#result').html(`<p>Tax amount: ${taxAmount.toFixed(2)}</p>`);
  }


  $('#taxForm').submit(function(e) {
      e.preventDefault();
      calculateTax(); 
  });

 
  $("#show-main").click(function() {
      $(".content").addClass("active"); 

 
  $("#close").click(function() {
      $(".content").removeClass("active"); 
  });
});


//   ----js----


var respond=document.getElementById("evaluate");
var ress_pop=document.getElementById("res-pop");
respond.addEventListener("click",function(){
    ress_pop.style.visibility="visible";

});


var response=document.getElementById("back");
var ress_pop=document.getElementById("res-pop");
response.addEventListener("click",function(){
    ress_pop.style.visibility="hidden";
   

})
var con=document.getElementById("content");
var response1=document.getElementById("evaluate");
response1.addEventListener("click",function(){
    con.style.visibility="hidden";
});
var response2=document.getElementById("back");
response2.addEventListener("click",function(){
    con.style.visibility="visible";
    
});
var response2=document.getElementById("refresh");
response2.addEventListener("click",function(){
    location.reload();
});

});
