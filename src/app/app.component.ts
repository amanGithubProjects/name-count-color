import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

interface NameCount{
  name: string;
  count:number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'interview';
  dataServ = inject(DataService);
  nameCount: NameCount[]=[];
  
  ngOnInit() {
    const names = this.dataServ.getName();
    const nameMap:{[key:string]:number} = {};

    names.forEach(name =>{
      nameMap[name] = (nameMap[name] || 0)+1;
    });

    this.nameCount = Object.keys(nameMap).map(name => ({
      name,
      count: nameMap[name]
    }));
  }


  getRowClass(count: number): string {
    if (count > 0 && count < 3) {
      return 'table-danger';
    } else if (count > 2 && count < 10) {
      return 'table-warning';
    } else if (count >= 10) {
      return 'table-success';
    }
    return '';
  }
  

}
