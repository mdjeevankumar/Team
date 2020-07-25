import { Component, HostListener } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  public rangeValue: any  = 1; 
  public rangeCtrlWidth: any = '100%';
  public quarters: any = [ {
    id : 'Q12020', name:'Q1 2020', class: 'p-2 flex-fill bg-info', width: this.rangeCtrlWidth
  }] ;
  public quarterlyDetails: any = [];
  
constructor(){}

ngOnInit()
{ 
  this.quarterlyDetails = [
   { id: 'Q22020', name:'Q2 2020', class: 'p-2 flex-fill bg-warning', width: '100%'},
   { id: 'Q32020',  name:'Q3 2020', class: 'p-2 flex-fill bg-info', width: '100%'},
   { id: 'Q42020', name:'Q4 2020', class: 'p-2 flex-fill bg-warning', width: '100%'},
   { id: 'Q12021', name:'Q1 2021', class: 'p-2 flex-fill bg-info', width: '100%'},
   { id: 'Q22021',  name:'Q2 2021', class: 'p-2 flex-fill bg-warning', width: '100%'},
   { id: 'Q32021', name:'Q3 2021', class: 'p-2 flex-fill bg-info', width: '100%'},
   { id: 'Q42021', name:'Q4 2021', class: 'p-2 flex-fill bg-warning', width: '100%'},
   { id: 'Q12023', name:'Q1 2023', class: 'p-2 flex-fill bg-info', width: '100%'},
   { id: 'Q22023', name:'Q2 2023', class: 'p-2 flex-fill bg-warning', width: '100%'},
  ]

}

@HostListener('document:mousemove', ['$event'])
mousemove() {  
  let length = 1 + this.quarterlyDetails.length;
  let quarterValue =  100/length;
  let quarterCount = Math.round(this.rangeValue/quarterValue);
  this.quarters.forEach(element => {     
    document.querySelector('#' + element.id).parentElement.style.width =  100 - this.rangeValue + '%'; ;
    });
    if(quarterCount > 1) {
    for(let i=0; i < quarterCount - 1; i++){
      if(this.quarters.filter( y=>y.id === this.quarterlyDetails[i].id).length === 0){
      this.quarters.push(this.quarterlyDetails[i]);
      }
    }
    for(let k=quarterCount - 1; k <= this.quarterlyDetails.length;k++) {
      if(this.quarters.length > quarterCount){
      this.quarters.splice(k,1)
    }
  }
}
else{
  if(this.quarters.length > 1){
    this.quarters.splice(1,1)
  }
}
}
}
