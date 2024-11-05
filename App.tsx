import { Button, StyleSheet, Text, View } from "react-native";
import { Board } from "./components/Board";
import { useState } from "react";

export type GameStatus = "EM_PROGRESSO" | "GANHOU" | "PERDEU";

export default function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("EM_PROGRESSO"); // null = jogando, true = venceu, false = perdeu
  const [key, setKey] = useState(0);

  const handleGameEnd = (status: GameStatus) => {
    setGameStatus(status);
  };

  const restartGame = () => {
    setGameStatus("EM_PROGRESSO");
    setKey(key => key + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campo Minado</Text>
      {gameStatus === "GANHOU" && <Text style={styles.winText}>Você venceu!</Text>}
      {gameStatus === "PERDEU" && <Text style={styles.loseText}>Você perdeu!</Text>}
      <Board key={key} rows={8} cols={8} bombs={6} onGameEnd={handleGameEnd} />
      <Button title="Recomeçar o jogo" onPress={restartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  winText: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  loseText: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
  }
});
