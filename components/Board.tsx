import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { GameStatus } from "../App";
import {
    checkWinCondition,
    generateEmptyBoard,
    openAdjacentCells,
    placeBombs,
} from "../utils/boardUtils";
import { Cell, CellData } from "./Cell";

interface Props {
  rows: number;
  cols: number;
  bombs: number;
  onGameEnd: (status: GameStatus) => void;
}

export type BoardData = Array<Array<CellData>>;

export function Board({ rows, cols, bombs, onGameEnd }: Props) {
  const [board, setBoard] = useState<BoardData>(generateEmptyBoard(rows, cols));
  const [gameOver, setGameOver] = useState(false);
  const [isFirstMove, setIsFirstMove] = useState(true);

  const openCell = (row: number, col: number) => {
    if (gameOver) return;

    let newBoard = [...board];

    // No primeiro movimento, colocamos as bombas no tabuleiro
    if (isFirstMove) {
      newBoard = placeBombs(newBoard, bombs, row, col);
      setIsFirstMove(false);
    }

    newBoard[row][col].isOpen = true;

    if (newBoard[row][col].isBomb) {
      Alert.alert('Game Over', 'Você clicou em uma bomba!');
      setGameOver(true);
      onGameEnd("PERDEU");
    } else {
      // Se a célula não tiver bombas adjacentes, abre automaticamente as adjacentes
      if (newBoard[row][col].adjacentBombs === 0) {
        openAdjacentCells(newBoard, row, col, rows, cols);
      }

      if (checkWinCondition(newBoard, rows, cols)) {
        Alert.alert('Parabéns', 'Você venceu!');
        setGameOver(true);
        onGameEnd("GANHOU");
      }
    }

    setBoard(newBoard);
  };

  const toggleFlag = (row: number, col: number) => {
    if (gameOver) return; // Caso o jogo já acabou não permite a ação

    const newBoard = [...board]; // Imutabilidade
    newBoard[row][col] = {
      ...newBoard[row][col],
      isFlagged: !newBoard[row][col].isFlagged,
    };
    setBoard(newBoard);
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              data={cell}
              onPress={openCell}
              onLongPress={toggleFlag}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
