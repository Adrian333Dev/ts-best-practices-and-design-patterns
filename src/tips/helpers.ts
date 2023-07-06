/* eslint-disable @typescript-eslint/no-unused-vars */
interface IUser {
	id: string;
	name: string;
	age: number;
	birthday: {
		year: number;
		month: number;
		day: number;
	};
}

type DeepReadonly<T> = T extends object
	? { readonly [P in keyof T]: DeepReadonly<T[P]> }
	: T;

type DeepPartial<T> = T extends object
	? { [P in keyof T]?: DeepPartial<T[P]> }
	: T;

type DeepRequired<T> = T extends object
	? { [P in keyof T]-?: DeepRequired<T[P]> }
	: T;

type DeepWritable<T> = T extends object
	? { -readonly [P in keyof T]: DeepWritable<T[P]> }
	: T;

type DeepNonNullable<T> = T extends object
	? { [P in keyof T]-?: DeepNonNullable<T[P]> }
	: NonNullable<T>;

type DeepPick<T, K extends keyof T> = {
	[P in K]: DeepPick<T[P], keyof T[P]>;
};

const user: DeepReadonly<IUser> = {
	id: '123',
	name: 'John',
	age: 42,
	birthday: {
		year: 1977,
		month: 5,
		day: 12,
	},
};

// Helpers

type ValuesOf<T> = T[keyof T];

type UserWithouId = Omit<IUser, 'id'>;
type UserWithouId2 = Pick<IUser, Exclude<keyof IUser, 'id'>>;
type UserWithNameAndAge = Pick<IUser, 'name' | 'age'>;
type Birthday1 = ValuesOf<IUser['birthday']>;
type Birthday2 = ValuesOf<Pick<IUser, 'birthday'>>;

type CarBrands = 'Audi' | 'BMW' | 'Mercedes' | 'Lada' | 'Toyota';

type GermanCars1 = Exclude<CarBrands, 'Lada' | 'Toyota'>;
type GermanCars2 = Extract<CarBrands, 'Audi' | 'BMW' | 'Mercedes'>;
