import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';


export default function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={ require('./assets/icon.png') } 
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, width: 200 }}
        placeholder="You can type in me"
        onChangeText={
          (text) => {
            setText(text);
          }
        }
        defaultValue={text}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text}
      </Text>

      <TouchableOpacity
        style={styles.button}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'blue'
  }
});
