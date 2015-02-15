require.config({

    paths: {
        "jquery": "http://code.jquery.com/jquery-1.11.2",
        "underscore": "http://underscorejs.org/underscore",
        "backbone": "http://backbonejs.org/backbone"
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