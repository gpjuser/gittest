app.controller('writepageController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.writepageTile='输入内容页面';
    $scope.mail='';
    $scope.saveToDrafts=function(mail){
        console.log(mail);
        $rootScope.mailG=mail
    }
}]) 