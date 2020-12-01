import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-text-detail",
  templateUrl: "./text-detail.component.html",
  styleUrls: ["./text-detail.component.css"]
})
export class TextDetailComponent implements OnInit {
  @Input() inputObj: any = {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.inputObj);
  }
}
