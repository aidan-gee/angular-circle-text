angular.module('circularText', ['ngLettering'])
.controller('testCtrl', ['$scope', function ($scope) {
	$scope.testInput;
}])
.filter('lettering', function($sce) {
  return function(input) {
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
.filter('replaceWhitespace', function() {
  return function(input) {
  	if (typeof input !== 'undefined'){
  		return input.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;');
  	}
  	else return "";
  };
})
.directive('circularText', function($filter) {
	var replaceWhitespace = $filter('replaceWhitespace')
	return {
		restrict: 'E',
		templateUrl: '/app/components/angular-circular-text/circularText.html',
		scope: {
			text: '=ngModel',
			radius: '='
		},
		link: function(scope, element, attrs){
			var delta = (180 / Math.PI),
		        fs = parseInt(element.css('font-size'), 10),
		        ch = parseInt(element.css('line-height'), 10) || fs,
		      	txt = replaceWhitespace(scope.text),
		        letters, 
		        center;
		}
	}
});