import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    <View style={styles.header}>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>⛽</Text>
        </View>

        <View style={styles.headerText}>
          <Text style={styles.title}>Mileage Calculator</Text>
          <Text style={styles.subTitle}>Metric Fuel Tracker</Text>
        </View>
        
      </View>
       
        
      

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Distance Travelled (km)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 100"
          placeholderTextColor="#fff"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Fuel Used (Lt)</Text>
        <TextInput
          style={styles.input2}
          placeholder="e.g. 10(km)"
          placeholderTextColor="#fff"
          keyboardType="numeric"
          value={fuel}
          onChangeText={setFuel}
        />
        <Text style={styles.inputLabel}>Fuel Price (rs)</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. 90.50(rs)"
          placeholderTextColor="#fff"
          keyboardType="numeric"
          value={fuel}
          onChangeText={setFuel}
        />
      </View>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Trip Label </Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Mumbai - Pune "
          placeholderTextColor="#fff"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />
      </View>

     <TouchableOpacity style={styles.buttonContainer} onPress={calculateMilage}>
          <Text style={styles.buttonText}>Calculate -></Text>
        </TouchableOpacity>

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
    backgroundColor: "#b1ec6f",
    padding: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",

    color: "b1ec6f",
  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "#a79696ff",
    color:"#000000ff",
    borderWidth: 4,
    marginTop: 15,
    fontSize: 16,
    paddingHorizontal: 18,
    borderRadius: 18,
    backgroundColor: "",
  },

  input2: {
    width: "80%",
    height: 50,
    borderColor: "#a79696ff",
    color:"#000000ff",
    borderWidth: 4,
    marginTop: 15,
    fontSize: 16,
    paddingHorizontal: 18,
    borderRadius: 18,
    backgroundColor: "#f5834e",
    marginBottom: 25,
  },
buttonContainer: {
    width: "95%",
    marginTop: 25,
    paddingVertical: 18,
    backgroundColor: "#174716",
    borderRadius: 20,
    alignItems: "center",
     borderColor: "gray",
     borderWidth: 2,
  
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
   
  },

  result: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "#110e0e",
  },

  header: {
    paddingTop: 65,
    paddingBottom: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#212121",
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginTop: 15,
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 30,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  header: {
    paddingTop: 65,
    paddingBottom: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    paddingLeft: 30,
  },
  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffffff",
    borderRadius: 50,
    padding: 10,
  },

  headerIconText: {
    fontSize: 22,
  },
  headerText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 5,
  },
  subTitle:{
    color:"#000000ff"
  }

  
});
