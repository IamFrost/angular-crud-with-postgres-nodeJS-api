import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-one',
  templateUrl: './update-one.component.html',
  styleUrls: ['./update-one.component.css']
})
export class UpdateOneComponent implements OnInit {

  @Input() postDetails = { title: '', body: '', userid: 0, id: 0 };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  async updateOnePost()
  {
    const response = await this.dataService
    .Update_A_Post(this.postDetails.title, this.postDetails.body, this.postDetails.userid, this.postDetails.id);
    console.log(typeof(response));
    console.log(response);
    // const dataService = await response.json();
    // console.log(typeof(dataService));
    // console.log(dataService);
  }

}
