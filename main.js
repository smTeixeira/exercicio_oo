function Pessoa(nome) {
    this.nome = nome;
    this.tempo = function () {
        console.log(this.nome + " está a 1 ano na empresa");
    }
    this.formacao = function () {
        console.log(this.nome + " é formado em Engenharia de Software");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);
}

function Nacionalidade(estado, pais) {
    this.estado = estado;
    this.pais = pais;
}

const pessoa1 = new Pessoa("Charles");
const nacionalidade1 = new Nacionalidade("Paraná", "Brasil");
const funcionario1 = new Funcionario("Charles", "Desiner", 3000);

pessoa1.formacao();
pessoa1.tempo();

console.log(funcionario1);
console.log(nacionalidade1);