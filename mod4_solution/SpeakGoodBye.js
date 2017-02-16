(
    function (window) {
        var sayGoodBye = {};
        var speakWord = "Good Bye";
        sayGoodBye.speak = function (name) {
            console.log(speakWord + " " + name);
        };
        window.sayGoodBye = sayGoodBye;
    })(window);
