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
