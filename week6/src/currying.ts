// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string): string { //<<--JSL: added implicit type string
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

export const curryMe2 = (string1: string) => (string2: string) => (string3: string) => string1 + ' ' + string2 + ' ' + string3;

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}

// source code here

export const subtract2 = (a: number) => (b: number) => (c: number) =>  a + b - c;
export const add2 = (a: number) => (b: number) => (c: number) => subtract2(a)(b)(c);
export const doMath2 = (a: number) => (b: number) => (c: number) => add2(a)(b)(c);

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here

export const allNinjas = [...ninjasOne,...ninjasTwo];

export function blackBelts(arr: Ninja[]) {
  let filter = arr.filter((b: Ninja) => b.belt === 'black');
  return filter;
};

export interface Ninja {
  name: string,
  belt: string,
  status?: string
}

export const filterBy = (arr: Ninja[]) => arr.filter(b => b.belt === 'black');
export const blackBelts2 = (arr: Ninja[]) => filterBy(arr)


/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here

export function ninjasOneStatus(arr: Ninja[]) {
  return arr.map((ninja: Ninja) => {
    switch(ninja.belt) {
      case 'white': {
          return {...ninja, status: statusTypes.white}
      }
      case 'green': {
        return {...ninja, status: statusTypes.green}
      }
      case 'black': {
        return {...ninja, status: statusTypes.black}
      }
    }
  })
};

export const ninjasOneStatus2 = (arr: Ninja[]) => mapNinja(statusTypes)(arr)

export function ninjasTwoStatus(arr: Ninja[]) {
  return arr.map((ninja: Ninja) => {
    switch(ninja.belt) {
      case 'white': {
          return {...ninja, status: gamerStatusTypes.white}
      }
      case 'green': {
        return {...ninja, status: gamerStatusTypes.green}
      }
      case 'black': {
        return {...ninja, status: gamerStatusTypes.black}
      }
    }
  })
};

export const ninjasTwoStatus2 = (arr: Ninja[]) => mapNinja(gamerStatusTypes)(arr)

type GenericType = { [key: string]: string }

export const mapNinja = (status: GenericType) => (arr: Ninja[]) => arr.map((ninja: Ninja) => {
  switch(ninja.belt) {
    case 'white': {
        return {...ninja, status: status.white}
    }
    case 'green': {
      return {...ninja, status: status.green}
    }
    case 'black': {
      return {...ninja, status: status.black}
    }
  }
});
