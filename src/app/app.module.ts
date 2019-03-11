import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { HttpClientModule } from '@angular/common/http';
import { FaqPage } from '../pages/faq/faq';
import { HukumpenyusuanPage } from '../pages/hukumpenyusuan/hukumpenyusuan';
import { NasabPage } from '../pages/nasab/nasab';
import { PerkahwinanPage } from '../pages/perkahwinan/perkahwinan';
import { PergaulanPage } from '../pages/pergaulan/pergaulan';
import { PusakaPage } from '../pages/pusaka/pusaka';
import { LainlainPage } from '../pages/lainlain/lainlain';
import { BabydataPage } from '../pages/babydata/babydata';
import { RegisterchildPage } from '../pages/registerchild/registerchild';
import { ViewchildPage } from '../pages/viewchild/viewchild';
import { AssignchildPage } from '../pages/assignchild/assignchild';
import { ManagechildPage } from '../pages/managechild/managechild';
import { SpecificbabyPage } from '../pages/specificbaby/specificbaby';
import { ProfilePage } from '../pages/profile/profile';
import { MessagePage } from '../pages/message/message';
import { ForumPage } from '../pages/forum/forum';
import { AnswerPage } from '../pages/answer/answer';
import { SearchPage } from '../pages/search/search';
import { SearchavailablePage } from '../pages/searchavailable/searchavailable';
import { SearchchilddataPage } from '../pages/searchchilddata/searchchilddata';
import { SearchibusudataPage } from '../pages/searchibusudata/searchibusudata';
import { Searchchilddata2Page } from '../pages/searchchilddata2/searchchilddata2';
import { Searchibusudata2Page } from '../pages/searchibusudata2/searchibusudata2';
import { AnnouncementPage } from '../pages/announcement/announcement';
import { AdminpagePage } from '../pages/adminpage/adminpage';
import { ChangeprofilePage } from '../pages/changeprofile/changeprofile';
import { ProfileadminPage } from '../pages/profileadmin/profileadmin';
import { AddustazPage } from '../pages/addustaz/addustaz';
import { RemoveustazPage } from '../pages/removeustaz/removeustaz';
import { UstazPage } from '../pages/ustaz/ustaz';
import { GuestPage } from '../pages/guest/guest';
import { ViewbabyPage } from '../pages/viewbaby/viewbaby';
import { PopoverPage } from '../pages/popover/popover';
import { NotificationPage } from '../pages/notification/notification';
import { AboutPage } from '../pages/about/about';

import { Badge } from '@ionic-native/badge/ngx';
import { AddbmchildPage } from '../pages/addbmchild/addbmchild';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FaqPage,
    HukumpenyusuanPage,
    PerkahwinanPage,
    NasabPage,
    PergaulanPage,
    PusakaPage,
    LainlainPage,
    BabydataPage,
    RegisterchildPage,
    ViewchildPage,
    AssignchildPage,
    ManagechildPage,
    SpecificbabyPage,
    ProfilePage,
    MessagePage,
    ForumPage,
    AnswerPage,
    SearchPage,
    SearchavailablePage,
    SearchchilddataPage,
    SearchibusudataPage,
    Searchchilddata2Page,
    Searchibusudata2Page,
    AnnouncementPage,
    AdminpagePage,
    ChangeprofilePage,
    ProfileadminPage,
    AddustazPage,
    RemoveustazPage,
    UstazPage,
    GuestPage,
    ViewbabyPage,
    PopoverPage,
    NotificationPage,
    AboutPage,
    AddbmchildPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FaqPage,
    HukumpenyusuanPage,
    PerkahwinanPage,
    NasabPage,
    PergaulanPage,
    PusakaPage,
    LainlainPage,
    BabydataPage,
    RegisterchildPage,
    ViewchildPage,
    AssignchildPage,
    ManagechildPage,
    SpecificbabyPage,
    ProfilePage,
    MessagePage,
    ForumPage,
    AnswerPage,
    SearchPage,
    SearchavailablePage,
    SearchchilddataPage,
    SearchibusudataPage,
    Searchchilddata2Page,
    Searchibusudata2Page,
    AnnouncementPage,
    AdminpagePage,
    ChangeprofilePage,
    ProfileadminPage,
    AddustazPage,
    RemoveustazPage,
    UstazPage,
    GuestPage,
    ViewbabyPage,
    PopoverPage,
    NotificationPage,
    AboutPage,
    AddbmchildPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Badge,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
