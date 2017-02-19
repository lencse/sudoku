import *  as _ from 'underscore';

export const N: number = 3;

export function oneToNxN(): Array<number> {
    return _.range(1, N*N + 1);
}
