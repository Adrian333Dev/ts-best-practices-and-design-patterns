// enum UserRole {
// 	USER = 'user',
// 	ADMIN = 'admin',
// }

// const enum UserRoles {
// 	USER = 'user',
// 	ADMIN = 'admin',
// }

// console.log(typeof UserRole); // => object
// console.log(typeof UserRoles); // ! const enums can't be used with typeof

// for (const key in UserRole) console.log(key); // => USER, ADMIN
// for (const key in UserRoles) console.log(key); // ! const enums can't be used with for..in

// ! Replacing enums with objects
const UserRole = {
	USER: 'user',
	ADMIN: 'admin',
} as const;

type ValuesOf<T> = T[keyof T];

type UserRole = ValuesOf<typeof UserRole>;

export const fn = (role: UserRole) => {
	console.log(role);
};

// fn('admin'), fn('user') => OK
// fn('moderator'); // ! Argument of type '"moderator"' is not assignable to parameter of type 'UserRole'.
