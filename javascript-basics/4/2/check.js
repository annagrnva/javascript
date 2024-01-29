function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }


let schedule = {};

alert(isEmpty(schedule)); // true

alert(isEmpty(schedule)); // false