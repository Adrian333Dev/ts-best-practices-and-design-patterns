type CarBrand = 'bmw' | 'audi' | 'toyota' | 'mercedes';

interface BaseCar {
	year: number;
	brand: CarBrand;
}

interface Bmw extends BaseCar {
	climateControl: boolean;
	brand: 'bmw';
}

interface Audi extends BaseCar {
	autoPilot: boolean;
	brand: 'audi';
}

interface Mercedes extends BaseCar {
	autoPilot: boolean;
	brand: 'mercedes';
}

interface Toyota extends BaseCar {
	brand: 'toyota';
	cruise?: boolean;
}

type Car = Bmw | Audi | Mercedes | Toyota;

const exhaustCheck = (param: never) => {
	throw new Error(`Unexpected object: ${param}`);
};

export const actionWithCar = (car: Car) => {
	switch (car.brand) {
		case 'bmw':
			return car.climateControl;
		case 'audi':
			return car.autoPilot;
		case 'mercedes':
			return car.autoPilot;
		case 'toyota':
			return car.cruise;
		default:
			return exhaustCheck(car);
	}
};
