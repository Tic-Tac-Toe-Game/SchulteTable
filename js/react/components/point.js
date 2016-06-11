import React from 'react';

export default class Default extends React.Component {
    shouldComponentUpdate(newProps) {
        return this.props.success !== newProps.success || this.props.value !== newProps.value;
    }

    getCurrent() {
        if (this.props.success) {
            return {
                className: 'schulte-choose-success'
            }
        }

        return {
            className: 'schulte-choose',
            onClick: () => {
                this.props.onClick(this.props.value);
            }
        };
    }

    render() {
        let current = this.getCurrent();

        return (
            <td {...current} >
                {this.props.value}
            </td>
        );
    }
}