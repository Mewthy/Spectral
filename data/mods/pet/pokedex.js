'use strict';

exports.BattlePokedex = {
	cryogonal: {
		num: -339,
		species: "Cryogonal",
		types: ["Ice"],
		genderRatio: "N",
		baseStats: {hp: 210, atk: 45, def: 140, spa: 45, spd: 140, spe: 20},
		abilities: {0: "Snow Warning", H: "Frostbite"},
		heightm: 13.5,
		weightkg: 665.5,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	mimikyutotem: {
		num: -340,
		species: "Mimikyu-Totem",
		types: ["Ghost", "Electric"],
		baseStats: {hp: 83, atk: 102, def: 103, spa: 77, spd: 112, spe: 83},
		abilities: {0: "Volt Fence", 1: "Teravolt", H: "Magic Guard"},
		heightm: 1.3,
		weightkg: 1.9,
		color: "Black",
		eggGroups: ["Fairy"],
	},
	mimikyu: {
		num: -341,
		species: "Mimikyu",
		shiny: true,
		types: ["Ghost", "Fire"],
		baseStats: {hp: 83, atk: 77, def: 112, spa: 102, spd: 103, spe: 83},
		abilities: {0: "Flame Fence", 1: "Turboblaze", H: "Magic Bounce"},
		heightm: 0.9,
		weightkg: 0.9,
		color: "White",
		eggGroups: ["Fairy"],
	},
	anorith: {
		num: -342,
		species: "Anorith",
		types: ["Bug", "Steel"],
		baseStats: {hp: 50, atk: 64, def: 46, spa: 44, spd: 46, spe: 50},
		abilities: {0: "Swarm", 1: "Strong Jaw"},
		heightm: 0.2,
		weightkg: 10.3,
		color: "Gray",
		evos: ["castmite"],
		eggGroups: ["Bug"],
	},
	durant: {
		num: -343,
		species: "Durant",
		types: ["Bug", "Steel"],
		baseStats: {hp: 74, atk: 100, def: 96, spa: 54, spd: 56, spe: 70},
		abilities: {0: "Swarm", 1: "Strong Jaw"},
		heightm: 0.6,
		weightkg: 50.3,
		color: "Gray",
		prevo: "swamite",
		evos: ["metamite"],
		eggGroups: ["Bug"],
	},
	armaldo: {
		num: -344,
		species: "Armaldo",
		types: ["Bug", "Steel"],
		baseStats: {hp: 84, atk: 130, def: 126, spa: 59, spd: 91, spe: 110},
		abilities: {0: "Swarm", 1: "Strong Jaw"},
		heightm: 0.8,
		weightkg: 80.3,
		color: "Gray",
		prevo: "castmite",
		eggGroups: ["Bug"],
	},
	krabby: {
		num: -345,
		species: "Krabby",
		types: ["Poison", "Water"],
		baseStats: {hp: 86, atk: 70, def: 65, spa: 60, spd: 100, spe: 60},
		abilities: {0: "Liquid Ooze", 1: "Poison Touch", H: "Imposter"},
		heightm: 0.9,
		weightkg: 57.3,
		color: "Purple",
		evos: ["Globster"],
		eggGroups: ["Amorphous"],
	},
	crawdaunt: {
		num: -346,
		species: "Crawdaunt",
		types: ["Poison", "Water"],
		baseStats: {hp: 110, atk: 100, def: 75, spa: 70, spd: 145, spe: 80},
		abilities: {0: "Liquid Ooze", 1: "Toxic Claw", H: "Imposter"},
		heightm: 1.6,
		weightkg: 70.8,
		color: "Purple",
		prevo: "Globscrab",
		eggGroups: ["Amorphous"],
	},
	venipede: {
		num: -347,
		species: "Venipede",
		types: ["Steel", "Poison"],
		baseStats: {hp: 90, atk: 85, def: 65, spa: 65, spd: 90, spe: 90},
		abilities: {0: "Core Shield", 1: "Metallic Luster", H: "Filter"},
		heightm: 0.6,
		weightkg: 90.2,
		color: "Red",
		evos: ["Whirlipede"],
		eggGroups: ["Mineral"],
	},
	whirlipede: {
		num: -348,
		species: "Whirlipede",
		types: ["Steel", "Poison"],
		baseStats: {hp: 90, atk: 110, def: 75, spa: 75, spd: 140, spe: 110},
		abilities: {0: "Core Shield", 1: "Metallic Luster", H: "Filter"},
		heightm: 1.3,
		weightkg: 145.7,
		color: "Red",
		prevo: "Venipede",
		eggGroups: ["Mineral"],
	},
	shuppet: {
		num: -349,
		species: "Shuppet",
		types: ["Ghost"],
		baseStats: {hp: 40, atk: 50, def: 60, spa: 95, spd: 70, spe: 80},
		abilities: {0: "Spiritual Judgment", 1: "Cursed Body", H: "Spirit Hold"},
		heightm: 1.2,
		weightkg: 10.3,
		color: "Black",
		evos: ["Banette"],
		eggGroups: ["Amorphous"],
	},
	banette: {
		num: -350,
		species: "Banette",
		types: ["Ghost"],
		baseStats: {hp: 50, atk: 60, def: 75, spa: 115, spd: 75, spe: 110},
		abilities: {0: "Spiritual Judgment", 1: "Cursed Body", H: "Spirit Hold"},
		heightm: 1.6,
		weightkg: 12.6,
		color: "Black",
		evos: ["Marshadow"],
		prevo: "Shuppet",
		eggGroups: ["Amorphous"],
	},
	marshadow: {
		num: -351,
		species: "Marshadow",
		types: ["Ghost"],
		baseStats: {hp: 60, atk: 70, def: 80, spa: 140, spd: 85, spe: 135},
		abilities: {0: "Spiritual Judgment", 1: "Cursed Body", H: "Spirit Hold"},
		heightm: 2.0,
		weightkg: 17.5,
		color: "Black",
		prevo: "Banette",
		eggGroups: ["Amorphous"],
	},
	pidgeotto: {
		num: -352,
		species: "Pidgeotto",
		types: ["Normal", "Flying"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Delta Stream"},
		heightm: 0.5,
		weightkg: 0.6,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	hypno: {
		num: -353,
		species: "Hypno",
		types: ["Dark"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Nighttime Horror"},
		heightm: 2.5,
		weightkg: 90.6,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
};
