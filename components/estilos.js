import {StyleSheet, ImageBackground} from 'react-native'

export const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btntext: {
    fontSize: 35,
    color: 'white'
  },
  calculationText: {
    fontSize: 20,
    color: 'white'
  },
  resultText: {
    fontSize: 35,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    fontSize: 25
  },
  result: {
    flex: 2,
    backgroundColor: '#4b4e53',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1.5,
    backgroundColor: '#2f3439',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flexGrow: 5,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#2f3439'
  },
  operations: {
    backgroundColor: '#ec4b05',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  white: {
    color: 'white'
  }
});