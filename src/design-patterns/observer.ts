interface Subject {
	registerObserver(o: Observer): void;
	removeObserver(o: Observer): void;
	notifyObservers(): void;
}

interface Observer {
	update(temperature: number): void;
}

class WeatherStation implements Subject {
	private temp!: number;
	private observers: Observer[] = [];

	setTemperature(temp: number) {
		console.log(`Weather station: new temperature measurement: ${temp}`);
		this.temp = temp;
	}

	registerObserver(o: Observer) {
		this.observers.push(o);
	}

	removeObserver(o: Observer) {
		let index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}

	notifyObservers() {
		for (let observer of this.observers) observer.update(this.temp);
	}
}

class TemperatureDisplay implements Observer {
	private subject: Subject;

	constructor(weatherStation: Subject) {
		this.subject = weatherStation;
		weatherStation.registerObserver(this);
	}

	update(temperature: number) {
		console.log(`TemperatureDisplay: I need to update my display`);
		// Logic would go here
	}
}

class Fan implements Observer {
	private subject: Subject;

	constructor(weatherStation: Subject) {
		this.subject = weatherStation;
		weatherStation.registerObserver(this);
	}

	update(temperature: number) {
		if (temperature > 25) {
			console.log(`Fan: Its hot here, turning myself on...`);
			// Logic would go here
		} else {
			console.log(`Fan: Its nice and cool here, turning myself off...`);
			// Logic would go here
		}
	}
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
