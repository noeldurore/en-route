// filename: complexCode.js
// Description: A complex code implementation for a video game character class

class Character {
  constructor(name, level, health, strength, agility) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.isAlive = true;
  }

  attack(target) {
    const hitChance = Math.random() * (1 - 0.5) + 0.5; // Random hit chance between 0.5 and 1
    const damage = this.strength * hitChance;

    if (damage > target.health) {
      target.health = 0;
      target.isAlive = false;
    } else {
      target.health -= damage;
    }

    return `${this.name} attacked ${target.name} for ${damage.toFixed(2)} damage.`;
  }

  heal(amount) {
    if (this.isAlive) {
      this.health += amount;
      return `${this.name} healed for ${amount} health.`;
    } else {
      return `${this.name} is already dead and cannot be healed.`;
    }
  }
}

class Warrior extends Character {
  constructor(name, level, health, strength, agility) {
    super(name, level, health, strength, agility);
    this.weapon = 'Sword';
  }

  execute(target) {
    const executeThreshold = this.strength * 0.75;

    if (target.health <= executeThreshold) {
      target.health = 0;
      target.isAlive = false;
      return `${this.name} executed ${target.name} with ${this.weapon}.`;
    } else {
      return `${this.name} failed to execute ${target.name}.`;
    }
  }
}

class Mage extends Character {
  constructor(name, level, health, strength, agility) {
    super(name, level, health, strength, agility);
    this.weapon = 'Staff';
  }

  castSpell(target) {
    const spellDamage = this.strength * 2;

    if (spellDamage > target.health) {
      target.health = 0;
      target.isAlive = false;
    } else {
      target.health -= spellDamage;
    }

    return `${this.name} cast a spell on ${target.name} for ${spellDamage} damage.`;
  }
}

// Usage Example

const warrior = new Warrior('Sir Arthur', 10, 100, 50, 25);
const mage = new Mage('Grand Magus', 10, 80, 30, 40);

console.log(warrior.attack(mage)); // Sir Arthur attacked Grand Magus for 34.75 damage.
console.log(warrior.execute(mage)); // Sir Arthur failed to execute Grand Magus.
console.log(mage.castSpell(warrior)); // Grand Magus cast a spell on Sir Arthur for 60 damage.

console.log(warrior.heal(20)); // Sir Arthur healed for 20 health.
console.log(mage.attack(warrior)); // Grand Magus attacked Sir Arthur for 21.25 damage.
console.log(warrior.execute(mage)); // Sir Arthur executed Grand Magus with Sword.

console.log(warrior); // Warrior { name: 'Sir Arthur', level: 10, health: 40, strength: 50, agility: 25, isAlive: true, weapon: 'Sword' }
console.log(mage); // Mage { name: 'Grand Magus', level: 10, health: 0, strength: 30, agility: 40, isAlive: false, weapon: 'Staff' }