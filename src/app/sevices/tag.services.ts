import { Injectable } from '@angular/core';
// import { environment } from "environments/environment";
import { Observable} from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import { Tag } from "../models/tag";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch";

@Injectable()
export class TagServices {
  private tagsUrl = 'http://doron.shieldiotcloud.com:9000' + '/api/tag/';
  private appId = 1;
  private headers = new Headers();
  
  // Returns all tags
  getAll(appId): Observable<Tag[]> {
    return this.http.get(`${this.tagsUrl}get?appId=1`, {headers: this.headers})
    .map(res => res.json());
    // .catch(this.handleError);
  }

  create(tag: Tag): Observable<Tag> {
    const params: any = {
      appId: this.appId
    };

    if (tag.parentId)
      params.parentId = tag.parentId;
    
    return this.http.post(`${this.tagsUrl}create`, tag, {params: params})
        .map(res => res.json())
        .catch(this.handleError);
}

  constructor(private http: Http) {
    this.headers.set('Accept', '*/*');
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
// getAll(appId){
//   return this.http.get(`${this.tagsUrl}get?appId=1`,{headers:this.headers})
//   .map(res=>res.json())
//   .catch(this.handleError);
// }
  
}

