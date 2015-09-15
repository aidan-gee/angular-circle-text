//
//  arcText module implementing for implementing an angular version of the arctext.js jquery plguing
//  Note: this module will require arcText.jquery.js (https://github.com/codrops/Arctext) and jquery to run
//

angular.module('circularText', [])
//
// Fiter lettering
//
// Takes a string input and outputs each character as a html span element
// Essentially emulating some functionality from Lettering.js (https://github.com/davatron5000/Lettering.js)
//
.filter('lettering', function($sce) {
  return function(input) {
  	console.log('input', input);
  	if (typeof input !== 'undefined'){
  		var lettering = '';
  		var letters = input.split('');
  		if( letters.length ){
  			angular.forEach( letters, function( item, i ) {
				lettering += '<span class="char' + (i + 1) + '">' + item + '</span>';
			});
  		}
  		return $sce.trustAsHtml(lettering);
  	}
  	else return "";
  };
})

//
// directive arcText
//
// Makes use of the arcText jquery plugin to create a data-bindinded version that will work with text inputs
// see https://github.com/codrops/Arctext
//
.directive('circularText',['$filter', '$timeout', function($filter, $timeout) {
	return {
		restrict: 'E',
		template: '<h3 ng-bind-html="text | lettering"></h3>',
		scope: {
			text: '=ngModel',
			radius: '=',
      enabled: '='
		},
		link: function(scope, element, attrs){

      var initCurve = function(){
        angular.element(document).ready(function() {
          var el = $(element).find( "h3" );
          el.arctext({radius:200});
          scope.$watch('text', function(newValue, oldValue, scope) {
              el.arctext('destroy');
              el.arctext({radius:200});
          });
        });
      }

      // if enabled is used check for 
      if(angular.isDefined(attrs.enabled) && scope.enabled){
        initCurve();
      } 
      else if(angular.isUndefined(attrs.enabled)){
        initCurve();
      }
			
		}
	}
}]);