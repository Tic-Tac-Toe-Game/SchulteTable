require.config({

    paths: {
        "jquery": "vendor/jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone"
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
        }
    },

    // запустить приложение
    deps: ['./main']
});