import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: ""
    }
    this.operations = ['D', '+', '-', '*', '/']
  }

  calculateResult(){
    const text = this.state.resultText
    console.log(text, eval(text))
    this.setState({
      calculationText: this.state.resultText,
      resultText: eval(text).toString()
    })
  }

  buttonPressed(text) {
    console.log(text)

    if(text == '=') {
      return this.calculateResult()
    }
    
    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation) {
    switch(operation) {
      case 'D':
        console.log(this.state.resultText)
        this.text = this.state.resultText.split('')
        this.text.pop()
        this.setState({
          resultText: this.text.join('')
        })
        break
      case '+':
      case '*':
      case '/':
        this.lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(this.lastChar)>0) return
        if(this.state.resultText == "") return
        this.setState({
          resultText: this.state.resultText + operation
        })
        break
      case '-':
        this.lastChar = this.state.resultText.split('').pop()
        if(this.lastChar =='-') return
        this.setState({
          resultText: this.state.resultText + operation
        })
        break
    }
  }

  render() {

    let rows = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], [".",0,"="]]
    for(let i=0; i<4; i++) {
      let row = []
      for(let j=0; j<3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btntext}> {nums[i][j]} </Text>
          </TouchableOpacity>
        )
      }
      rows.push(
        <View style={styles.row}>
          {row}
        </View>
      ) 
    }

    
    let ops = []
    for(let i=0; i<5; i++) {
      ops.push(
        <TouchableOpacity onPress={() => this.operate(this.operations[i])} style={styles.btn}>
          <Text style={[styles.btntext, styles.white]}> {this.operations[i]} </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}> {this.state.calculationText} </Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}> {this.state.resultText} </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
})













