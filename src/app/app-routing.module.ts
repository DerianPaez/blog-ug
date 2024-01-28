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
import { authGuard } from './auth.guard';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
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
    canActivate: [authGuard],
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
    canActivate: [authGuard],
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
  },
  {
    path: 'reset-password/:email',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
