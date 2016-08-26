myApp.controller("empController" , ["$scope" , function($scope){
  console.log("employee controller up!");
  // $scope.userImput = "";
  $scope.array = [];
  // $scope.employeelastname = ""
  // $scope.employeefirstname = "";
  // $scope.employeejobtitle = "";
  // $scope.employeesalary = "";
  // $scope.employeeidnumber = "";
  $scope.subEmp = function(){
    $scope.values = {
      name: $scope.employeelastname + ', ' + $scope.employeefirstname,
      id: $scope.employeeidnumber,
      title: $scope.employeejobtitle,
      salary: $scope.employeesalary
    };
    $scope.array.push($scope.values);

    var total = 0;
    var monthlyCost = 0;
    for(var i = 0; i < $scope.array.length; i++) {
      total += parseInt($scope.array[i].salary);
      monthlyCost = total / 12;
    }
    $scope.message = monthlyCost.toFixed(2);

    console.log($scope.array.length);
    console.log($scope.array);
    console.log(total);
    console.log(monthlyCost);

  };
}]);
    // $scope.values.getownPropertyNamesforEach(function($scope.values){
    //   console.log($scope.values.salary += $scope.values.salary);
    // })
    // $scope.total = 0;
    // for(var i = 0; i <= $scope.array.length; i++){
    //   $scope.total += ($scope.array[i].salary / 12);
    //   console.log($scope.total);
    //   console.log($scope.array[i].salary);
    //   return $scope.total;
    // }
    // $scope.message = monthlyCost
