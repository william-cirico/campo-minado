import { StyleSheet, TouchableOpacity, Text } from "react-native";

export interface CellData {
  isBomb: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  adjacentBombs: number;
}

interface Props {
  row: number;
  col: number;
  data: CellData;
  onPress: (row: number, col: number) => void;
  onLongPress: (row: number, col: number) => void;
}

export function Cell({ row, col, data, onPress, onLongPress }: Props) {
	const handlePress = () => {
		 // Verifica se a célula não está aberta e não está marcada como bandeira
		if (!data.isOpen && !data.isFlagged) {
			onPress(row, col);
		}
	}

	const handleLongPress = () => {
		if (!data.isOpen) {
			onLongPress(row, col);
		}
	}

  return (
    <TouchableOpacity
			onPress={handlePress}
			onLongPress={handleLongPress}
      style={[styles.cell, data.isOpen ? styles.open : styles.closed]}
    >
      {data.isOpen ? (
        <Text style={styles.cellText}>
          {data.isBomb
            ? "💣"
            : data.adjacentBombs > 0
            ? data.adjacentBombs
            : ""}
        </Text>
      ) : data.isFlagged ? (
        <Text style={styles.cellText}>🚩</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  open: {
    backgroundColor: "#ccc",
  },
  closed: {
    backgroundColor: "#999",
  },
  cellText: {
    fontSize: 24,
  },
});
