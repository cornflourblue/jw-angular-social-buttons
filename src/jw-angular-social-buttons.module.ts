import { NgModule } from '@angular/core';

import { FbLikeComponent } from './fb-like.component';
import { GooglePlusComponent } from './google-plus.component';
import { TweetComponent } from './tweet.component';
import { LinkedInShareComponent } from './linkedin-share.component';
import { PinItComponent } from './pin-it.component';

@NgModule({
  declarations: [
    FbLikeComponent,
    GooglePlusComponent,
    TweetComponent,
    LinkedInShareComponent,
    PinItComponent
  ],
  exports: [
    FbLikeComponent,
    GooglePlusComponent,
    TweetComponent,
    LinkedInShareComponent,
    PinItComponent
  ]
})
export class JwSocialButtonsModule { }