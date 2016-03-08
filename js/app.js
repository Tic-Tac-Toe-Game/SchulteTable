require.config({

    paths: {
        "jquery": "vendor/jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "generator": "generator",
        "app.config": "app.config"
    },

    shim: {
        "jquery": {
            exports: "$"
        },
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "generator": {
            deps: ["underscore"],
            exports: "Generator"
        },
        "app.config": {
            exports: "AppConfig"
        }
    },

    // запустить приложение
    deps: ['./main']
});