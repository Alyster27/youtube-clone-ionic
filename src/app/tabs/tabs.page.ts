import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SheetPage } from '../sheet/sheet.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private _modalCtrl: ModalController) { }

  async add() {
    /* make the modal snaps when you click on add( ) */
    const modal = await this._modalCtrl.create({
      component: SheetPage,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      handle: false
    });

    await modal.present();
  }

}
