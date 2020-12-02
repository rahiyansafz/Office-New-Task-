import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  LightOn = false;
  // changeColor = false;

  // anArray = ['Angular', 'TypeScript', 'JavaScript', 'Foundation'];
  anArray = [
    { name: "TypeScript", position: "releasedate: 1 October 2012" },
    { name: "Angular", position: "releasedate: 14 September 2016" },
    { name: "RxJs", position: "releasedate: Sep 3, 2015" },
    { name: "NestJs", position: "releasedate: Nov 24, 2017" },
    { name: "JavaScript", position: "releasedate: March 1996" },
    { name: "Foundation", position: "releasedate: September 2011" },
    { name: "Sass", position: "releasedate: November 28, 2006" },
    { name: "Python", position: "releasedate: December 1989" }
  ];

  theArray = [
    { name: "Rahiyan", position: " is a Learner" },
    { name: "Mizanur", position: " is an Angular Expert" },
    { name: "Habibur", position: " is an UI/UX Expert" },
    { name: "Kamrul", position: "is an Angular Delevoper" },
    { name: "Nymul", position: " is a Fantastic Designer" },
    { name: "Ifty", position: "  is a Designer" },
    { name: "Razeeb", position: " is a Developer" },
    { name: "Tofael", position: " is a Technotier" }
  ];

  selected = "";

  clicked = "";

  anObj: any = {};

  nameObj: any = {};

  OnLightOn(): void {
    this.LightOn = !this.LightOn;
  }

  arrayPushing(pushed: string): void {
    pushed = pushed.trim();
    if (pushed) {
      const y = this.checkIfExists(pushed, this.anArray);
      // const x = JSON.stringify(this.anArray);
      // console.log(x);
      // const y = x.indexOf(`"name":"${pushed}"`);
      if (y === -1) {
        this.anArray.push({
          name: pushed,
          position: " releasedate is unknown"
        });
      }
      this.anObj = "";
    }

    this.selected = "";
    // if (JSON.stringify(this.anArray).indexOf(pushed.trim()) === -1) {
    //   this.anArray.push({
    //     name: pushed,
    //     releasedate: 'unknown',
    //   });
    // }

    // for (const item of this.anArray) {
    //   if (pushed === item.name) {
    //     this.anObj = item;
    //   }
    // }
  }

  checkIfExists(pushed: string, array: any): number {
    const x = JSON.stringify(array);
    const y = x.indexOf(`"name":"${pushed}"`);
    return y;
  }

  highlightTest(param: string): void {
    this.selected = param;
    // console.log(param);
  }

  removeFromList(item: any): void {
    const index = this.anArray.indexOf(item);
    this.anArray.splice(index, 1);
    this.anObj = "";
  }

  select(item: any): void {
    this.selected = item.name;
    this.anObj = item;
    console.log(this.selected);
    console.log(this.anObj);
  }

  /// for 2nd comp //////////////////////////////

  arrayAdding(adding: string): void {
    adding = adding.trim();
    if (adding) {
      const z = JSON.stringify(this.theArray);
      console.log(z);
      const w = z.indexOf(`"name":"${adding}"`);
      if (w === -1) {
        this.theArray.push({
          name: adding,
          position: " is doing !!!!!"
        });
      }
      this.nameObj = "";
    }
    this.clicked = "";
  }

  deleting(names: any): void {
    const num = this.theArray.indexOf(names);
    this.theArray.splice(num, 1);
    this.nameObj = "";
  }

  clicks(names: any): void {
    this.clicked = names.name;
    this.nameObj = names;
    console.log(this.clicked);
    console.log(this.nameObj);
  }
  colored(col: string): void {
    this.clicked = col;
    // console.log(param);
  }

  addingUp(item: any, index: number): void {
    if (item) {
      const y = this.checkIfExists(item, this.theArray);
      // console.log(y);
      if (y === -1) {
        const a = this.anArray.splice(index, 1);
        // console.log('hello', a);
        console.log(index, a);
        // this.theArray.push(a[0]);
        this.theArray.splice(index, 0, a[0]);
      }
    }
    this.anObj = "";
  }
  addingDown(names: any, index: number): void {
    if (names) {
      const yT = this.checkIfExists(names, this.anArray);
      // console.log(y);
      if (yT === -1) {
        const aT = this.theArray.splice(index, 1);
        // console.log('hello', a);
        console.log(index, aT);
        // this.anArray.push(aT[0]);
        this.anArray.splice(index, 0, aT[0]);
      }
    }
    this.nameObj = "";
  }
}

// 0. the whole list will be stacked in the first place  // DONE!!!!!!!!!!!!!!!!!!!!!!
// 1. cant be pushed same item name
// 2. cant be added same item name of other array
// 3. if an item which will be inputted in an array, if the name of the inputted name is in the other array, the other array name will be colored
// 4. if an item is deleted or pushed to another array the selected color will be gone
// 5. styling problems

//
//
//
//
//
//
//
//
//
// 1. array1 = array1.filter(function(val) {
//   return array2.indexOf(val) == -1;
// });
// // Or

// array1 = array1.filter(val => !array2.includes(val));
