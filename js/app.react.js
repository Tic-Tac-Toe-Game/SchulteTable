require.config({

    paths: {
        "underscore": "vendor/underscore",
        "react": "vendor/react",
        "react-dom": "vendor/react-dom",
        "generator": "generator",
        "app.config": "app.config"
    },

    shim: {
        "underscore": {
            exports: "_"
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
    deps: ['./main.react']
});