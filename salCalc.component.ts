import { Component } from '@angular/core';
import { SalaryService } from './salary.service';


@Component({
    selector:'salary-calc',
    templateUrl:'salCalc.component.html',
    //template:`<h1> this is salary calc</h1>`,
    styleUrls:['salCalc.component.css'],
    
     
    //styles:``,
})

export class SalaryCalc {

    basicSal:number;
    //salaryService : SalaryService;

    constructor(private salaryService:SalaryService){
       this.basicSal = 0;
       //this.salaryService = new SalaryService();
    }

    takeSalary(event):void{
        this.basicSal = event.target.value ;
        this.salaryService.takeBasicSalary(this.basicSal);

    }

}