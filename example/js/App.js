import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import ToastView from './ToastView';

class App extends Component {
  constructor(props) {
    super(props);
    this.toastView1 = undefined;
    this.toastView2 = undefined;
    this.toastView3 = undefined;
  }

  _onPressBtnShowToast1 = () => {
    this.toastView1.show('Hello!', 800, 400);
  };

  _onPressBtnShowToast2 = () => {
    this.toastView2.show('Toast by default setting.');
  };

  _onPressBtnShowToast3 = () => {
    this.toastView3.show(`Welcome to React Native! This page will help you install React Native on your system, so that you can build apps with it right away. If you already have React Native installed, you can skip ahead to the Tutorial.`, 1500, 200);
  };

  _onDisappear = (id) => {
    Alert.alert("Toast", `Callback for ID: ${id}`);
  };

  render() {
    return (
      <View style={styles.containerDefault}>
        <TouchableOpacity style={styles.containerButton}
                          onPress={this._onPressBtnShowToast1}>
          <Text style={styles.text}>
            Toast 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton}
                          onPress={this._onPressBtnShowToast2}>
          <Text style={styles.text}>
            Toast 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton}
                          onPress={this._onPressBtnShowToast3}>
          <Text style={styles.text}>
            Toast 3
          </Text>
        </TouchableOpacity>

        <ToastView id={1}
                   ref={(self) => this.toastView1 = self}
                   styleBoard={{backgroundColor: 'blue', borderRadius: 25}}
                   styleText={{fontFamily: (Platform.android ? 'Roboto': 'Chalkduster'), fontSize: 20, color: 'yellow'}}
                   positionFromTop={.1}
        />
        <ToastView id={2}
                   ref={(self) => this.toastView2 = self}
                   positionFromBottom={.5}
        />
        <ToastView id={3}
                   ref={(self) => this.toastView3 = self}
                   styleBoard={{backgroundColor: 'deepskyblue'}}
                   styleText={{fontFamily: (Platform.android ? 'Roboto': 'Apple SD Gothic Neo'), fontSize: 16, color: 'lightcyan'}}
                   onDisappear={this._onDisappear}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDefault: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'bisque',
    flexDirection: 'row'
  },
  containerButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    marginTop: 200,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
});

module.exports = App;