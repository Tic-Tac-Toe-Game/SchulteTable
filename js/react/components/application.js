import React from 'react';
import { generate } from 'st/utils/table';

export default class Table extends React.Component {
    render() {
        const { size } = this.props;

        const sequence = generate(size);

        let current = 0;
        let cells = [];
        for (let c = 0; c < size; ++c) {
            let rows = [];

            for (let r = 0; r < size; ++r) {
                let value = sequence[current++];
                rows.push(<td key={r}>{value}</td>);
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