define([
    'react',
    'react-dom',
    'table.class.react'
], function (React, ReactDOM, TableClass) {
    ReactDOM.render(
        React.createElement(TableClass),
        document.getElementById('js-schulte')
    );
});