import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Crie 3 objetos do tipo Character: 
const player1: Character = new Character('julia');
const player2: Character = new Character('Eliza');
const player3: Character = new Character('Ana');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Crie 2 objetos do tipo Monster: 
const monster1: Monster = new Monster();
const monster2: Dragon = new Dragon();

// Crie um objeto do tipo PVP:
const pvp: PVP = new PVP(player2, player3);

// Crie um objeto do tipo PVE: 
const pve: PVE = new PVE(player1, [monster1, monster2]);

// Crie uma função chamada runBattles:
const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};