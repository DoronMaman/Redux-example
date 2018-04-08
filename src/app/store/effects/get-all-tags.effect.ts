import { TagActionTypes, GetAll, GetAllSuccess } from "../actions/tag.action";

import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { TagServices } from "../../sevices/tag.services";
import "rxjs/add/operator/switchMap"

@Injectable()
export class GetAllTagsEffect {

    @Effect() tags$: Observable<Action> = this.actions$
        .ofType(TagActionTypes.GET_ALL_TAGS)
        .switchMap((action: GetAll) => {
            return this.tagsService.getAll(action.payload)
        })
        .map(tags => new GetAllSuccess(tags));

    constructor(private actions$: Actions, private tagsService: TagServices) { }
}