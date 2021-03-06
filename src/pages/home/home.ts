import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
      name: "Donuts",
      quantity: 12
    },
    {
      name: "Bacon",
      quantity: 3
    },
    {
      name: "Sausage",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 12
    },
  ];

  constructor (
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {

  }

  removeItem(item, i) {
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 2000
    });
    toast.present();
    this.items.splice(i, 1);
  }

  addItem() {
    this.showAddItemPrompt()
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}
