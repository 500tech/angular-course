// import { capitalize } from 'lodash';

/** var let const **/
function varLetConst() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log('i === ', i);
    }, 0);
  }
}
// varLetConst();


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
// user.makeSuspense();

/** callbacks, promises, async await **/
const fetchData = function(url, callback) {
  setTimeout(() => callback({fake: 'data'}), 2000);
}

function asyncAwait() {
  fetchData('my.url', data1 => {
    console.log('data1', data1);
    fetchData('my.other.url', data2 => {
      console.log('data2', data2);
    });
  })
}
// asyncAwait();


/** Functional Programming, destructuring **/
const capitalize = (name:string = ''):string => {
  return name[0].toUpperCase() + name.substring(1)
}

function getFullName(first?:string, middle?:string, last?:string) {
  let result = '';
  if (first) {
    result = capitalize(first);
  }
  if (middle) {
    if (result) {
      result += ` ${capitalize(middle)}`;
    } else {
      result = capitalize(middle);
    }
  }
  if (last) {
    if (result) {
      result += ` ${capitalize(last)}`;
    } else {
      result = capitalize(last);
    }
  }

  return result;
}
// console.log('fullname', getFullName('john', 'f.', 'kennedy'));

const spreadRest = () => {
  const sum = (...args) => args.reduce((sum, item) => sum + item, 0);
  console.log(sum(1,2,3));
  const foo = [1,2];
  const bar = [3,4];
  const foobar = [...foo, ...bar];
  console.log(foobar);

  const obj = {
    name: 'Adam',
    lastName: 'Klein'
  };

  const objWithId = {
    ...obj,
    id: 1
  };
  console.log(objWithId);
}
// spreadRest();

/* Exercise */
// const myAccount = new Account({ min: -1000, initial: 1000 });
// myAccount.deposit(500);
// myAccount.withdraw(500);
// myAccount.withdraw(2500);
// console.log(myAccount.getTransactions());
// console.log(myAccount.getBalance());
