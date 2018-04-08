import { StoreData, INITIAL_STORE_DATA } from '../store.data';
import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import { Tag } from '../../models/tag';
import { TagsActions, TagActionTypes } from '../actions/tag.action';

export const Tags = (state: Tag[] = INITIAL_STORE_DATA.Tags, action: TagsActions): Tag[] => {
    switch (action.type) {
        case TagActionTypes.GET_ALL_TAGS_SUCCESS:
            return action.payload;
        case TagActionTypes.CREATE_TAG_SUCCESS:
            return [...state, action.payload];
        default:
            return state;

    }
};
