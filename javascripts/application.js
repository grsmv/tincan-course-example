var app = angular.module("tincanCource", ["ngRoute"]);

app.config (function ($routeProvider) {
    $routeProvider
    .when("/chapter-1", {
        templateUrl: "templates/chapter-1.html"
    })
    .when ("/index", {
        templateUrl: "templates/index.html"
    })
    .otherwise({ redirectTo: "/index" });
});

app.controller("CourceController", function ($scope) {
    $scope.menuDisplay = false;

    $scope.toggleMenu = function () {
        $scope.menuDisplay = ! $scope.menuDisplay;
    };

    $scope.mathJaxRedraw = function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    };
});
