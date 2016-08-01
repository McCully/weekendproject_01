$(document).ready(function() {
  var array = [];
  $("#employeeinfo").on('submit' , function(event) {
      event.preventDefault();

      var values = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function(element, field , array) {
        values[element.name] = element.value;
      });

      array.push(values);

      $("#employeeinfo").find('input[type=text]').val('');
        appendDom(values);
  });


  var employeeArray
  function appendDom(empInfo) {
    $("#container").append('<div class="person"></div>');
    var $el = $("#container").children().last();
    $el.append('<p>' + 'Employee: ' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + '<br>' + 'Id: ' + empInfo.employeeidnumber + '<br>' + 'Title: ' + empInfo.employeejobtitle + '<br> ' + 'Salary: ' + empInfo.employeesalary+ '</p>');
    var totalSalary = 0;
    array.forEach(function(employee, i) {
      totalSalary = totalSalary + parseInt(array[i].employeesalary);
    });
    var monthlyCost = (totalSalary / 12).toFixed(2);
    $('.monthlycost').empty();
    $('.monthlycost').append('<p class="monthlycost">Monthly Salary Cost: ' + '$ ' + monthlyCost + '</p>');
  };

  $('button').on('click' , function() {
    var $last = $('#container').children().last();
    jQuery.data( monthlycost , 'monthlyCost')
    $last.remove('.person');
    array.pop();

  });
  });
