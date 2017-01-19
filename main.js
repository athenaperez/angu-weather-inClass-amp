angular
	.module('anguWeathar', ['ngRoute'])
//creates a module(name, dependencies)
	.config(($routeProvider) => {
	//a callbackfunction(a function inside)
		$routeProvider
			.when('/', {
		//inject route provider into the config
				controller: 'RootCtrl',
				templateUrl: '/partials/root.html',
		})
			.when('/weather/:zipcode', {
				controller: 'WeatherCtrl',
				templateUrl: '/partials/weather.html',
			})
	})


// _____________________________
	.controller('RootCtrl', function ($scope, $location) {
	//don't use arrow functions for controllers
		console.log(`I am a RootCtrl`)
		$scope.gotoWeather = () => {
			//change the url
			// vanilla js version --> location.href = `/#!/weather/${$scope.zip}`
			$location.url(`/weather/${$scope.zip}`)
		}
	})

	.controller('WeatherCtrl', function ($scope, weatherFactory, $routeParams) {
	//don't use arrow functions for controllers
		console.log(`I am a WeatherCtrl`)


// _____________________________

		weatherFactory
			.getWeather($routeParams.zipcode)
			.then((weather) => {
				$scope.temperature = weather.temp
				$scope.city = weather.city
			})
		})

	.factory('weatherFactory', ($http) => {
		return {
			getWeather(zipcode) {
				return $http
				.get(`http://api.wunderground.com/api/9f01283203df51cf/conditions/q/${zipcode}.json`)
				.then((response) => ({
					temp: response.data.current_observation.temp_f,
					city: response.data.current_observation.display_location.full,
				})
			)
		},
	}
})




// _____________________________
