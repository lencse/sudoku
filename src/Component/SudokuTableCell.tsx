import * as React from 'react';
import { Cell, Position} from 'afsudoku';


export interface SudokuTableCellProps {
    cell: Cell;
    position: Position;
}

export default class SudokuTableCell extends React.Component<SudokuTableCellProps, {}> {

    render () {
        const classes = [
            `row-${this.props.position.getRow()}`,
            `col-${this.props.position.getColumn()}`,
            this.props.cell.isSoft() ? 'soft' : 'hard'
        ].join(' ');

        return <td className={ classes }>{ this.props.cell.val() == 0 ? '' : this.props.cell.val() }</td>;            
    }
}
