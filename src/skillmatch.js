// Card 002 - POO BASE: Classe Vaga
class Vaga {
  constructor(titulo, empresa, habilidades, nivel, salario) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.habilidadesNecessarias = habilidades;
    this.nivel = nivel;
    this.salario = salario;
  }

  exibirResumo() {
    console.log(`----------------------------------`);
    console.log(`Vaga: ${this.titulo}`);
    console.log(`Empresa: ${this.empresa}`);
    console.log(`Nível: ${this.nivel}`);
    console.log(`Salário: R$ ${this.salario}`);
    console.log(`Skills: ${this.habilidadesNecessarias.join(', ')}`);
    console.log(`----------------------------------`);
  }
}

// TESTE: Criando uma vaga pra ver se funciona
const vaga1 = new Vaga(
  "Dev Frontend Jr", 
  "Tech Solutions", 
  ["JavaScript", "React", "CSS"], 
  "Júnior", 
  4500
);

vaga1.exibirResumo();
// Card 003 - POO BASE: Classe Candidato
class Candidato {
  constructor(nome, habilidades, nivel, pretensaoSalarial) {
    this.nome = nome;
    this.habilidades = habilidades;
    this.nivel = nivel;
    this.pretensaoSalarial = pretensaoSalarial;
  }

  exibirPerfil() {
    console.log('-----------------------------');
    console.log(`Candidato: ${this.nome}`);
    console.log(`Nível: ${this.nivel}`);
    console.log(`Pretensão: R$ ${this.pretensaoSalarial}`);
    console.log(`Skills: ${this.habilidades.join(', ')}`);
    console.log('-----------------------------');
  }
}

// TESTE do card 003 - pode deixar junto do teste da Vaga
const devAllana = new Candidato(
  "Allana Brito",
  ["JavaScript", "Node.js", "Git", "React"],
  "Júnior",
  4500
);

devAllana.exibirPerfil();





