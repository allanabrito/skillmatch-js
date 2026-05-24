# 💼 SkillMatch - Simulador de Match de Vagas

## 📚 Descrição

Sistema em JavaScript puro que calcula a compatibilidade entre candidatos e vagas. Desenvolvido para praticar conceitos de POO, lógica, funções assíncronas e manipulação de dados no console. Projeto base para a matéria de Programação.

## 🚀 Funcionalidades

- **Cadastro de Vagas** com título, empresa, skills, nível e salário
- **Cadastro de Candidatos** com nome, skills, nível e pretensão salarial
- **Algoritmo de Match** que calcula % de compatibilidade entre candidato e vaga
- **Filtro por Nível** para mostrar só vagas Júnior, Pleno, etc
- **Ranking de Vagas** ordenado da maior para menor compatibilidade
- **Simulação de API** usando Promises e Async/Await com delay de 2s
- **Herança** com classe `CandidatoPremium` e `VagaFrontEnd`
- **Closure** para contar quantas análises foram feitas
- **Mensagens customizadas** no console indicando se deve aplicar ou estudar mais

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+**
- **Node.js** para rodar no terminal
- **POO**: Classes, Herança, Métodos
- **Assíncrono**: Promises, Async/Await, setTimeout
- **Lógica**: Loops, Condicionais, Array methods como `filter`, `sort`, `includes`

## 💻 Como Executar

1. Tenha o Node.js instalado na máquina
2. Salve o código em um arquivo `index.js`
3. Abra o terminal na pasta do arquivo
4. Execute o comando: `node index.js`
5. Veja toda a análise rodando no console

## 📌 Cards Implementados no Código

| Card | Conceito           | O que faz                                       |
| ---- | ------------------ | ----------------------------------------------- |
| 002  | Classe             | `class Vaga` com construtor e método            |
| 003  | Condicionais + POO | `function recomendarEstudo` + `class Candidato` |
| 004  | Herança            | `class CandidatoPremium extends Candidato`      |
| 005  | Algoritmo          | `function calcularMatch` retorna %              |
| 006  | Filtro             | `function filtrarVagasPorNivel`                 |
| 007  | Ranking            | `.sort()` para ordenar vagas por match          |
| 009  | Closure            | `function criarContadorDeAnalises`              |
| 011  | Promise            | `function buscarVagasDaAPI` com `setTimeout`    |
| 012  | Async/Await        | `async function iniciarSistema`                 |
| 015  | Herança            | `class VagaFrontEnd extends Vaga`               |
| 016  | Função             | `function calcularCompatibilidade`              |
| 017  | Callback           | `function simularBuscaVagas`                    |

## 👩‍💻 Desenvolvido por

**Allana Brito**  
Projeto acadêmico - Análise e Desenvolvimento de Sistemas

## 📝 Próximos Passos

- [ ] Criar interface gráfica com **HTML e CSS** para mostrar os resultados
- [ ] Separar o código em arquivos por funcionalidade
- [ ] Adicionar mais vagas e candidatos para teste

---
Confira o SkillMatch funcionando na prática, link do vídeo: [YouTube](https://youtu.be/SKVijZ7IXt8)



_Projeto feito com ❤️ para praticar JavaScript puro_
