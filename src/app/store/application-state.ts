import { StoreData, INITIAL_STORE_DATA } from './store.data';
import { Tag } from '../models/tag';
// import { UiState, INITIAL_UI_STATE } from './ui-state';
export interface ApplicationState {
//   UI: UiState;
  Tags: Tag[];
}
export const INITIAL_APPLICATION_STATE: ApplicationState = {
//   UI: INITIAL_UI_STATE,
  Tags: []
};