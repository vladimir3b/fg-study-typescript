/**
 * Enumerator example
 *    from - Angular Design Patterns by Mathieu Nayrolles ( Packt Publications, July 2018 )
 *    Chapter 01 - TypeScript Best Practices, Best Practices
 *    Read https://legacy.gitbook.com/@basarat "TypeScript Deep Dive" and "Algorithms in TypeScript"
 */
export namespace EnumeratorExample {

  enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
  }

  class Animal {
    flags: AnimalFlags = AnimalFlags.None
  }

  function printAnimalAbilities(animal: Animal): void {
    const  animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
      console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
      console.log('animal can fly');
    }
    if (animalFlags === AnimalFlags.None) {
      console.log('nothing');
    }
  }

  export function main(): void {
    const myAnimal = { flags: AnimalFlags.None };
    printAnimalAbilities(myAnimal); // nothing
    myAnimal.flags |= AnimalFlags.HasClaws;
    printAnimalAbilities(myAnimal); // animal has claws
    myAnimal.flags &= ~AnimalFlags.HasClaws;
    printAnimalAbilities(myAnimal); // nothing
    myAnimal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
    printAnimalAbilities(myAnimal); // animal has claws, animal can fly
  }

}