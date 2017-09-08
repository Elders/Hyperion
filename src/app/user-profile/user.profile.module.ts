import { NgModule } from '@angular/core';

import {  UserProfileComponent}   from './user-profile.component';
import { routing } from './user.profile.routing';

@NgModule({
  imports: [routing],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}