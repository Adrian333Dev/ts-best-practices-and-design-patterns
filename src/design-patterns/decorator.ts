abstract class Car {
	public description!: string;

	public getDescription(): string {
		return this.description;
	}

	public abstract cost(): number;
}

class ModelS extends Car {
	public description = 'Model S';

	public cost(): number {
		return 73000;
	}
}

class ModelX extends Car {
	public description = 'Model X';

	public cost(): number {
		return 77000;
	}
}

abstract class CarOptions extends Car {
	public abstract getDescription(): string;
	public abstract cost(): number;

	constructor(public decoratedCar: Car) {
		super();
	}
}

class EnhancedAutoPilot extends CarOptions {
	constructor(car: Car) {
		super(car);
	}

	public getDescription(): string {
		return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
	}

	public cost(): number {
		return this.decoratedCar.cost() + 5000;
	}
}

class RearFacingSeats extends CarOptions {
	constructor(car: Car) {
		super(car);
	}

	public getDescription(): string {
		return this.decoratedCar.getDescription() + ', Rear facing seats';
	}

	public cost(): number {
		return this.decoratedCar.cost() + 4000;
	}
}

let tesla1 = new ModelS();
tesla1 = new RearFacingSeats(tesla1);

console.log(tesla1.cost());
console.log(tesla1.getDescription());
