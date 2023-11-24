import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'post-form',
    component: PostFormComponent,
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
