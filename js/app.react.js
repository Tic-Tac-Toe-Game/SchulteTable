require.config({

    paths: {
        "underscore": "vendor/underscore",
        "react": "vendor/react",
        "react-dom": "vendor/react-dom",
        "generator": "generator",
        "app.config": "app.config",
        "cell.class.react": "cell.class.react"
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
        },
        "cell.class.react": {
            exports: "CellClass"
        }
    },

    // запустить приложение
    deps: ['./main.react']
});