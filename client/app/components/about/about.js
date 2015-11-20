import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
	'ui.router',
	'ct.ui.router.extras',
	'ct.ui.router.extras.sticky',
	'ct.ui.router.extras.dsr'
])
.run(($state, $rootScope)=>{
	$rootScope.$state = $state;
})
.config(($stateProvider, $stickyStateProvider)=>{
	$stateProvider
		.state('about', {
			url: '/about',
			template: '<about></about>'
		});
		
	$stateProvider
		.state('about.account', {
			url: '/account',
			sticky: true,
			//dsr: true,
			views: {
				'account': {
					templateUrl: 'account.html'
				}
			}
		});
    
	$stateProvider
		.state('about.account.stuff', {
			url: '/stuff',
			template: "<h3>Here's my stuff:</h3><ul><li>stuff 1</li><li>stuff 2</li><li>stuff 3</li></ul>"
		});

	$stateProvider
		.state('about.account.things', {
			url: '/things',
			template: "<h3>Here are my things:</h3><ul><li>thing a</li><li>thing b</li><li>thing c</li></ul>"
		});
    
	$stateProvider
		.state('about.survey', {
			url: '/survey',
			sticky: true,
			views: {
				'survey': {
					templateUrl: 'survey.html'
				}
			}
		});
		
	$stickyStateProvider.enableDebug(true);
})
.directive('about', aboutComponent);

export default aboutModule;