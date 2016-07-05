'use strict';

angular.module('mainApp')
  .config(['$stateProvider' ,'$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      //
      // Now set up the states
      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'app/views/base.html'
        })
        .state('app.home', {
          url: "/",
          templateUrl: 'app/views/home.html',
          parent: 'app'
        })
        .state('/admin/config/', {
          url: "/config-view",
          template: '<config-view></config-view>'
        })
        .state('state2', {
          url: "/state2",
          templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
          url: "/list",
          templateUrl: "partials/state2.list.html",
          controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
          }
        });
    }
  ]);
