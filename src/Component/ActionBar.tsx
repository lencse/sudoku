import * as React from 'react';
import Store from  '../Store/Store';


export default class ActionBar extends React.Component<{}, {}> {

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
        Store.getInstance().solve();
    }
}
