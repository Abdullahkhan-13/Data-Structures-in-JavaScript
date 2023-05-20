// A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

//     10 --> 16 --> 20
//     |         |    |
//   head    pointer   tail

// e.g{
// ------------------------
//     let Linkedlist = {
//         head: {
//             value: 6
//             next: {
//                 value: 10
//                 next: {
//                     value: 12
//                     next: {
//                         value: 3
//                         next: null
//                         }
//                     }
//                 }
//             }
//         }
//     };
// ----------------------
// }

class Linkedlist {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  //    10 2 30 40          // add element after the head and become a tail of an arry
  //     \ |\ |\ |
  //      2  30 40

  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //    2 10 30 40          // add element before the head node
  //    | /
  //     2

  //   prepend(data) {
  //     const newNode = {
  //       value: data,
  //       next: null,
  //     };
  //     newNode.next = this.head;
  //     this.head = newNode;
  //   }

  //    2 10 30 40
  //     \/             // inset the element on an array
  //      4

  traversing(req) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != req) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
    };

    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = nextNode;
  }

  //    2 10 30 40
  //     \/             // inset the element on an array
  //      4

  delete(index) {
    const leaderNode = this.traversing(index - 1);
    const unwantedNode = leaderNode.next;
    const nextNode = unwantedNode.next;

    leaderNode.next = nextNode;
    this.length--;
  }
}

const myList = new Linkedlist(10);

myList.append(20);
myList.append(30);
myList.append(40);

// myList.prepend(5);

myList.insert(1, 15);

myList.delete(1);

console.log(myList);
