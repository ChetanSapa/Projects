(function (window) {
	'use strict'
	var App = window.App || {};
	// var Promise = window.Promise;

	function DataStore() {
	//свойство для хранения данных
		this.data = {};
	}
	
	// function promiseResolvedWith(value) {
	// 	var promise = new Promise(function (resolve, reject) {
	// 		this.data[key] = val;
	// 		resolve(value);
	// 	}.bind(this));

	// 	return promise;
	// }

	DataStore.prototype.add = function (key, val) {
		this.data[key] = val;
		// return promiseResolvedWith(null);
	};
	//поиск значения по ключю.
	DataStore.prototype.get = function (key) {
		return this.data[key];
		// return promiseResolvedWith(this.data[key]);
	};
	//поиск всех ключей и значений
	DataStore.prototype.getAll = function () {
		return this.data;
		// return promiseResolvedWith(this.data);
	};
	//метод для удаления информации
	DataStore.prototype.remove = function (key) {
		delete this.data[key];
		// return promiseResolvedWith(null);
	};
	
	App.DataStore = DataStore;
	window.App = App;
})(window);