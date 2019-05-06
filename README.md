# Caclculator app

A simple calculator app written with React Native and Expo. The project used for educational purposes in [React Native from scratch course](https://github.com/triplea24/kntu-react-native-class) in **K.N. Toosi university of technology.**

## Assignment

Write a component called `Caclulator` which contains the whole caluclator module. Use it in `CalculatorScreen` and add additional props if you like. The desired code for `CalculatorScreen` would be as described bellow:
	
	import { Calculator } from '../components';
	
	export default class CalculatorScreen extends React.Component{
		render(){
			return(
				<Calculator />
			);
		}
	}

1. Write `Calculator` in `/src/components/Calculator.js`
2. Export `Calculaor` in `/src/components/index.js`
3. Try to compute simple inputs such as `2+2` and etc.

#### Bonus
- Add additional props such as `mode` to `Calculator`
- Use complex mathematical expressions

## Sessions

1. [Simple caculator using basic React Native components](https://github.com/triplea24/kntu-react-native-calculator/tree/57359b413d4d50d3db1ffff4f2a1db177ff891c0)
2. [Using our own written custom component for Button](https://github.com/triplea24/kntu-react-native-calculator/tree/09761aa166d894c7fe5e4d56e5c58bdff169cfb8)
3. [Write more custom componets and break the code into small parts](https://github.com/triplea24/kntu-react-native-calculator/tree/f32fc47f6862a5eeeeaa786d0efcf563251ba247)


## Instruction

1. First clone the repository

		git clone https://github.com/triplea24/kntu-react-native-calculator.git
	
2. Then change directory to the project
	
		cd kntu-react-native-calculator
	
3. Install node packages
	
		yarn (install)
	
	or	
	
		npm install
	
4. Run the project

		expo start
	