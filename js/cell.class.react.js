define([
    'react',
    'app.config'
], function (React, AppConfig) {
    return React.createClass({
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
});