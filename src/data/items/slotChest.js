const BRUTEARMOR = {
	armorBrute1: {
		name: "Cardborg Disguise",
		sellPrice: 180,
		icon: require("@/assets/art/combat/items/arm_b1.png"), overlay: require("@/assets/art/combat/items/arm_b1_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 1
		}
	},
	armorBrute2: {
		name: "Firefighting Suit",
		sellPrice: 280,
		icon: require("@/assets/art/combat/items/arm_b2.png"), overlay: require("@/assets/art/combat/items/arm_b2_overlay.png"),
		stats: {
			burnProtection: 2
		},
		requires: {
			evasion: 10
		}
	},
	armorBrute3: {
		name: "Personal Protection Vest PPV",
		sellPrice: 400,
		icon: require("@/assets/art/combat/items/arm_b3.png"), overlay: require("@/assets/art/combat/items/arm_b3_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 20
		}
	},
	armorBrute4: {
		name: "Reflective Protection Vest RPV",
		sellPrice: 670,
		icon: require("@/assets/art/combat/items/arm_b4.png"), overlay: require("@/assets/art/combat/items/arm_b4_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 30
		}
	},
	armorBrute5: {
		name: "Armored Biohazard Protection Suit",
		sellPrice: 940,
		icon: require("@/assets/art/combat/items/arm_b5.png"), overlay: require("@/assets/art/combat/items/arm_b5_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 40
		}
	},
	armorBrute6: {
		name: "Riot Suit",
		sellPrice: 1360,
		icon: require("@/assets/art/combat/items/arm_b6.png"), overlay: require("@/assets/art/combat/items/arm_b6_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 50
		}
	}
}
const BURNARMOR = {
	armorBurn1: {
		name: "EVA Suit",
		sellPrice: 170,
		icon: require("@/assets/art/combat/items/arm_s1.png"), overlay: require("@/assets/art/combat/items/arm_s1_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 1
		}
	},
	armorBurn2: {
		name: "Medical Rated Spacesuit",
		sellPrice: 260,
		icon: require("@/assets/art/combat/items/arm_s2.png"), overlay: require("@/assets/art/combat/items/arm_s2_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 10
		}
	},
	armorBurn3: {
		name: "Scientific Hardsuit",
		sellPrice: 380,
		icon: require("@/assets/art/combat/items/arm_s3.png"), overlay: require("@/assets/art/combat/items/arm_s3_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 20
		}
	},
	armorBurn4: {
		name: "Advanced Hardsuit",
		sellPrice: 650,
		icon: require("@/assets/art/combat/items/arm_s4.png"), overlay: require("@/assets/art/combat/items/arm_s4_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 30
		}
	},
	armorBurn5: {
		name: "Captain's Hardsuit",
		sellPrice: 920,
		icon: require("@/assets/art/combat/items/arm_s5.png"), overlay: require("@/assets/art/combat/items/arm_s5_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 40
		}
	},
	armorBurn6: {
		name: "Syndicate Hardsuit",
		sellPrice: 1240,
		icon: require("@/assets/art/combat/items/arm_syndi.png"), overlay: require("@/assets/art/combat/items/arm_syndi_overlay.png"),
		stats: {
		},
		requires: {
			evasion: 50,
		}
	}
}

const MECHS = {
	ripley: {
		name: "R.I.P.L.E.Y.",
		sellPrice: 6060,
		icon: require("@/assets/art/fabrication/mechripley.png"),
		overlay: require("@/assets/art/fabrication/mechripley.png"),
		stats: {
		},
		requires: {
			fabrication: 7
		}
	},
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 9415,
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		stats: {
		},
		requires: {
			fabrication: 11
		}
	},
	odysseus: {
		name: "Odysseus",
		sellPrice: 15458,
		icon: require("@/assets/art/fabrication/mechodysseus.png"),
		stats: {
		},
		requires: {
			fabrication: 15
		}
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 18845,
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		stats: {
		},
		requires: {
			fabrication: 19
		}
	},
	clarke: {
		name: "Clarke",
		sellPrice: 24035,
		icon: require("@/assets/art/fabrication/mechclarke_anim.gif"),
		stats: {
		},
		requires: {
			fabrication: 22
		}
	},
	durand: {
		name: "Durand",
		sellPrice: 27875,
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		stats: {
		},
		requires: {
			fabrication: 25
		}
	},
	marauder: {
		name: "Marauder",
		sellPrice: 31440,
		icon: require("@/assets/art/fabrication/mechmarauder.png"),
		stats: {
		},
		requires: {
			fabrication: 28
		}
	},
	gygax: {
		name: "Gygax",
		sellPrice: 37960,
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 32
		}
	},
	mauler: {
		name: "Mauler",
		sellPrice: 45675,
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		stats: {
		},
		requires: {
			fabrication: 35
		}
	},
	deathRipley: {
		name: "R.I.P.L.E.Y. MK13",
		sellPrice: 47465,
		icon: require("@/assets/art/fabrication/mechdeathripley.png"),
		stats: {
		},
		requires: {
			fabrication: 38
		}
	},
	darkGygax: {
		name: "Assault Gygax",
		sellPrice: 53880,
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 41
		}
	},
	reticence: {
		name: ".........",
		sellPrice: 56945,
		icon: require("@/assets/art/fabrication/mechreticence.png"),
		stats: {
		},
		requires: {
			fabrication: 44
		}
	},
	honk: {
		name: "H.O.N.K.",
		sellPrice: 83250,
		icon: require("@/assets/art/fabrication/mechhonk.png"),
		stats: {
		},
		requires: {
			fabrication: 50
		}
	},
}
const ASSAULTMECHS = {
	ripleymk2: {
		name: "R.I.P.L.E.Y. MK2",
		sellPrice: 9415,
		icon: require("@/assets/art/fabrication/mechripleymkii.png"),
		stats: {
		},
		requires: {
			fabrication: 11
		}
	},
	firefighter: {
		name: "R.I.P.L.E.Y. MK3",
		sellPrice: 18845,
		icon: require("@/assets/art/fabrication/mechfirefighter.png"),
		stats: {
		},
		requires: {
			fabrication: 19
		}
	},
	durand: {
		name: "Durand",
		sellPrice: 27875,
		icon: require("@/assets/art/fabrication/mechdurand.png"),
		stats: {
		},
		requires: {
			fabrication: 25
		}
	},
	gygax: {
		name: "Gygax",
		sellPrice: 37960,
		icon: require("@/assets/art/fabrication/mechgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 32
		}
	},
	darkGygax: {
		name: "Assault Gygax",
		sellPrice: 53880,
		icon: require("@/assets/art/fabrication/mechdarkgygax.png"),
		stats: {
		},
		requires: {
			fabrication: 41
		}
	},
	seraph: {
		name: "Seraph",
		sellPrice: 67635,
		icon: require("@/assets/art/fabrication/mechseraph.png"),
		stats: {
		},
		requires: {
			fabrication: 47
		}
	},
	phazon: {
		name: "Phazon",
		sellPrice: 73350,
		icon: require("@/assets/art/fabrication/mechphazon.png"),
		stats: {
		},
		requires: {
			fabrication: 50
		}
	}
}
const SPECIALARMOR = {
	armorSpecial1: {
		name: "Xenobiology Enhanced Armor",
		equipmentSlot: "chest",
		sellPrice: 170,
		icon: require("@/assets/art/combat/items/arm_u1.png"), overlay: require("@/assets/art/combat/items/arm_u1_overlay.png"),
		stats: {
			maxHealth: 150,
			evasion: -5,
			protection: 9,
			precision: 8,
			power: 8,
		},
		requires: {
			xenobiology: 10,
			evasion: 25
		}
	},
}

Object.values(BRUTEARMOR).forEach(brutearmor => {
	brutearmor.equipmentSlot = "chest";
	let bruteConstant = Math.max(10, brutearmor.requires.evasion);

	brutearmor.stats.maxHealth = Math.trunc(bruteConstant * 4) + 10;
	brutearmor.stats.power = Math.ceil(bruteConstant * .05);
	brutearmor.stats.evasion = Math.ceil(bruteConstant * 0.45);
	brutearmor.stats.bruteProtection = Math.round(bruteConstant * .2) + 2;
});

Object.values(BURNARMOR).forEach(burnarmor => {
	burnarmor.equipmentSlot = "chest";
	let burnConstant = Math.max(5, burnarmor.requires.evasion);

	burnarmor.stats.maxHealth = Math.trunc(burnConstant * 4) + 10;
	burnarmor.stats.precision = Math.ceil(burnConstant * .05);
	burnarmor.stats.evasion = Math.ceil(burnConstant * 0.4);
	burnarmor.stats.burnProtection = Math.round(burnConstant * .3) + 3;
});

Object.values(MECHS).forEach(mech => {
	mech.equipmentSlot = "chest";
	// mech.liftsRestrictions= ["mech"];
	mech.overlayAppearInBack = true;
	mech.overlay = mech.icon;
	mech.requires.evasion = Math.trunc(mech.requires.fabrication / 5 * 3);
	if (Object.values(mech.stats).length > 0) return;
	mech.stats.moveTime = 6.5;
	mech.stats.maxHealth = (mech.requires.fabrication * 5) + 20;
	mech.stats.precision = Math.ceil(mech.requires.fabrication * .2)+1;
	mech.stats.power = Math.ceil(mech.requires.fabrication * .2)-1;
	mech.stats.evasion = Math.trunc(mech.requires.fabrication * .1);
	mech.stats.protection = Math.trunc(mech.requires.fabrication * .15);
	mech.stats.bruteProtection = Math.trunc(mech.requires.fabrication * .2);
});
Object.values(ASSAULTMECHS).forEach(assaultmech => {
	assaultmech.equipmentSlot = "chest";
	// assaultmech.liftsRestrictions= ["mech"];
	assaultmech.overlayAppearInBack = true;
	assaultmech.overlay = assaultmech.icon;
	assaultmech.requires.evasion = Math.trunc(assaultmech.requires.fabrication / 5 * 3);
	if (Object.values(assaultmech.stats).length > 0) return;
	assaultmech.stats.moveTime = 6.5;
	assaultmech.stats.maxHealth = (assaultmech.requires.fabrication * 5);
	assaultmech.stats.precision = Math.ceil(assaultmech.requires.fabrication * .25) - 1;
	assaultmech.stats.power = Math.ceil(assaultmech.requires.fabrication * .25) + 3;
	assaultmech.stats.evasion = 0;
	assaultmech.stats.protection = Math.trunc(assaultmech.requires.fabrication * .15) - 1;
	assaultmech.stats.burnProtection = Math.trunc(assaultmech.requires.fabrication * .2);
});

export default {
	...BRUTEARMOR,
	...BURNARMOR,
	...MECHS,
	...ASSAULTMECHS,
	...SPECIALARMOR
}