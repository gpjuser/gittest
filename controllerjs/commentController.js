//评论控制器
app.controller("commentController", [
  "$scope",
  function ($scope) {
    $scope.commentArr = [];
    $scope.submitComment = function (msg) {
      $scope.commentArr.push(msg);
      $scope.msg = "";
    };
    $scope.deletComment = function (index) {
      $scope.commentArr.splice(index, 1); //参数1指定索引，参数2删除个数
    };
  },
]);
