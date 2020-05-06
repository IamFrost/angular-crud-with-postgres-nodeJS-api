import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-one',
  templateUrl: './delete-one.component.html',
  styleUrls: ['./delete-one.component.css']
})
export class DeleteOneComponent implements OnInit {
  @Input() postDetails = { id: 0 };

  posts: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
     // this.GetPosts();
  }

  async DeleteOnePost()
  {
    try{
    const response = await this.dataService.Delete_A_Post(this.postDetails.id);
    console.log(typeof(response));
    console.log(response);
    // const dataService = await response.json();
    // console.log(typeof(dataService));
    // console.log(dataService);
    // this.posts = dataService;
    // console.log(typeof(this.posts));
    // console.log(this.posts);
    }
    catch (err)
    {
      console.error('err', err);
    }

  }

}
