import { Injectable } from '@angular/core';
import { Axios } from './../../bower_components/axios/dist/axios.min.js';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AjaxService {

  constructor(
    private http: HttpClient,
    private axios: Axios
  ) { }

  request() {
    console.log(222);
  }

}
