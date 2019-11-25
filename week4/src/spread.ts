// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here

export const numbers2 = [...numbers];

export const newNumbers = numbers2.map(number => number);
console.log(newNumbers);


// #2 Combining arrays  <--JSL: This returns array item count of 5 for some reason?
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = runnerUps.unshift(winners[0]);
console.log(originalContenders);

// refactor here

export const newContenders = [winners,...runnerUps];
console.log(newContenders);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);
console.log(originalPersons); //<--JSL: Added console log

// refactor here

export const newPersons = {...bob, ...kyle}
console.log(newPersons); //<--JSL: Added console log

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

console.log(originalUpdates); //<--JSL: Added console log

// refactor here

/* export const newUpdates = data.map(task => {
  if (task.id == 1) {
    return Object.assign(task, 'Do the other thing... again');
  }
  return task;
}); */

export const newUpdates = (update: any,...data: any)=>{
  data[update.id] = update;
  return data;
};

console.log(newUpdates); //<--JSL: Added console log