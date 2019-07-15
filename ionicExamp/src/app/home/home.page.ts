import { Component } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetCont: ActionSheetController){}
async actionSheet(){
  const action = await this.actionSheetCont.create({
    header:"alert",
    buttons:[{
    text:'delete',
    icon:'trash',
    handler:() => {
        console.log('delete clicked');  
      }
    },{
    text:'save',
    icon:'save',
    handler:() => {
      console.log('share clicked')
    }
  }]
  });
  await action.present()
}
}
