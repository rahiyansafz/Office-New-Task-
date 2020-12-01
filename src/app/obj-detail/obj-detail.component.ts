import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-obj-detail",
  templateUrl: "./obj-detail.component.html",
  styleUrls: ["./obj-detail.component.css"]
})
export class ObjDetailComponent implements OnInit {
  @Input() secObj: any = {};

  constructor() {}

  ngOnInit() {}
}
