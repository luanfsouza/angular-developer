type Hero = {
  name: string;
  vulgo: string;
};

console.log("ola 222");

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
let dados2: Array<string> = [];
let dados3: (string | number)[] = [];

//tupla

let boleto: [string, number, number] = ["213", 3, 5];

//datas
let aniversario: Date = new Date();
console.log(aniversario.toString());

//funcoes

function addNumber(x: number, y: number): number {
  return x + y;
}

function callToPhone(phone: number | string): number | string {
  return phone;
}

//async function
async function getDataBase(id: number): Promise<string | number> {
  return "felipe";
}

//interfaces (type x interface)
type Robot = {
  //objetos
  readonly id: number | string;
  name: string;
};
interface Robot2 {
  //classes
  readonly id?: number | string;
  name: string;
  sayHello(): string;
}
const bot: Robot = { id: 1, name: "unidade-01" };
const bot2: Robot2 = {
  id: 1,
  name: "unidade-01",
  sayHello(): string {
    return "e";
  },
};

class Pessoa implements Robot2 {
  // protected id?: string | number;

  id?: string | number;
  name: string;
  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  // private sayHello(): string{
  //   return "rerou";
  // }
  sayHello(): string {
    return "rerou";
  }
}
let p1 = new Pessoa(2, "2");
console.log(p1);

//generics
function concatArray<T>(...items: T[]): T[] {
  return new Array().concat(...items);
}
const numArray = concatArray<number[]>([1, 2], [4]);
numArray.push([3]);

//decorators em cima da classe (n entendi nada)
function ExibirNome(target: any) {
  console.log(target);
}
@ExibirNome
class Funcionario {}
ExibirNome(Funcionario);

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}
function minLength(length: number) {
  return (target: any, key: string) => {
    console.log(target[key]);
    // console.log(key);
  };
}
@apiVersion("1.10")
class Api {
  @minLength(3)
  name?: string;
  constructor(name?: string) {
    this.name = name;
  }
}
const api = new Api("minha api");
console.log(api);
