import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/DataService';
import { prsnModel } from 'src/app/model/prsnModel';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  persons: prsnModel[];

  ngOnInit(): void {
    this.dataService.listAllPersons().subscribe(
      data=>this.persons = data.result
      
    );
  }

}
