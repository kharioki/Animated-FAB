import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

AntDesign.loadFont();
Entypo.loadFont();

export default function FloatingButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary]}>
          <AntDesign name="hearto" size={20} color="#f02a4b" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary]}>
          <Entypo name="thumbs-up" size={20} color="#f02a4b" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary]}>
          <Entypo name="location-pin" size={20} color="#f02a4b" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.menu]}>
          <AntDesign name="plus" size={24} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    // position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#f02a4b',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: '#f02a4b',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
  },
});
