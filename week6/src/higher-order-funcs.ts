/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */

export const Thing = [
    { id: 1, name: 'thing'},
    { id: 2, name: 'thing'}
]

export interface Things {
    id: any,
    name: string
}

export function allThings() {

}

//I want to be able to map id to name, return things = concat () {name, id}

export const things = ['thing1', 'thing2'];

/* example callback

function functionOne(x) { return x; };

function functionTwo(var1) {
    // some code
}

functionTwo(functionOne); */

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */

type thingFunction = { [key: string]: string }