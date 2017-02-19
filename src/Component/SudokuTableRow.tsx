import * as React from 'react';
import { Sudoku, pos } from 'afsudoku';
import SudokuTableCell from './SudokuTableCell';
import { oneToNxN } from '../util';


export interface SudokuTableRowProps {
    sudoku: Sudoku;
    row: number;
}

export default class SudokuTableRow extends React.Component<SudokuTableRowProps, {}> {

    render () {
        const cells = oneToNxN().map((col) =>
            <SudokuTableCell
                key={ `table-cell-${this.props.row}-${col}` }
                cell={ this.props.sudoku.cell(pos(this.props.row, col)) }
                position={ pos(this.props.row, col) }
            />
        );

        return <tr>{ cells }</tr>;            
    }
}
