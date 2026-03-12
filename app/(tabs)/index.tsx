import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  const [milage, setMilage] = useState<string | null>(null);

  const calculateMilage = () => {
    const d = parseFloat(distance);
    const f = parseFloat(fuel);

    if (isNaN(d) || isNaN(f) || f === 0) {
      alert("Please enter valid numbers");
      return;
    }

    const result = d / f;
    setMilage(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mileage Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Distance Travelled (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <TextInput
        style={styles.input}
        placeholder="Fuel Used (litres)"
        keyboardType="numeric"
        value={fuel}
        onChangeText={setFuel}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" color="#000" onPress={calculateMilage} />
      </View>

      {milage !== null && (
        <Text style={styles.result}>Mileage: {milage} km/l</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
    marginTop: 15,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },

  buttonContainer: {
    width: "80%",
    marginTop: 25,
  },

  result: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
