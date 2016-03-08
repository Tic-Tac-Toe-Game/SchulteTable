define([
    'react',
    'react-dom'
], function (React, ReactDOM) {
    var  size = 5;

    var TableClass = React.createClass({
        render: function () {
            var rows = [];
            for (var y = 1; y <= size; y++) {
                var columns = [];
                for (var x = 1; x <= size; x++) {
                    columns.push(
                        React.createElement('td', null, 'A')
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