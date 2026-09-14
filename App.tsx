import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //string
  const [name, setName] = useState<string>("Hoi dan it");
  //number
  const [age, setAge] = useState<number>(30);
  //null , undefined, boolean
  const test = false;
  //object, array
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Tan", age: 30
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        {/* null , undefined, boolean nó sẽ ko hiển thị ra màn hình gì cả */}
        <Text style={styles.text}>{person.name}, {JSON.stringify(person)} tuổi</Text>
        <TextInput
          onChangeText={(v => console.log)}
          value={name}
          autoCapitalize='none'
          // keyboardType='numeric'
          multiline
          maxLength={2}
          // autoCorrect={false}
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10,
          }} />

      </View>
      <Text style={styles.text}>Hello World  by Tan
        <TextInput />

        <Text style={styles.hoidanit}>hoidanit</Text>
      </Text>

      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 20, color: 'red' },
  hoidanit: { fontSize: 16, color: 'blue' },
  container: {
    marginTop: 120,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
