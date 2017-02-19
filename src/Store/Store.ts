import * as React from 'react';
import { Sudoku, pos } from 'afsudoku';
import SudokuMain from '../Component/SudokuMain';
import { SudokuMainState } from '../Component/SudokuMain';


export default class Store {

    private subscriber: SudokuMain;
    private sudoku: Sudoku;
    private solved: Sudoku;
    private showSolved: boolean = false;

    constructor (subscriber: SudokuMain) {
        this.subscriber = subscriber;
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

        this.sudoku = sudoku;
        this.solved = sudoku.solve();
    }

    private static store: Store = null;

    public static createInstance(subscriber: SudokuMain): Store {
        Store.store = new Store(subscriber);
        return Store.store;
    }

    public static getInstance(): Store {
        return Store.store;
    }

    public solve() {
        this.showSolved = true;
        this.handleUpdate();
    }

    public getState(): SudokuMainState {
        return {
            sudoku: this.sudoku,
            solved: this.solved,
            showSolved: this.showSolved
        };
    }

    private handleUpdate() {
        this.subscriber.setState(this.getState());
    }

}
