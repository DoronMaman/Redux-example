import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TagServices} from '../app/sevices/tag.services';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE } from './store/application-state';
import { GetAllTagsEffect } from './store/effects/get-all-tags.effect';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer/root.reducer';
import { Tags } from './store/reducer/tags.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EffectsModule.forRoot([GetAllTagsEffect]),
    StoreModule.forRoot({Tags: Tags}, { initialState: INITIAL_APPLICATION_STATE })

  ],
  providers: [TagServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
