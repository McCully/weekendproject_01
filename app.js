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
  var totalMonthly = 0;

    function appendDom(empInfo) {
        $("#container").append('<div class="person"></div>');
        var $el = $("#container").children().last();
        $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + 'Id: ' + empInfo.employeeidnumber + ' ' + 'Title: ' + empInfo.employeejobtitle + ' ' + 'Salary: ' + empInfo.employeesalary+ '</p>');
        array.employeesalary = parseInt(array.employeesalary);



        monthlyCost=parseFloat(empInfo.employeesalary) / 12;
        console.log(monthlyCost);
        totalMonthly = totalMonthly + monthlyCost;


        // monthlyTotal += parseFloat(monthlyCost.toFixed(2));
        // $('monthlyCost').empty();
        console.log(monthlyCost);

        $('.monthlycost').append('<p class="monthlycost">Monthly Salary Cost: ' + '$ ' + totalMonthly + '</p>');
      }

    $('button').on('click' , function() {
      var $last = $('#container').children().last();
      $last.remove('.person');
      array.pop();
      monthlyCost = 0;
      for (var i = 0; i < array.length; i++) {
        var count =Number(array[i].employeesalary);
        monthlyCost += count;
       console.log(monthlyCost);
     }
  });
});
