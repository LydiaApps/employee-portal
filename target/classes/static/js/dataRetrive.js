angular.module("dataRetrive", ['ngAnimate', 'ui.bootstrap','ui.grid'])
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
                          $scope.IsVisible = false;
                          $scope.errorIsVisible = false;
           })
 
           $scope.employeeDetails = function(){
    	    $scope.empName = 'Employee ' + $scope.selectedEmployee;
    	  }
     	  $scope.getEmployeDetails = function(searchName){
     		 $scope.errorIsVisible = false;
     		 $scope.IsVisible = false;
     	    $scope.empsel="";
     	    for (var i = 0, len = $scope.employees.length; i < len; i += 1) {
     	        if ($scope.employees[i].name === searchName) {
     	        	 $scope.empsel=$scope.employees[i];
     	        	 i=$scope.employees.length;
     	        }
     	    
     	       
     	    }
     	   $http.get("http://localhost:8888/employeedetail?id="+$scope.empsel.id)
           .then(function (detail) {
        	 console.log(detail.status);
        	 $scope.empDetails=detail.data;
        	 $scope.IsVisible = true;
     			  },function(errRes){
     				 $scope.IsVisible = false;
     				 $scope.errorIsVisible = true;
     				 $scope.errorMessage = 'Request Failed';
     			  })
     			  }
            });

            