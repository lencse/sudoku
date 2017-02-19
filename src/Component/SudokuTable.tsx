import * as React from 'react';
import { Sudoku } from 'afsudoku';
import SudokuTableRow from './SudokuTableRow'
import { oneToNxN } from '../util';

export interface SudokuTableProps {
    sudoku: Sudoku;
}

export default class SudokuTable extends React.Component<SudokuTableProps, {}> {

    render () {
        const rows = oneToNxN().map((row) =>
            <SudokuTableRow
                key={ `table-row-${row}` }
                sudoku={ this.props.sudoku }
                row={ row }
            />
        );

        return (
            <table>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}
