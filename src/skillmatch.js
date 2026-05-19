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
// Card 004 - HERANÇA: Classe CandidatoPremium
class CandidatoPremium extends Candidato {
  constructor(nome, habilidades, nivel, pretensaoSalarial, skillsDestaque) {
    super(nome, habilidades, nivel, pretensaoSalarial); // pega tudo do pai
    this.skillsDestaque = skillsDestaque; // adiciona coisa nova
  }

  exibirPerfilPremium() {
    this.exibirPerfil(); // usa o método que já existe no pai
    console.log(`Destaques: ${this.skillsDestaque.join(', ')}`);
    console.log('--- PERFIL PREMIUM ---');
  }
}

// TESTE: Criando um candidato premium
const devPremium = new CandidatoPremium(
  "Allana Brito",
  ["JavaScript", "Node.js", "Git", "React"],
  "Júnior",
  4500,
  ["GitHub 50+ stars", "Projeto Open Source"]
);

devPremium.exibirPerfilPremium();
// Card 005 - ALGORITMO DE MATCH
function calcularMatch(candidato, vaga) {
  let skillsEmComum = 0;
  
  // Percorre cada skill do candidato
  for (let skill of candidato.habilidades) {
    // Se a vaga também pede essa skill, soma ponto
    if (vaga.habilidadesNecessarias.includes(skill)) {
      skillsEmComum++;
    }
  }
  
  // Calcula %: skills em comum / total de requisitos da vaga * 100
  let porcentagem = (skillsEmComum / vaga.habilidadesNecessarias.length) * 100;
  return porcentagem.toFixed(0); // retorna sem casas decimais
}

// TESTE: 3 vagas fictícias pra comparar com seu perfil
const vagaFrontend = new Vaga("Frontend Jr", "Tech Solutions", ["HTML", "CSS", "JavaScript", "React"], "Júnior", 3500);
const vagaBackend = new Vaga("Backend Jr", "Data Corp", ["Node.js", "SQL", "API", "Git"], "Júnior", 4000);
const vagaFullstack = new Vaga("Fullstack Jr", "Startup X", ["JavaScript", "Node.js", "React", "Git", "SQL"], "Júnior", 5000);

// Testando o match com seu perfil premium
console.log("--- ALGORITMO DE MATCH ---");
console.log(`Match com ${vagaFrontend.titulo}: ${calcularMatch(devPremium, vagaFrontend)}%`);
console.log(`Match com ${vagaBackend.titulo}: ${calcularMatch(devPremium, vagaBackend)}%`);
console.log(`Match com ${vagaFullstack.titulo}: ${calcularMatch(devPremium, vagaFullstack)}%`);
console.log("--------------------------");
// Card 006 - FILTRO POR NÍVEL
function filtrarVagasPorNivel(candidato, listaDeVagas) {
  let vagasCompativeis = [];
  
  for (let vaga of listaDeVagas) {
    // Se o nível da vaga bate com o nível do candidato
    if (vaga.nivel === candidato.nivel) {
      vagasCompativeis.push(vaga);
    }
  }
  
  return vagasCompativeis;
}

// TESTE: Juntar todas as vagas num array
const todasAsVagas = [vagaFrontend, vagaBackend, vagaFullstack];

// Filtrar só as vagas Júnior pra você
const vagasJunior = filtrarVagasPorNivel(devPremium, todasAsVagas);

console.log("--- VAGAS FILTRADAS POR NÍVEL ---");
for (let vaga of vagasJunior) {
  let match = calcularMatch(devPremium, vaga);
  console.log(`${vaga.titulo} | ${vaga.empresa} | Match: ${match}%`);
}
console.log("---------------------------------");
// Card 007 - RANKING POR MATCH
// Pega as vagas filtradas e ordena por % de match
vagasJunior.sort((vagaA, vagaB) => {
  let matchA = calcularMatch(devPremium, vagaA);
  let matchB = calcularMatch(devPremium, vagaB);
  return matchB - matchA; // Maior primeiro
});

console.log("--- RANKING DE VAGAS RECOMENDADAS ---");
for (let i = 0; i < vagasJunior.length; i++) {
  let vaga = vagasJunior[i];
  let match = calcularMatch(devPremium, vaga);
  console.log(`${i + 1}º Lugar: ${vaga.titulo} | ${match}% Match`);
}
console.log("-------------------------------------");
function acharVagaMaisCompativel(candidato, vagas) {
  // Ordena da maior pra menor
  vagas.sort((a, b) => {
    return calcularMatch(candidato, b) - calcularMatch(candidato, a);
  });

  return vagas[0]; // Retorna só a primeira = melhor match
}
// Testando o Card 008
const melhorVaga = acharVagaMaisCompativel(devPremium, vagasJunior);

console.log("--- MELHOR VAGA PRA VOCÊ ---");
console.log(`${melhorVaga.titulo} | ${melhorVaga.empresa}`);
console.log(`Match: ${calcularMatch(devPremium, melhorVaga)}%`);
console.log("Essa é sua vaga mais compatível!");
console.log("----------------------------");
// Card 009 - CLOSURE: CONTADOR DE ANÁLISES
function criarContadorDeAnalises() {
  let totalDeAnalises = 0; // Variável "presa" na closure
  
  return function() {
    totalDeAnalises++; // Incrementa a cada chamada
    console.log(`Análise #${totalDeAnalises} executada`);
    return totalDeAnalises;
  }
}

// Criando o contador
const contarAnalise = criarContadorDeAnalises();

// Testando: toda vez que rodar uma análise, chama o contador
contarAnalise(); // Análise #1
contarAnalise(); // Análise #2 
contarAnalise(); // Análise #3

console.log("--- TESTE DO CLOSURE ---");
console.log("O contador lembrou de todas as execuções!");
console.log("------------------------");


