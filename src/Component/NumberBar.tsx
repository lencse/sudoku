import * as React from 'react';
import { oneToNxN } from '../util';

export default class NumberBar extends React.Component<{}, {}> {

    render () {
        const items = oneToNxN().map((num) =>
            <li key={ num }>{ num }</li>
        );
        return (
            <ul>
                { items }
            </ul>
        );
    }

}
