requirejs.config({
    "baseUrl": "lib/js/vendor",
    "paths": {
        "app": "../app"
    }
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

// Load the main app module to start the app
requirejs(["app/main"]);