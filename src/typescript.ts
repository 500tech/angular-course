/** var let const **/
async function varLetConst() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log('i === ', i);
    }, 0);
  }
}
varLetConst();


/** classes, arrow functions, this **/
class User {
  private firstName:string;
  private lastName:string

  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  makeSuspense() {
    console.log(`The name's ${this.lastName}`);
    setTimeout(function() {
      console.log(`${this.firstName} ${this.lastName}`);
    }, 2000);
  }
};

const user = new User('James', 'Bond');
user.makeSuspense();

/** callbacks, promises, async await **/
const fetchData = function(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({fake: 'data'}), 2000);
  });
}

function asyncAwait() {
  fetchData('my.url')
    .then(data1 => {
      console.log('data1', data1);
      return fetchData('my.other.url');
    }).then(data2 => {
      console.log('data2', data2);
    });
}
asyncAwait();


/** Functional Programming, destructuring **/
const capitalize = (name:string = ''):string => {
  return name[0].toUpperCase() + name.substring(1)
}

function getFullName(first?:string, middle?:string, last?:string) {
  let result = '';
  if (first) {
    result = first;
  }
  if (middle) {
    if (result) {
      result += ` ${middle}`;
    } else {
      result = middle;
    }
    return `${first} ${middle} ${last}`;
  }
  if (last) {
    if (result) {
      result += ` ${last}`;
    } else {
      result = last;
    }
  }

  return result;
}
console.log('fullname', getFullName('John', 'F.', 'Kennedy'));


/* Exercise */
// const myAccount = new Account({ min: -1000, initial: 1000 });
// myAccount.deposit(500);
// myAccount.withdraw(500);
// myAccount.withdraw(2500);
// console.log(myAccount.getTransactions());
// console.log(myAccount.getBalance());
