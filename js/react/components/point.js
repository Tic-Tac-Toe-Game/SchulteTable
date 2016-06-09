import React from 'react';

export default class Default extends React.Component {
    render() {
        const className = this.props.success ? 'schulte-choose-success' : 'schulte-choose';

        return (
            <td
                className={className}
                onClick={() => {this.props.onClick(this.props.value)}}
            >
                {this.props.value}
            </td>
        );
    }
}