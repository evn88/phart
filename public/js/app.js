'use strict'; //режим полного соответствия современному стандарту ES5

// Объявляем модуль приложения и его зависимости
//ngRoute - Используется для внешнего связывания URL с контроллерами и представлениями (HTML частичками). 
//Он отслеживает изменения $location.url() и пытается по карте путей найти для него существующее определение.

//ngSanitize - Вход очищается путем разбора лексем html. 
//Все безопасные лексемы (из белого списка) затем возвращаются 
//обратно в строку с экранированным html. В нашем случае используется для тогочтобы 
//не очищать данные в одном из шаблонов с использованием атрибута ng-bind-html

var myApp = angular.module('app', ['ngRoute','ngSanitize']);

myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix(''); //Если нужен будет префикс

	//роутинг
	$routeProvider.when('/', {
		templateUrl: 'public/pages/index.html'
	}).when('/about', {
		templateUrl: 'public/pages/about.html'
	}).when('/photographers', {
		templateUrl: 'public/pages/photographers.html'
	}).when('/kurs', {
		templateUrl: 'public/pages/kurs.html'
	}).when('/kontact', {
		templateUrl: 'public/pages/kontact.html'
	}).when('/sofi', {
		templateUrl: 'public/pages/sofi.html'
	}).when('/elena', {
		templateUrl: 'public/pages/elena.html'
	}).when('/yan', {
		templateUrl: 'public/pages/yan.html'
	}).when('/dopsvet', {
		templateUrl: 'public/pages/dopsvet.html'
	}).when('/model', {
		templateUrl: 'public/pages/model.html'
	}).when('/nastroiky', {
		templateUrl: 'public/pages/nastroiky.html'
	}).when('/obsor', {
		templateUrl: 'public/pages/obsor.html'
	}).when('/tecnica', {
		templateUrl: 'public/pages/tecnica.html'
	}).when('/ilya', {
		templateUrl: 'public/pages/ilya.html'
	}).when('/test', {
		templateUrl: 'public/pages/test.html'
	}).otherwise({ redirectTo: '/' });
}]);
