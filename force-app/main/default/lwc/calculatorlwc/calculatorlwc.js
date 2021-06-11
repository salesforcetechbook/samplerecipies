import { LightningElement,api } from 'lwc';
import {calculate2numbers} from 'c/jsLibraryModule';

export default class Calculatorlwc extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    @api title;
    handleChange(event){
        if(event.target.name=='input1'){
            this.firstNumber = event.target.value;
        }
        else if(event.target.name=='input2'){
            this.secondNumber = event.target.value;
        }
    }
    calculate(event){
        //this.result = Number(this.firstNumber)+Number(this.secondNumber);
        this.result = calculate2numbers(this.firstNumber,this.secondNumber);
    }
}