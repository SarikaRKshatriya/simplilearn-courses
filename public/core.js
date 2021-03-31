
var bogoCourses = angular.module('bogoCourses', []);

var editId;

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.editText = '';
    $http.get('/api/courses')
        .success(function(data) {
            $scope.courses = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createCourses = function() {
        $http.post('/api/courses', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.courses = data;
                console.log("post data",data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteCourses = function(id) {
        $http.delete('/api/courses/' + id)
            .success(function(data) {
                $scope.courses = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.editClick = function(title,id){
        $scope.editText = title;
        $scope.editId = id;
        document.getElementById('myModal').style.display='block';
    }

    $scope.editCourses = function() {
        document.getElementById('myModal').style.display='none';
        $http.put('/api/courses/' + $scope.editId,{title:$scope.editText})
            .success(function(data) {
                $scope.courses = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
}