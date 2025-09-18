import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { data } from "../data/todos";
export default function Index() {
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
    <SafeAreaView style={StyleSheet.container}>
      <View style={StyleSheet.inputContainer}>
        <TextInput
          style={StyleSheet.input}
          placeholder="Add a new Todo"
          placeholderTextColor="gray"
          value={Text}
        />
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>
      <FlatList />
    </SafeAreaView>
  );
}
