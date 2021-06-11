import { LightningElement,api } from 'lwc';

export default class Designproperties extends LightningElement {
    @api title;
    @api fnumber;
    @api snumber;
    result;
    connectedCallback(){
        this.result = this.fnumber+this.snumber;
    }
    handleChange(event){
        if(event.target.name=="fstNumber"){
            this.fnumber = parseInt(event.target.value);
        }
        else if(event.target.name=="scdNumber"){
            this.snumber = parseInt(event.target.value);
        }
        this.result = this.fnumber+this.snumber;
    }
}