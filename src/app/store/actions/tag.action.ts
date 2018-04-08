import { Action } from "@ngrx/store";
import { Tag } from "../../models/tag";

    export enum TagActionTypes {
        GET_ALL_TAGS = '[Tags] GET_ALL_TAGS',
        GET_ALL_TAGS_SUCCESS = 'GET_ALL_SUCCESS',
        CREATE = 'CREATE_TAG',
        CREATE_TAG_SUCCESS = 'CREATE_TAG_SUCCESS'
    }
       

    export class GetAll implements Action {
        readonly type = TagActionTypes.GET_ALL_TAGS;

        constructor(public payload: number) {}
    }
   
    export class GetAllSuccess implements Action {
      readonly   type = TagActionTypes.GET_ALL_TAGS_SUCCESS;
      constructor(public payload: Tag[]) {}
    }

    export class Create {
        
        readonly    type = TagActionTypes.CREATE;
        constructor(public payload: Tag) {}
    }

    export class CreateSuccess {
        readonly type = TagActionTypes.CREATE_TAG_SUCCESS;
        constructor(public payload: Tag) {}
    }
    

    export type TagsActions = GetAll | GetAllSuccess | Create | CreateSuccess;
