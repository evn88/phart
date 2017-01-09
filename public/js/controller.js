myApp.controller('TestListCtrl', function ($scope, $http) {
    //с помощью базового сервиса angularjs получаем данные из файла questions.json
    $http.get('public/questions.json').success(function (data) {
	//объявляем начальные значения счетчиков
	var count_true_answer = 0;
	var count_false_answer = 0;

	//сортируем массив с вопросами случайным образом
	data.sort(compareRandom);

	//записываем полученные и отсортированные данные в глобальную
	//область видимости angularjs
	$scope.questions = data;


	//обрабатываем нажатие на радиобаттоны
	$scope.score = function (true_answer, false_answer) {
	    //если выбран правильный ответ увеличиваем счетчик правильных ответов
	    if (true_answer) {
		count_true_answer++;
	    }
	    //если выбран неправильный ответ увеличиваем счетчик неправильных ответов
	    if (false_answer) {
		count_false_answer++;
	    }

	    //теперь отправляем данные счетчиков в глобальную область 
	    //видимости $scope чтобы можно было отобразить их на страничке
	    $scope.count_true_answer = count_true_answer;
	    $scope.count_false_answer = count_false_answer;
	};

    });
});
//функция для случайной сортировки массива
function compareRandom() {
    return Math.random()-0.3;
}