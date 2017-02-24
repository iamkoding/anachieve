<!doctype html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title></title>

    <!-- CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <link rel="stylesheet" href="/assets/css/app.css">
    
    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.5.8/angular-resource.js"></script>

    <script src="/node_modules/angular-jwt/src/angularjwt/services/authManager.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/interceptor.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/jwt.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/jwtOptions.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/services/urlUtils.js"></script> 
    <script src="/node_modules/angular-jwt/src/angularjwt/angularjwt.js"></script> 
    <script src="/assets/js/app.js"></script> 
    <script src="/assets/js/services/time.js"></script> 
    <script src="/assets/js/services/login.js"></script> 
    <script src="/assets/js/services/mosque.js"></script> 
    <script src="/assets/js/controllers/timeController.js"></script> 
    <script src="/assets/js/controllers/mosqueController.js"></script> 
    <script src="/assets/js/controllers/loginController.js"></script> 
    <script src="/assets/js/directives/prayer.js"></script> 
</head> 

<body class="container" ng-app="achieveApp">
    <div ui-view ></div>
</body> 

</html>