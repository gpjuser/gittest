//路由文件
app.config([
    "$routeProvider",function ($routeProvider) {
      $routeProvider
        .when("/showname", {
          templateUrl: "html/showname.html",
          controller: "showNameController"
        })
        .when("showinfo", {
          templateUrl: "html/showinfo.html",   
          controller: "showInfoController"
        })
        .otherwise({
          redirectTo: "/showname",
        });
    },
  ]);