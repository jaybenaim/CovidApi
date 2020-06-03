import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ISampleOrder } from "../master-detail.model";

@Component({
  selector: "app-master-list",
  templateUrl: "./master-list.component.html",
  styleUrls: ["./master-list.component.css"],
})
export class MasterListComponent implements OnInit {
  @Input() sampleOrder: ISampleOrder;
  @Output() itemClick = new EventEmitter<ISampleOrder>();

  countryFlag: string = "";

  constructor() {}

  ngOnInit() {
    this.setCountryFlag();
  }

  setCountryFlag() {
    let countryCode = this.sampleOrder["CountryCode"].toLowerCase();
    this.countryFlag = `flag-icon flag-icon-${countryCode} flag-icon-background`;
  }
  selectSampleOrder() {
    this.itemClick.emit();
  }
}
