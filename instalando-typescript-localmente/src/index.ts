type Hero = {
  name: string;
  vulgo: string;
};

console.log("ola mundo");

//comum
let ligado: boolean = false;
let nome: string = "luan";
let idade: number = 22;
let altura: number = 1.9;

//especial
let nulo: null | number = null;
nulo = 2;
let identidade: undefined = undefined;

//geral
let qualquerCoisa: any = 2;
qualquerCoisa = "ola";
function executaFuncao(): void {}

//objetos
let produto: object = { preco: 22, quantidade: 1000 };
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
let meuProduto: ProdutoLoja = { nome: "sapato", preco: 22.0, unidades: 20000 };

//arrays

let dados: string[] = ["joao", "marcelo", "lucia"];
let dados2: Array<string> = []
let dados3: (string | number)[]= [];

//tupla

let boleto:[string, number, number] = ["213", 3, 5];

//datas
let aniversario:Date = new Date()
console.log(aniversario.toString())

//funcoes

function addNumber(x:number,y:number):number{
    return x+y;
}

function callToPhone(phone: number | string): number | string{
    return phone;
}