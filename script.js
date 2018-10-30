"use strict";






// class ArrayList {
//     constructor() {
//         this.items = new Array(10); // This gives the array predefined length.
//         this.count = 0;
//     }

//     length() {
//         return this.count;
//     }

//     isEmpty() {
//         return this.count === 0;
//     }

//     isFull() {
//         if (this.count===this.items.length) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     push(item) {
//         if (this.isFull()) {
//             return false;
//         } else {
//             this.items[this.count] = item;
//             this.count++;
//             return true;
//         }
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return undefined;
//         } else {
//             const item = this.items[this.count - 1];
//             this.count--;
//             return item;
//         }
//     }

//     get(index) {
//         if (index < 0 || index > this.count) {
//             return undefined;
//         } else {
//             return this.items[index];
//         }
//     }

//     print() {
//         for (let i = 0; i < this.count; i++) {
//             console.log(this.items[i]);
//         }
//     }

//     clear() {
//         this.count = 0;
//         this.items = new Array(10);
//     }

//     unshift(item) {
//         if (this.isFull()) {
//             return false;
//         } else {
//             // move all the items over one to make space
//             for (let i = this.count; i > 0; i--) {
//                 this.items[i] = this.items[i - 1];
//             }
//             this.items[0] = item;
//             this.count++;
//             return true;
//         }
//     }

//     shift() {
//         if (this.isEmpty()) {
//             return undefined;
//         } else {
//             const item = this.items[0];
//             // move all the items back one
//             for (let i = 0; i < this.count; i++) {
//                 this.items[i] = this.items[i + 1];
//             }
//             this.count--;
//             return item;
//         }
//     }

//     insertAt(index, item) {
//         if (index < 0 || index > this.count || this.isFull()) {
//             return false;
//         } else {
//             // move all items between insert point and end over to make space
//             for (let i = this.count; i > index; i--) {
//                 this.items[i] = this.items[i - 1];
//             }
//             this.items[index] = item;
//             this.count++;
//             return true;
//         }
//     }

//     removeAt(index) {
//         if (index < 0 || index >= this.count) {
//             return false;
//         } else {
//             // move all items between removal point and end back one to fill the space
//             for (let i = index; i < this.count; i++) {
//                 this.items[i] = this.items[i + 1];
//             }
//             this.count--;
//             return true;
//         }
//     }

//     removeAll(value) {
//         // we need to shift items following removed ones over to take their place
//         // the more items we've found to remove, the farther they need to be shifted
//         // I'm calling that displacement
//         let displacement = 0;      
//         for (let i = 0; i < this.count; i++) {
//             if (this.items[i] === value) {
//                 displacement++;
//             } else if (displacement) {
//                 // shift the existing items over by the displacement value
//                 this.items[i - displacement] = this.items[i];
//             }
//         }
//         this.count -= displacement;
//     }

//     toArray() {
//         // Okay, I cheated on this one. But it's not part of the exercise.
//         return this.items.slice(0, this.count);
//     }

//     toString() {
//         return "[" + this.toArray().toString() + "]";
//     }
// }
