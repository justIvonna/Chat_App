const randomName = () => {
  const names = [
    "Majstor Fantač",
    "Nick Praskaton",
    "Teddy Bear",
    "Mickey Mouse",
    "Minnie Mouse",
    "Buba Mara",
    "Mali leteći medvjedići",
    "Cipelići",
    "Aladdin",
    "Papagaj Jago",
    "Duh iz lampe",
    "Profesor Baltazar",
    "Pčelica Maja",
    "Lolek",
    "Bolek",
    "Banane u pidžami",
    "Medo Brundo",
    "Tintilinić",
    "Mornar Popaj",
    "Vampir Ernest",
    "Nogalo",
    "Kod Klaudije",
    "Kakav Nered",
    "Zvonko",
    "Brum Brum",
    "Tom i Jerry",
    "Cico Štos",
    "Zekoslav Mrkva",
    "Homer Simpson",
    "Charlie Brown",
    "Ptica trkačica",
    "Scooby Doo",
    "Pink Panter",
    "Donald Duck",
    "Dekster",
  ];
  const namesRandom = names[Math.floor(Math.random() * names.length)];
  return namesRandom;
};
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};
export { randomColor, randomName };
