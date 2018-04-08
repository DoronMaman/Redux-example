import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from './store/application-state';
import { TagsActions, GetAll } from './store/actions/tag.action';
import { Observable } from 'rxjs/Observable';
import { Tag } from './models/tag';
import { TagServices } from './sevices/tag.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  private tags$: Observable<Tag[]>;
  private tagsNew: Subscription;

  constructor(private store: Store<ApplicationState>,
    private serviceTag: TagServices
) {

}
  ngOnInit() {
    this.store.dispatch(new GetAll(1));
    this.tags$ = this.store.select(state => state.Tags);

      this.tags$.subscribe(tags => {
   console.log(tags);

  });
//  this.tagsNew= this.serviceTag.getAll(1).subscribe(tags=>{
//    console.log(tags)
//  })
  }
}
