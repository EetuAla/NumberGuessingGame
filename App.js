import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [titleText, setTitleText] = useState("Guess a number between 1-100");
  const [text, setText] = useState(null);
  const [randomNumber, setRandomNumber] = useState();
  const [count, setCount] = useState(1);

  const handleButtonPress = () => {
    setCount(count + 1);

    if (text < randomNumber) {
      setTitleText("Your guess " + text + " is too low");
    } else if (text > randomNumber) {
      setTitleText("Your guess " + text + " is too high");
    } else {
      Alert.alert("You guessed the right number in " + count + " times");
      setCount(1);
      setTitleText("Guess a number between 1-100");
      makeRandomNumber();
    }
  };

  useEffect(() => {
    makeRandomNumber();
  }, []);

  const makeRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  };

  return (
    <View style={styles.container}>
      <Text>{titleText}</Text>
      <TextInput
        style={{ width: 100, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="Make a guess" onPress={handleButtonPress} />
      <StatusBar style="auto" />
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
});
