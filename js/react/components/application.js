import React from 'react';

import Point from 'st/components/point';

export default class Application extends React.Component {
    render() {
        const { size, sequence, index } = this.props;

        let current = 0;
        let cells = [];
        for (let c = 0; c < size; ++c) {
            let rows = [];

            for (let r = 0; r < size; ++r) {
                let value = sequence[current++];
                let success = value < index;
                rows.push(<Point
                    key={r}
                    value={value}
                    onClick={this.props.onClick}
                    success={success}
                />);
            }

            cells.push(<tr key={c}>{rows}</tr>);
        }

        return (
            <table>
                <tbody>
                    {cells}
                </tbody>
            </table>
        );
    }
}