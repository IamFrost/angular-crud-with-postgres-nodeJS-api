import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCLient: HttpClient) { }

  GetPosts() {
    return fetch(('http://localhost:3000/posts'));
  }

  Get_A_Post(id: number) {
    return fetch('http://localhost:3000/posts/' + id);
  }

  Delete_A_Post(id: number) {
    return fetch('http://localhost:3000/posts/' + id, {
      method: 'DELETE'
    });
  }

  Create_A_Post(titleInput: string, bodyInput: string, userIdInput: number, idInput: number) {
     console.log(titleInput + ' ' + bodyInput + ' ' + userIdInput + ' ' + idInput);
     return fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput,
        userid: userIdInput,
        id: idInput
      }),
      headers: {'Content-Type': 'application/json'}
    });
  }

  Update_A_Post(titleInput: string, bodyInput: string, userIdInput: number, idInput: number) {
    return fetch('http://localhost:3000/posts/' + idInput, {
      method: 'PUT',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput,
        userid: userIdInput,
        id: idInput
      }),
      headers: {'Content-Type': 'application/json'}
    });
  }
}
