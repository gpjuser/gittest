//路由文件
app.config([
    "$routeProvider",function ($routeProvider) {
      $routeProvider
        .when("/showname", {
          templateUrl: "showname.html",
          controller: "showNameController"
        })
        .when("showinfo", {
          templateUrl: "showinfo.html",   
          controller: "showInfoController"
        })
        .otherwise({
          redirectTo: "/showname",
        });
    },
  ]);