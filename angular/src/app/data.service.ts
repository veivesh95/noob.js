import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AjaxService } from './ajax.service';


@Injectable()
export class DataService {

  headers = {
    "Content-Type": "application/json",
    "X-Token": "1LFq2mHVc9WH6NkgXVwV4L"
  }
  constructor(
    private http: HttpClient,
    // private ajaxService: AjaxService
    ) { }

  getPostList() {
    return this.http.get('https://api.devrant.thusitha.site/v1/post.list',
      {
        headers: {
          "Content-Type": "application/json",
          "X-Token": "1LFq2mHVc9WH6NkgXVwV4L"
        }
      });
  }

  getData(){
    console.log(111);
  }
}
