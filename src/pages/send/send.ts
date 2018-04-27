import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import { SendOption,SendDetail } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
import { NgForm } from '@angular/forms';
/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  responseData:any;
  user:any;
  email:any;
  public submitted = false;
   send: SendOption = { amount: '', spendingPassword: '' };
  senddetails: SendDetail = { userMailId:'', amount: '', address: '', spendingPassword: '' };
  constructor(public userData: UserData,
  public navCtrl: NavController,
  public navParams: NavParams,
  public _setupService: SetupService,
  public platform: Platform
   ) {
   var user =JSON.parse(localStorage.getItem('logindetail')); 
   this.email = user.user.email;
   
    let backAction =  platform.registerBackButtonAction(() => {        
        this.navCtrl.pop();
        backAction();

      },)
     
  }
   
 
onsendBalance(Form: NgForm){
  this.senddetails.userMailId=this.email;
  this.submitted = true; 
  if (Form.valid) {  
       this.userData.send(this.send.amount);   
        
       
  
     this._setupService.createSendDetail(this.senddetails).subscribe((result) => { 
         
         console.log(this.senddetails);
          if(result.statusCode== 200){
                       
              // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
              // this.user=JSON.parse(localStorage.getItem('senddetails'));   
               
            
      }
    });
    }
}

 } 