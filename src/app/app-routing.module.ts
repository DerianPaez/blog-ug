import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostComponent } from './pages/post/post.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

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
    path: 'post/:id',
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
