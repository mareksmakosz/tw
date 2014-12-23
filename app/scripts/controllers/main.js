'use strict';

/**
 * @ngdoc function
 * @name twAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twAppApp
 */
angular.module('twAppApp')
  .controller('MainCtrl', function ($scope, Currencies) {
  	$scope.currencies = Currencies.getAll().currencies;
    // Currencies.getAll()
    // .success(function(data){
    //   $scope.currencies = data;
    // });

    $scope.youPay = 1000;
    $scope.youPayCurrency = {};
    $scope.youGet = 0;
    $scope.youGetCurrency = {};

    $scope.calcFromTo = function(){
      var rate = Currencies.getRate($scope.youPayCurrency, $scope.youGetCurrency).bankRate;
      $scope.youGet = ($scope.youPay * rate).toFixed(2);
    };
    $scope.calcToFrom = function(){
      var rate = Currencies.getRate($scope.youPayCurrency, $scope.youGetCurrency).bankRate;
      $scope.youPay = ($scope.youGet / rate).toFixed(2);
    };

    $scope.calcFromTo();
});