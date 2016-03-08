define([
    'react',
    'react-dom',
    'generator',
    'app.config'
], function (React, ReactDOM, Generator, AppConfig) {
    var TableClass = React.createClass({
        render: function () {
            var generator = Generator(AppConfig.size);
            var rows = [];
            var columnConfig = {
                className: AppConfig.selector.cellDefaultClassName
            };
            for (var y = 1; y <= AppConfig.size; y++) {
                var columns = [];
                for (var x = 1; x <= AppConfig.size; x++) {
                    columns.push(
                        React.createElement('td', columnConfig, generator())
                    );
                }
                rows.push(
                    React.createElement('tr', null, columns)
                );
            }

            return React.createElement('table', null, rows);
        }
    });

    ReactDOM.render(
        React.createElement(TableClass),
        document.getElementById('js-schulte')
    );
});