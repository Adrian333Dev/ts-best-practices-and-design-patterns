/* eslint-disable @typescript-eslint/no-unused-vars */
// interface IUser {
// 	id: number;
// 	name: string;
// }

// const fn = (id: number, name: string): IUser => ({ id, name });

// type FnResult = ReturnType<typeof fn>; // ReturnType<typeof fn> => IUser
// type FnArgs = Parameters<typeof fn>; // Parameters<typeof fn> => [number, string]

// const user: FnResult = { id: 1, name: 'John' }; // => OK

// type TimeoutResult = ReturnType<typeof setTimeout>;

// const timeout: TimeoutResult = 1; // => OK
// const timeout2: TimeoutResult = '1'; // => Error
// const timeout3: TimeoutResult = true; // => Error

// const args: FnArgs = [1, 'John']; // => OK
// const args2: FnArgs = [1, 'John', true]; // => Error
// const args3: FnArgs = [1]; // => Error
