// Object.keys() and Object.values();

// Object.keys() is a methos that returns an array of a given oject's own property names
// Objectvalues is a methos that returns an array of a given object's enuerable property values

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck));

// console.log(Object.values(spaceJam.toonSquad))

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'apple',
    water: true,
    sun: true,
    size: 10
};

// console.log(garden.vegetable)

let x = 'vegetable'

console.log(garden.x, garden[x]);