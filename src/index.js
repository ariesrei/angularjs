
require('./css/all.less');
require('angular');
//alert("Test");

angular.module('app', [])

.directive('tabs', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
          var panes = $scope.panes = [];
   
          $scope.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
          };
   
          this.addPane = function(pane) {
            if (panes.length == 0) $scope.select(pane);
            panes.push(pane);
          };
        },
        templateUrl: 'templates/tabbable.html',
        replace: true
    };
})

.directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
})

.directive('legalHoliday', function(){
    return{
        restrict: 'A',
        scope: {
            holiday: '='
        },
        templateUrl : 'templates/legal-holidays.html'
    };
})

.controller('helloCtrl',function($scope){
    $scope.hello = "Hello there!";
})

.controller('legalHolidaysCtrl', function($scope){
    $scope.legalHolidays = [
        {
            "id":82,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"New Year",
            "from":"2004-01-01 00:00:00",
            "to":"2004-01-01 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":87,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Good Friday",
            "from":"2004-04-09 00:00:00",
            "to":"2004-04-09 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":89,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Easter Monday",
            "from":"2004-04-12 00:00:00",
            "to":"2004-04-12 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":91,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Ascension Day",
            "from":"2004-05-20 00:00:00",
            "to":"2004-05-20 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":93,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Whit Monday",
            "from":"2004-05-31 00:00:00",
            "to":"2004-05-31 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":100,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Christmas",
            "from":"2004-12-25 00:00:00",
            "to":"2004-12-25 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":103,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"New Year",
            "from":"2005-01-01 00:00:00",
            "to":"2005-01-01 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":108,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Good Friday",
            "from":"2005-03-25 00:00:00",
            "to":"2005-03-25 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":109,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Easter",
            "from":"2005-03-27 00:00:00",
            "to":"2005-03-27 23:59:59",
            "country":"Switzerland",
            "state":""
         },
         {
            "id":110,
            "companyID":"Demo Gestion Salaire (Suisse) SA",
            "title":"Easter Monday",
            "from":"2005-03-28 00:00:00",
            "to":"2005-03-28 23:59:59",
            "country":"Switzerland",
            "state":""
         }
    ];
    
});