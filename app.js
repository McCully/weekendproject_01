$(document).ready(function() {
    var array = [];
    $("#employeeinfo").on('submit' , function(event) {
        event.preventDefault();

        var values = {};
        array.push(values);
        $.each($('#employeeinfo').serializeArray() , function(i , field) {
            values[field.name] = field.value;
        });

    $("#employeeinfo").find('input[type=text]').val('');
    appendDom(values);

  });
  var employeeArray = [];
  var monthlyTotal = 0;

    function appendDom(empInfo) {
        $("#container").append('<div class="person"></div>');
        var $el = $("#container").children().last();
        $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + 'Id: ' + empInfo.employeeidnumber + ' ' + 'Title: ' + empInfo.employeejobtitle + ' ' + 'Salary: ' + empInfo.employeesalary+ '</p>');
        employeeArray.push(empInfo);
        var monthlyCost = 0;

        monthlyCost=parseFloat(employeeArray[employeeArray.length -1]["employeesalary"]) / 12;
        monthlyCost=parseFloat(monthlyCost.toFixed(2));


        monthlyTotal += parseFloat(monthlyCost.toFixed(2));


        console.log(monthlyCost);

        $('.monthlycost').append('<p class="monthlycost">Monthly Salary Cost: ' + '$ ' + monthlyCost + '</p>');
      }
    });






//   $('button').on('click' , function() {
//     var $last = $('#container').children().last();
//     $last.remove('.person');
//     array.pop();
//     monthlyCost = 0;
//     for (var i = 0; i < array.length; i++) {
//        var count =Number(array[i].employeesalary);
//        monthlyCost += count;
//        console.log(monthlyCost);
//     }
//     $('.monthlycost').append('<p class=monthlycost> Monthly Cost: ' + '$ ' + monthlyCost / 12 + '</p>')
//   });
// });




// $(document).ready(function() {
//     var array = [];
//     $('#employeeinfo').on('submit', function(event) {
//       event.preventDefault();
//
//       // initialize a new variable as an empty object
//       var values = {};
//
//       // convert the form inputs into an array
//       var fields = $('#employeeinfo').serializeArray();
//
//       // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
//       fields.forEach(function(element, index, array) {
//         // review index notation vs. dot notation on objects
//         // here, dot notation wouldn't work
//         values[element.name] = element.value;
//       });
//
//       console.log(values);
//
//       // clear out inputs
//       $('#employeeinfo').find('input[type=text]').val('');
//
//       // append to DOM
//       appendDom(values);
//     });
//      // creating empty div into #container.
//     function appendDom(empInfo) {
//       $('#container').append('<div class="person"></div>');
//       var $el = $('#container').children().last();
//
//       $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</p>');
//     }
//
//
// });
