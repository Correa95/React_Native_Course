import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { data } from "../data/todos";

function Index() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  const addTodos = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id: newId, title: text, completed: false, ...todos }]);
      setText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new Todo"
          placeholderTextColor="gray"
          value={Text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodos} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
      <FlatList />
    </SafeAreaView>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#212121 ",
  },
  inputContainer: {},
  input: {},
  addButton: {},
  addButtonText: {},
});
