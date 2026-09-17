import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //string
  const [name, setName] = useState<string>("Hoi dan it");
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn ReactJs" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ]);
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
          onChangeText={(v) => setName(v)} // Hoặc viết ngắn gọn: onChangeText={setName}
          value={name}
          autoCapitalize="none"
          multiline={true}
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10,
            minHeight: 80,
          }}
        />

      </View>
      <Button title="Click me" onPress={() => alert("Button clicked!")} />
      <View style={{ marginTop: 20 }}>
        {todoList.map((todo => (
          <Text style={styles.todo}>{todo.title}</Text>
        )))}
      </View>
      <Text style={styles.text}>Hello World  by Tan
        <TextInput />

        <Text style={styles.hoidanit}> hoidanit </Text>
      </Text>

      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: { fontSize: 30, color: 'red', backgroundColor: 'yellow', marginBottom: 10, padding: 10 },
  text: { fontSize: 20, color: 'red' },
  hoidanit: { fontSize: 16, color: 'blue' },
  container: {
    padding: 20,
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
