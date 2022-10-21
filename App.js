import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const image = require('./assets/pattern.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.centro}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
              width: 200,
            }}
            placeholder="You can type in me"
            onChangeText={(text) => {
              setText(text);
            }}
            defaultValue={text}
          />

          <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
          <Text style={{ padding: 10, fontSize: 42 }}>{count}</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={styles.buttonText}>Click me!</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.button}
            underlayColor="FFF"
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={styles.buttonText}>Click me!</Text>
          </TouchableHighlight>

        </View>




      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#F88',
  },
  buttonText: {
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  centro: {
    alignItems: "center",
  },
});
