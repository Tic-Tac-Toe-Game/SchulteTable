define([
    'react',
    'react-dom',
    'generator',
    'app.config'
], function (React, ReactDOM, Generator, AppConfig) {
    var CellComponentConfig = {
        className: AppConfig.selector.cellDefaultClassName
    };
    var CellClass = React.createClass({
        getInitialState: function () {
            return {
                isActive: true
            };
        },
        handleClick: function(event) {
            this.setState({
                isActive: false
            });
        },
        getConfig: function () {
            if (this.state.isActive) {
                return {
                    className: AppConfig.selector.cellDefaultClassName,
                    onClick: this.handleClick
                };
            }

            return {
                className: AppConfig.selector.cellChooseClassName
            };
        },
        render: function () {   
            return React.createElement(
                'td',
                this.getConfig(),
                this.props.value
            );
        }
    });

    var TableClass = React.createClass({
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

    ReactDOM.render(
        React.createElement(TableClass),
        document.getElementById('js-schulte')
    );
});