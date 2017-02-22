import * as React from 'react';
import { Sudoku, pos } from 'afsudoku';
import SudokuTable from './SudokuTable';
import ActionBar from './ActionBar';
import NumberBar from './NumberBar';
import Store from '../Store/Store';


export interface SudokuMainState {
    sudoku: Sudoku;
    solved: Sudoku;
    showSolved: boolean;
}

export default class SudokuMain extends React.Component<{}, SudokuMainState> {

    constructor () {
        super();
        this.state = Store.createInstance(this).getState();
    }

    render () {
        return (
            <div>
                <NumberBar />
                <SudokuTable sudoku={ this.state.showSolved ? this.state.solved : this.state.sudoku } />
                <ActionBar />
            </div>
        );
    }

}
