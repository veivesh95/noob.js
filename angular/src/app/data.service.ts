import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get('https://api.devrant.thusitha.site/v1/post.list',
      {
        headers: {
          "Content-Type": "application/json",
          "X-Token": "1LFq2mHVc9WH6NkgXVwV4L"
        }
      });
  }

  // curl --location --request GET "https://api.devrant.thusitha.site/v1/post.list" \
  // --header "Content-Type: application/json" \
  // --header "X-Token: 1LFq2mHVc9WH6NkgXVwV4L" \
  // --data ""



}
