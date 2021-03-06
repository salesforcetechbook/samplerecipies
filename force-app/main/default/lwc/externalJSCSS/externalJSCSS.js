import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jqueryMinJS from '@salesforce/resourceUrl/jqueryminjs';
import demoCSS from '@salesforce/resourceUrl/democss'
export default class ExternalJSCSS extends LightningElement {
    renderedCallback() { 
        Promise.all([
            loadScript(this, jqueryMinJS),
            loadStyle(this, demoCSS)   
        ]).then(() => {           
           
            $(this.template.querySelector('div')).text("JQuery Loaded"); 
            //$(this.template.querySelector('div')).css("background-color", "blue");
         
             //$(this.template.querySelector('ui.sortable')).disableSelection();
         }).catch(error => {
             this.dispatchEvent(
                 new ShowToastEvent({
                     title: 'Error loading Jquery',
                     message: error,
                     variant: 'error'
                 })
             );
         });
    }
    handleClick(event){
        let targetName = event.target.name;
        if(targetName=='togglebtn'){
            $(this.template.querySelector('div.mydiv')).toggle();
        }
        else if(targetName=='slidetogglebtn'){
            $(this.template.querySelector('div.mydiv')).slideToggle("slow");
        }        
        else if(targetName=='rcorners1'){            
           $(this.template.querySelector('div.mydiv')).addClass('rcorners1');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners2');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners3');
            
        }
        else if(targetName=='rcorners2'){
            $(this.template.querySelector('div.mydiv')).addClass('rcorners2');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners1');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners3');
        }
        else if(targetName=='rcorners3'){
            $(this.template.querySelector('div.mydiv')).addClass('rcorners3');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners1');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners2');
        }


    }
}