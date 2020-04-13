import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'
import {estilos} from './components/estilos'

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
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={estilos.btn}>
            <Text style={estilos.btntext}> {nums[i][j]} </Text>
          </TouchableOpacity>
        )
      }
      rows.push(
        <View style={estilos.row}>
          {row}
        </View>
      ) 
    }

    
    let ops = []
    for(let i=0; i<5; i++) {
      ops.push(
        <TouchableOpacity onPress={() => this.operate(this.operations[i])} style={estilos.btn}>
          <Text style={[estilos.btntext, estilos.white]}> {this.operations[i]} </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={estilos.container}>
        <View style={estilos.calculation}>
          <Text style={estilos.calculationText}> {this.state.calculationText} </Text>
        </View>
        <View style={estilos.result}>
          <Text style={estilos.resultText}> {this.state.resultText} </Text>
        </View>
        <View style={estilos.buttons}>
          <View style={estilos.numbers}>
            {rows}
          </View>
          <View style={estilos.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}
