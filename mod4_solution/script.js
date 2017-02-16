(
	function () {
		var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

		for (name in names) {
			name.charAt(0)
			if ("j" == names[name].charAt(0).toLowerCase()) {
				sayGoodBye.speak(names[name]);
			}
			else {
				sayHello.speak(names[name]);
			}
		}

	})();
