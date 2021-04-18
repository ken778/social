import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//firebase
import{ AngularFireModule} from '@angular/fire'
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore'

import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({ 
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    AuthService,
    PostService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
