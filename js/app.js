require.config({

    paths: {
        "jquery": "vendor/jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "generator": "generator"
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
        }
    },

    // запустить приложение
    deps: ['./main']
});