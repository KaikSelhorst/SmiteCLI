const chalk = require("chalk");

const utils = {
  showHelp() {
    const usage = chalk.hex("#E54")(
      "\n\nUsage:  smite <god-name> starts a search for a build.\n\tEx: smite Xing-Tian"
    );
    const version = `\t--version\tShow version number.\t\t[boolean]\r`;
    const base = `    -b, --base\t\tList all Smite gods.\t\t[boolean]\r`;
    const help = `\t--help\t\tShow help.\t\t\t[boolean]\r`;

    console.log(`${usage}\nOptions:\r\n${version}\n${base}\n${help}`);
  },
  base() {
    const arr = [
      "Achilles",
      "Agni",
      "Ah Muzen Cab",
      "Ah Puch",
      "Amaterasu",
      "Anhur",
      "Anubis",
      "Ao Kuang",
      "Aphrodite",
      "Apollo",
      "Arachne",
      "Ares",
      "Artemis",
      "Artio",
      "Athena",
      "Awilix",
      "Baba Yaga",
      "Bacchus",
      "Bakasura",
      "Baron Samedi",
      "Bastet",
      "Bellona",
      "Cabrakan",
      "Camazotz",
      "Cerberus",
      "Cernunnos",
      "Chaac",
      "Chang'e",
      "Charybdis",
      "Chernobog",
      "Chiron",
      "Chronos",
      "Cliodhna",
      "Cthulu",
      "Cu Chulainn",
      "Cupid",
      "Da Ji",
      "Danzaburou",
      "Discordia",
      "Erlang Shen",
      "Eset",
      "Fafnir",
      "Fenrir",
      "Freya",
      "Ganesha",
      "Geb",
      "Gilgamesh",
      "Guan Yu",
      "Hachiman",
      "He Bo",
      "Heimdallr",
      "Hel",
      "Hera",
      "Hercules",
      "Horus",
      "Hou Yi",
      "Hun Batz",
      "Izanami",
      "Janus",
      "Jing Wei",
      "Jormungandr",
      "Kali",
      "Khepri",
      "King Arhur",
      "Kukulkan",
      "Kumbhakharna",
      "Kuzenbo",
      "Loki",
      "Medusa",
      "Mercury",
      "Merlin",
      "Morgan Le Fay",
      "Mulan",
      "Ne Zha",
      "Neith",
      "Nemesis",
      "Nike",
      "Nox",
      "Nu Wa",
      "Odin",
      "Olorun",
      "Osiris",
      "Pele",
      "Persephone",
      "Poseidon",
      "Ra",
      "Raijin",
      "Rama",
      "Ratatoskr",
      "Ravana",
      "Scylla",
      "Serqet",
      "Set",
      "Skadi",
      "Sobek",
      "Sol",
      "Sun Wukong",
      "Susano",
      "Sylvanus",
      "Terra",
      "Thanatos",
      "The Morrigan",
      "Thor",
      "Thoth",
      "Tiamat",
      "Tsukuyomi",
      "Tyr",
      "Ullr",
      "Vamana",
      "Vulcan",
      "Xbalanque",
      "Xing Tian",
      "Yemoja",
      "Ymir",
      "Zeus",
      "Zhong Kui",
    ];

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(" ", "-").padEnd(15, " ");
    }

    while (arr.length > 0) {
      newArr.push(...arr.splice(0, 5), "\n");
    }
    console.log(chalk.hex("#E54")("\nCurrent god of smite are these:\n"));
    console.log(newArr.join(""));
  },
};

module.exports = utils;
