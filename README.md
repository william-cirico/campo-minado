
# Campo Minado em React Native

Este é um projeto de um jogo de Campo Minado (Minesweeper) desenvolvido em React Native. O objetivo do jogo é encontrar todas as células sem bombas em um tabuleiro, evitando explosões. 

## Índice

- [Campo Minado em React Native](#campo-minado-em-react-native)
  - [Índice](#índice)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Instalação](#instalação)
  - [Como Jogar](#como-jogar)
  - [Estrutura de Diretórios](#estrutura-de-diretórios)
  - [Componentes Principais](#componentes-principais)
  - [Licença](#licença)

## Sobre o Projeto

O jogo de Campo Minado é um clássico de estratégia e sorte, onde o jogador precisa abrir todas as células de um tabuleiro sem explodir nenhuma bomba. O jogo foi desenvolvido em React Native para ser jogado em dispositivos móveis.

## Instalação

Para rodar o projeto em seu dispositivo ou emulador, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/campo-minado-react-native.git
   cd campo-minado-react-native
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto:**
   ```bash
   npx react-native run-android   # Para dispositivos Android
   npx react-native run-ios       # Para dispositivos iOS
   ```

## Como Jogar

1. Toque em uma célula para abrir.
2. Pressione longamente em uma célula para marcar/desmarcar uma bandeira.
3. Abra todas as células que não possuem bombas para vencer o jogo.
4. Se abrir uma célula com bomba, o jogo termina e você pode tentar novamente clicando no botão "Recomeçar Jogo".

## Estrutura de Diretórios

O projeto está organizado da seguinte forma:

```plaintext
src/
├── components/
│   ├── Board.tsx            # Componente do tabuleiro de jogo
│   ├── Cell.tsx             # Componente de célula individual
├── utils/
│   ├── boardUtils.ts        # Funções utilitárias para o tabuleiro (colocação de bombas, contagem de bombas adjacentes)
└── App.tsx                  # Arquivo principal que renderiza o jogo
```

## Componentes Principais

- **App**: Componente principal do jogo que gerencia o estado geral do jogo e o botão de reinício.
- **Board**: Componente que representa o tabuleiro do jogo e renderiza as células.
- **Cell**: Componente individual de célula que exibe o conteúdo da célula e responde aos eventos de toque e toque longo.

## Licença

Este projeto está licenciado sob a licença MIT.
