import * as React from 'react';
import { SudokuState, SudokuMainState } from  '../Store/SudokuState';

export interface Solver {
    solve();
}

export interface ActionBarProps {
    solver: Solver
}

export class ActionBar extends React.Component<ActionBarProps, {}> {

    render () {
        return (
            <div>
                <button type="button" onClick={ this.solve.bind(this) }>
                    Solve
                </button>
            </div>
        );
    }

    private solve() {
        this.props.solver.solve();
    }
}
