var app = angular.module("myApp", [ 'ngMaterial' ]);

app.controller('produitController',
		function($scope, $http, $timeout, $q, $log) {
			$scope.quant = null;
			$scope.ref = null;
			$scope.produits = [];
			$scope.nomFour = null;
			$scope.adresseFournsseur = null;
			$scope.numPhone = null;
			$scope.fournisseurrs = [];
			$scope.idF = null;
			dd = [];
			$scope.showMe = false;
			$http.get("/all").success(function(data) {
				$scope.produits = data;
			});
			$http.get("/allFour").success(function(data) {
				dd = data;

			});
			// console.log($scope.fournisseurs);
			var self = this;
			self.simulateQuery = false;
			self.isDisabled = false;
			self.repos = loadAll();
			self.querySearch = querySearch;
			self.selectedItemChange = selectedItemChange;
			self.searchTextChange = searchTextChange;
			// ******************************
			// Internal methods
			// ******************************
			/**
			 * Search for repos... use $timeout to simulate remote dataservice
			 * call.
			 */
			function querySearch(query) {
				self.repos = dd.map(function(repo) {
					repo.value = repo.nomFournisseur.toLowerCase();
					return repo;
				});
				var results = query ? self.repos.filter(createFilterFor(query))
						: self.repos, deferred;
				if (self.simulateQuery) {
					deferred = $q.defer();
					$timeout(function() {
						deferred.resolve(results);
					}, Math.random() * 1000, false);
					return deferred.promise;
				} else {
					return results;
				}
			}
			function searchTextChange(text) {
				$log.info('Text changed to ' + text);
				console.log(dd);

			}
			function selectedItemChange(item) {
				$scope.idF = item.id;
				$log.info('Item changed to ' + JSON.stringify(item));
				console.log(dd);
			}
			/**
			 * Build `components` list of key/value pairs
			 */
			function loadAll() {
				$http.get("/allFour").success(function(data) {
					dd = data;
					// console.log("before" + dd);
				});
				// console.log("after" + dd);
				return dd.map(function(repo) {
					repo.value = repo.nomFournisseur.toLowerCase();

					return repo;
				});
			}
			/**
			 * Create filter function for a query string
			 */
			function createFilterFor(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(item) {
					return (item.value.indexOf(lowercaseQuery) === 0);
				};
			}

			$scope.add = function() {
				console.log($scope.idF);
				$http.get(
						"/save?quantite=" + $scope.quant + "&reference="
								+ $scope.ref + "&fournisseur=" + $scope.idF)
						.success(function(data) {
						});
				$scope.quant = null;
				$scope.ref = "";
				$scope.showMe = true;
			};
			$scope.findAll = function() {
				$http.get("/all").success(function(data) {
					$scope.produits = data;
				});
			};
			$scope.supprimer = function(x) {
				var index = $scope.produits.indexOf(x);
				$http.get("/delete?id=" + x.id).success(function(data) {
					if (index > -1) {
						$scope.produits.splice(index, 1);
					}
				});
			};
			$scope.findAllFourProd = function() {
				$http.get("/allFour").success(function(data) {
					$scope.fournisseurrs = data;
				});
				// console.log($scope.fournisseurrs);
			};
			function trouver() {
				return $http.get("/allFour").success(function(data) {
					return data;
				});
				// console.log($scope.fournisseurrs);
			}
			;
		});

app.controller('fourController', function($scope, $http) {
	$scope.fournisseurs = [];
	$scope.nomFour = null;
	$scope.adresseFournsseur = null;
	$scope.numPhone = null;
	$http.get("/allFour").success(function(data) {
		$scope.fournisseurs = data;
	});
	$scope.addFour = function() {
		$http.get(
				"/addFour?nomFournisseur=" + $scope.nomFour
						+ "&adresseFournsseur=" + $scope.adresseFournsseur
						+ "&numPhone=" + $scope.numPhone).success(
				function(data) {
				});
		$scope.nomFour = null;
		$scope.adresseFournsseur = null;
		$scope.numPhone = null;
	};
	$scope.findAllFour = function() {
		$http.get("/allFour").success(function(data) {
			$scope.fournisseurs = data;
		});
	};
	$scope.suppFour = function(x) {
		var index1 = $scope.fournisseurs.indexOf(x);
		$http.get("/deleteFour?id=" + x.id).success(function(data) {
			if (index1 > -1) {
				$scope.fournisseurs.splice(index1, 1);
			}
		});
	};
});
