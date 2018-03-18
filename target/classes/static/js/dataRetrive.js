angular.module("dataRetrive", ['ngAnimate', 'ui.bootstrap'])
	.controller('dataController', function($scope, $http) {
     $http.get("http://localhost:8888/employeeinfo/")
                    .success(function (data) {
                    	 $scope.orderByField = 'name';
                    	  $scope.reverseSort = false;
                    	  $scope.orderByField = 'hiredate';
                    	  $scope.reverseSort = false;
                    	  $scope.orderByField = 'salary';
                    	  $scope.reverseSort = false;
                          $scope.employees=data;
                          console.log($scope.employees);
                          $scope.IsVisible = false;
           })
 
           $scope.employeeDetails = function(){
    	    $scope.empName = 'Employee ' + $scope.selectedEmployee;
    	    console.log("employee details");
    	  }
     	  $scope.getEmployeDetails = function(searchName){
     		 $scope.IsVisible = $scope.IsVisible ? false : true;
     	     console.log($scope.IsVisible);
     	    $scope.empsel="";
     	    for (var i = 0, len = $scope.employees.length; i < len; i += 1) {
     	    	console.log(i);
     	        if ($scope.employees[i].name === searchName) {
     	        	 $scope.empsel=$scope.employees[i];
     	        	 console.log($scope.empsel);
     	        	 i=$scope.employees.length
     	        }
     	    
     	       
     	    }
     	   $http.get("http://localhost:8888/employeedetail?id="+$scope.empsel.id)
           .success(function (detail) {
        	 $scope.empDetails=detail
        	 console.log($scope.empDetails);
     			  })
     	  }
            });

            