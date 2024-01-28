import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { PostComponent } from './pages/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostCardComponent,
    HeaderComponent,
    LayoutComponent,
    PasswordRecoveryComponent,
    UserProfileComponent,
    ContactComponent,
    PostListComponent,
    PostFormComponent,
    PostComponent,
    FooterComponent,
    SidebarComponent,
    CategoryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
