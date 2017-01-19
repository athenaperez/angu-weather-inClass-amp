angular
	.module('anguWeathar' ['ngRoute'])
//creates a module(name, dependencies)
	.config(($routeProvider) => {
	//a callbackfunction(a function inside)
		$routeProvider
			.when('/', {
		//inject route provider into the config
				controller: 'RootCtrl',
				templateUrl: '/partials/root.html',


		})
	})

	.controller('RootCtrl', function () {
	//don't use arrow functions for controllers
		console.log(`I am a RootCtrl`)
	})
