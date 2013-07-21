requirejs.config({
    "baseUrl": "lib/js/vendor",
    "paths": {
        "app": "../test/app"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);