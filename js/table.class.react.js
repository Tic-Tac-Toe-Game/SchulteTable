define([
    'react',
    'generator',
    'app.config',
    'cell.class.react'
], function (React, Generator, AppConfig, CellClass) {
    return React.createClass({
        render: function () {
            var generator = Generator(AppConfig.size);
            var rows = [];
            for (var y = 1; y <= AppConfig.size; y++) {
                var columns = [];
                for (var x = 1; x <= AppConfig.size; x++) {
                    columns.push(
                        React.createElement(CellClass, {
                            value: generator()
                        })
                    );
                }
                rows.push(
                    React.createElement('tr', null, columns)
                );
            }

            return React.createElement('table', null, rows);
        }
    });
});