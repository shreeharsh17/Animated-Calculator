import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

function CalcButton({ title, onPress }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.buttonBox, animatedStyle]}>
      <Pressable
        style={styles.button}
        onPressIn={() => {
          scale.value = withSpring(0.88);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

export default function App() {
  const [display, setDisplay] = useState('0');

  const displayScale = useSharedValue(1);

  const displayStyle = useAnimatedStyle(() => ({
    transform: [{ scale: displayScale.value }],
  }));

  const pressNumber = (num) => {
    displayScale.value = withTiming(0.95, { duration: 100 });

    setTimeout(() => {
      displayScale.value = withTiming(1, { duration: 100 });
    }, 100);

    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const clear = () => {
    setDisplay('0');
  };

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.displayBox, displayStyle]}>
        <Text style={styles.display}>{display}</Text>
      </Animated.View>

      <View style={styles.row}>
        <CalcButton title="1" onPress={() => pressNumber('1')} />
        <CalcButton title="2" onPress={() => pressNumber('2')} />
        <CalcButton title="3" onPress={() => pressNumber('3')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="4" onPress={() => pressNumber('4')} />
        <CalcButton title="5" onPress={() => pressNumber('5')} />
        <CalcButton title="6" onPress={() => pressNumber('6')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="7" onPress={() => pressNumber('7')} />
        <CalcButton title="8" onPress={() => pressNumber('8')} />
        <CalcButton title="9" onPress={() => pressNumber('9')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="0" onPress={() => pressNumber('0')} />
        <CalcButton title="AC" onPress={clear} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    padding: 20,
  },

  displayBox: {
    backgroundColor: '#222',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },

  display: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  },

  row: {
    flexDirection: 'row',
  },

  buttonBox: {
    flex: 1,
    margin: 5,
  },

  button: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});