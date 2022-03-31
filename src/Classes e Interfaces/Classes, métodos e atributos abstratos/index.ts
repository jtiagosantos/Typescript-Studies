abstract class Character {
  protected abstract picture: string;

  constructor(
    protected name: string,
    protected power: number,
    protected hp: number,
  ) {}

  attack(character: Character): void {
    this.emitSound();
    character.loseLife(this.power);
  }

  loseLife(power: number): void {
    this.hp -= power;
    console.log(`${this.name} has ${this.hp} hp...`);
  }

  abstract emitSound(): void;
}

/*
Quando uma classe é abstrata, ela não pode mais ser instanciada diretamente,
apenas por subclasses dela.

Ao criar um método abstrato em uma classe, todas as subclasses dela deverão
ter a implementação desse método

Método abstratos só podem ser criados dentro de classes abstratas
*/

class Hero extends Character {
  protected picture = '🦸';

  emitSound(): void {
    console.log(`${this.picture} HERO ATTACK!!!!`);
  }
}
class Villain extends Character {
  protected picture = '👺';

  emitSound(): void {
    console.log(`${this.picture} MONSTER ATTACK!!!!`);
  }
}

const hero = new Hero('lordKirito', 100, 1000);
const villain = new Villain('Mob', 80, 1000);

hero.attack(villain);
villain.attack(hero);
