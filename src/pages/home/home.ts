import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isShowHeader: boolean = false;
  isShowSearch: boolean = false;
  isShowRoute: boolean = false;
  isShowCenter: boolean = false;
  isShowFooter: boolean = false;

  searchOrigin: string = "";
  searchDestination: string = "";

  className: string = "icon-center icon-blue";

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    /* this.isShowSearch = false;
    this.isShowRoute = false;
    this.isShowCenter = false;
    this.isShowFooter = false; */
  }

  showCenterMode(f: number) {
    //this.isShowFooter = true;
    if (f == 1) {
      //tim theo diem dau
      this.toastCtrl.create({
        message: "Di chuyển bản đồ tới vị trí điểm bắt đầu",
        duration: 3000,
        position: 'bottom'
      }).present();
      //class mau xanh
      this.className = "icon-center icon-blue";
      this.isShowCenter = true;

    }
    if (f == 2) {
      //tim theo diem cuoi
      this.toastCtrl.create({
        message: "Di chuyển bản đồ tới vị trí điểm đến",
        duration: 3000,
        position: 'bottom'
      }).present();
      //class mau do
      this.className = "icon-center icon-red";
      this.isShowCenter = true;
    }
  }


  showSearchMode(f: number) {
    if (f == 1) {
      //hien thi o tim kiem diem den
      this.toastCtrl.create({
        message: "Nhập địa chỉ điểm đến hoặc tìm trên bản đồ",
        duration: 1000,
        position: 'middle'
      }).present();
      this.isShowRoute = true;
      this.isShowCenter = false;
    }
    if (f == 2) {
      //tim theo diem cuoi
      this.toastCtrl.create({
        message: "Đang tìm kiếm đường đi",
        duration: 1000,
        position: 'middle'
      }).present();
      this.isShowCenter = true;
    }
  }

  searchEnter(f: number) {

  }

  showSearchbar() {
    this.isShowHeader = !this.isShowHeader;
    this.isShowSearch = !this.isShowSearch;
  }

  showRoutebar() {
    this.isShowRoute = !this.isShowRoute;
  }

  showCurrentLocation() {

  }

  resetMap() {

  }





}
