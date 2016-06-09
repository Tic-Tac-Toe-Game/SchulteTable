import React from 'react';
import { generate } from 'st/utils/table';

export default class Table extends React.Component {
    render() {
        const { size } = this.props;

        const sequence = generate(size);

        return (
            <table>

            </table>
        );
    }
}