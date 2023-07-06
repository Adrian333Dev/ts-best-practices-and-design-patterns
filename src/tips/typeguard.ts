type CarBrand = 'bmw' | 'lada';

interface BaseCar {
	year: number;
	brand: CarBrand;
}

interface BaseBmw extends BaseCar {
	climateControl: boolean;
	brand: 'bmw';
	model: 'x5' | 'x7';
}

interface BmwX5 extends BaseBmw {
	model: 'x5';
}

interface BmwX7 extends BaseBmw {
	model: 'x7';
}

type Bmw = BmwX5 | BmwX7;

interface BaseLada extends BaseCar {
	brand: 'lada';
	conditioner?: boolean;
	model: 'vesta' | 'granta';
}

interface Vesta extends BaseLada {
	model: 'vesta';
}

interface Granta extends BaseLada {
	model: 'granta';
}

type Lada = Vesta | Granta;

type Car = Bmw | Lada;

const isVesta = (car: Car): car is Vesta =>
	car.brand === 'lada' && car.model === 'vesta';
const isGranta = (car: Car): car is Granta =>
	car.brand === 'lada' && car.model === 'granta';
const isBmwX5 = (car: Car): car is BmwX5 =>
	car.brand === 'bmw' && car.model === 'x5';

export const fn = (car: Car) => {
	if (isVesta(car)) console.log('Vesta');
	else if (isGranta(car)) console.log('Granta');
	else if (isBmwX5(car)) console.log('Bmw X5');
	else console.log('Bmw X7');
};
