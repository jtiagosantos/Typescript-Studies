class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }

  accelerate(): void {
    this.motor.accelerate();
  }

  break(): void {
    this.motor.break();
  }

  off(): void {
    this.motor.off();
  }
}

class Motor {
  turnOn(): void {
    console.log('car is turn on');
  }

  accelerate(): void {
    console.log('car is accelerate');
  }

  break(): void {
    console.log('car is breaked');
  }

  off(): void {
    console.log('car is offed');
  }
}

const car = new Car();
car.turnOn();
car.accelerate();
car.break();
car.off();
