<!doctype html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title></title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/node_modules/angular-percent-circle-directive/dist/percent-circle.css">
    <link rel="stylesheet" href="/assets/css/app.css">

    
    <!-- JS -->
    <script src="/node_modules/angular/angular.min.js"></script>
    <script src="/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/node_modules/angular-resource/angular-resource.min.js"></script>
    <script src="/node_modules/angular-percent-circle-directive/dist/percent-circle-directive.js" type="text/javascript"></script>

    <script src="/node_modules/angular-jwt/src/angularjwt/services/authManager.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/interceptor.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/jwt.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/jwtOptions.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/urlUtils.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/angularjwt.js"></script> 
    <script src="/assets/js/app.js"></script> 
    <script src="/assets/js/services/time.js"></script> 
    <script src="/assets/js/services/setting.js"></script> 
    <script src="/assets/js/services/login.js"></script> 
    <script src="/assets/js/services/mosque.js"></script> 
    <script src="/assets/js/services/stats.js"></script> 
    <script src="/assets/js/controllers/timeController.js"></script> 
    <script src="/assets/js/controllers/settingController.js"></script> 
    <script src="/assets/js/controllers/mosqueController.js"></script> 
    <script src="/assets/js/controllers/statsController.js"></script> 
    <script src="/assets/js/controllers/loginController.js"></script> 
    <script src="/assets/js/directives/prayer.js"></script> 
    <script src="/assets/js/directives/menu.js"></script> 
    <script src="/assets/js/directives/error.js"></script> 
    <script src="/assets/js/directives/cities.js"></script> 
    <script src="/assets/js/directives/password.js"></script> 
    <script src="/assets/js/directives/stat.js"></script> 

</head> 

<body class="container" ng-app="achieveApp">
    <menu></menu>
    <div ui-view >
    </div>
</body> 

</html>