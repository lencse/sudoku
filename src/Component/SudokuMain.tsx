import * as React from 'react';
import { Sudoku, pos } from 'afsudoku';
import SudokuTable from './SudokuTable';

export interface SudokuMainState {
    sudoku: Sudoku;
}

export default class SudokuMain extends React.Component<{}, SudokuMainState> {

    constructor () {
        super();
        let sudoku = Sudoku.create();
        sudoku.put(pos(1, 6), 1); 
 
        sudoku.put(pos(2, 1), 7);
        sudoku.put(pos(2, 3), 6);
        sudoku.put(pos(2, 4), 5);
        sudoku.put(pos(2, 5), 8);
        sudoku.put(pos(2, 9), 4);
        
        sudoku.put(pos(3, 2), 2);
        sudoku.put(pos(3, 6), 6);
        sudoku.put(pos(3, 8), 3);
        
        sudoku.put(pos(4, 2), 3);
        sudoku.put(pos(4, 5), 4);
        sudoku.put(pos(4, 8), 5);
        
        sudoku.put(pos(5, 1), 4);
        sudoku.put(pos(5, 3), 2);
        sudoku.put(pos(5, 7), 7);
        sudoku.put(pos(5, 9), 3);
        
        sudoku.put(pos(6, 2), 1);
        sudoku.put(pos(6, 5), 3);
        
        sudoku.put(pos(7, 2), 8);
        sudoku.put(pos(7, 4), 1);
        sudoku.put(pos(7, 8), 9);
        
        sudoku.put(pos(8, 1), 1);
        sudoku.put(pos(8, 5), 2);
        sudoku.put(pos(8, 7), 6);
        sudoku.put(pos(8, 9), 5);
        
        sudoku.put(pos(9, 4), 7);
        this.state = {
            sudoku: sudoku.solve()
        }
    }

    render () {
        return (
            <div>
                <SudokuTable sudoku={ this.state.sudoku } />
            </div>
        );
    }
}
