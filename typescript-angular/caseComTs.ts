type Hero = {
  name: string;
  vulgo: string;
  telefone: string;
};

function ligarPara(heroi: Hero) {
  console.log("ligando para: " + heroi.telefone);
}
const myHero: Hero = {
  name: "k",
  vulgo: "Joao vulgo",
  telefone: "1131441",
};
ligarPara({name: "lucas", vulgo: "lucas vulgo", telefone: "1212" });
ligarPara(myHero);