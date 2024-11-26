'use strict';


//Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//
// Data needed for first part of the section
//const restaurant = {
//  name: 'Classico Italiano',
//  location: 'Via Angelo Tavanti 23, Firenze, Italy',
//  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//
//
//  openingHours: {
//    thu: {
//      open: 12,
//      close: 22,
//    },
//    fri: {
//      open: 11,
//      close: 23,
//    },
//    sat: {
//      open: 0, // Open 24 hours
//      close: 24,
//    }
//  },
//    order: function(starterIndex, mainIndex){
//      return [this.starterMenu[starterIndex], this.MainMenu[mainIndex]];
//    },
//
//  orderDelivery: function({starterIndex = 1,mainIndex = 0,time = '20:00', address}){
//    console.log(`Order received!" ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
//will be delivered to ${address} at ${time}`);
//  },
//};
//
//restaurant.orderDelivery({
//  time: '22:30', 
//  address: 'Via del Sole, 21', 
//  mainIndex: 2, 
//  starterIndex: 2, 
//}); 
//
//restaurant.orderDelivery({
//  address: 'Via del Sole, 21', 
//  starterIndex: 1, 
//})
//
////const arr = [2,3,4]; 
////const a = arr[0];
////const b = arr[1];
////const c = arr[2];
////
////const [x,y,z] = arr; 
////console.log(x,y,z); 
////console.log(arr); 
////
////let [main, ,secondary] = restaurant.categories; 
////console.log(main,secondary); 
////
////// without destruct
//////const temp = main; 
//////main = secondary; 
//////secondary = temp; 
//////console.log(main,secondary); 
////
////// destruct 
////[main,secondary] = [secondary, main];
////console.log(main, secondary); 
////
//////Receive 2 return values from a function 
////const [starter,mainCourse] = restaurant.order(2,0);
////console.log(starter,mainCourse)
////
////// Nested destructuring 
////const nested = [2,4,[5,6]]; 
//////const [i,,j] = nested; 
//////console.log(i,j); 
////const [i,,[j,k]] = nested 
////console.log(i,j,k); 
////
////// Default Values
////const [p = 1,q = 1,r = 1] = [8, 9];
////console.log(p,q,r);
//
//const {name, openingHours, categories} = restaurant; 
//console.log(name, openingHours, categories); 
//
//
//const {
//  name: restaurantName, 
//  openingHours: hours, 
//  categories: tags, 
//} = restaurant; 
//
//console.log(restaurantName, hours, tags); 
//// Default values
//const { menu = [], starterMenu: starters = []} = restaurant; 
//console.log(menu, starters); 
//
////Mutating variables 
//let a = 111; 
//let b = 999; 
//const obj = {a: 23, b: 7, c: 14};
//({a,b}=obj); 
//console.log(a,b); 
//
////nested objects 
//const {fri: {open: o , close: c}} = openingHours; 
//console.log(o,c); 

/////////ÜBUNG////////7

const books = [ 
  {
    title: 'algorithms',
    author: ['robert sedgewick', 'kevin wayne'],
    publisher: 'addison-wesley professional',
    publicationdate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    isbn: '9780321573513',
    language: 'english',
    programminglanguage: 'java',
    onlinecontent: true,
    thirdparty: {
      goodreads: {
        rating: 4.41,
        ratingscount: 1733,
        reviewscount: 63,
        fivestarratingcount: 976,
        onestarratingcount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'structure and interpretation of computer programs',
    author: ['harold abelson', 'gerald jay sussman', 'julie sussman (contributor)'],
    publisher: 'the mit press',
    publicationdate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    isbn: '9780262543231',
    language: 'english',
    programminglanguage: 'javascript',
    onlinecontent: false,
    thirdparty: {
      goodreads: {
        rating: 4.36,
        ratingscount: 14,
        reviewscount: 3,
        fivestarratingcount: 8,
        onestarratingcount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'computer systems: a programmer\'s perspective',
    author: ['randal e. bryant', 'david richard o\'hallaron'],
    publisher: 'prentice hall',
    publicationdate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'c', 'engineering'],
    pages: 978,
    format: 'hardcover',
    isbn: '9780130340740',
    language: 'english',
    programminglanguage: 'c',
    onlinecontent: false,
    thirdparty: {
      goodreads: {
        rating: 4.44,
        ratingscount: 1010,
        reviewscount: 57,
        fivestarratingcount: 638,
        onestarratingcount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'operating system concepts',
    author: ['abraham silberschatz', 'peter b. galvin', 'greg gagne'],
    publisher: 'john wiley & sons',
    publicationdate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'c', 'java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    isbn: '9780471694663',
    language: 'english',
    programminglanguage: 'c, java',
    onlinecontent: false,
    thirdparty: {
      goodreads: {
        rating: 3.9,
        ratingscount: 2131,
        reviewscount: 114,
        fivestarratingcount: 728,
        onestarratingcount: 65
      }
    }
  },
  {
    title: 'engineering mathematics',
    author: ['k.a. stroud', 'dexter j. booth'],
    publisher: 'palgrave',
    publicationdate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    isbn: '9781403942463',
    language: 'english',
    programminglanguage: null,
    onlinecontent: true,
    thirdparty: {
      goodreads: {
        rating: 4.35,
        ratingscount: 370,
        reviewscount: 18,
        fivestarratingcount: 211,
        onestarratingcount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'the personal mba: master the art of business',
    author: 'josh kaufman',
    publisher: 'portfolio',
    publicationdate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    isbn: '9781591843528',
    language: 'english',
    thirdparty: {
      goodreads: {
        rating: 4.11,
        ratingscount: 40119,
        reviewscount: 1351,
        fivestarratingcount: 18033,
        onestarratingcount: 1090
      }
    }
  },
  {
    title: 'crafting interpreters',
    author: 'robert nystrom',
    publisher: 'genever benning',
    publicationdate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    isbn: '9780990582939',
    language: 'english',
    thirdparty: {
      goodreads: {
        rating: 4.7,
        ratingscount: 253,
        reviewscount: 23,
        fivestarratingcount: 193,
        onestarratingcount: 0
      }
    }
  },
  {
    title: 'deep work: rules for focused success in a distracted world',
    author: 'cal newport',
    publisher: 'grand central publishing',
    publicationdate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    isbn: '9781455586691',
    language: 'english',
    thirdparty: {
      goodreads: {
        rating: 4.19,
        ratingscount: 144584,
        reviewscount: 11598,
        fivestarratingcount: 63405,
        onestarratingcount: 1808
      }
    },
    highlighted: true
  }
];

const [firstbook,secondbook] = books; 
console.log(firstbook); 
const [,,thirdbook] = books; 
console.log(thirdbook);
const ratings = [['rating', 4.19], ['ratingscount', 144584]];
const [[,rating],[,ratingscount]] = ratings; 
console.log(rating); 
console.log(ratingscount); 

const ratingstars = [63405, 1808]; 
const [fivestarratings, onestarratings, threestarratings = 0] = ratingstars; 
console.log(fivestarratings); 
console.log(threestarratings); 
console.log(onestarratings); 

console.log(firstbook.thirdparty.goodreads); 
//const [,ratingtwo, , ratingscounttwo, ,reviewscount,,fivestarratingcount,,onestarratingcount] = firstbook.thirdparty.goodreads; 
//console.log(ratingscounttwo); 
console.log(firstbook.thirdparty.goodreads[rating]); 

const {title,author,ISBN} = books[0]; 
const {keywords:tags} = books[0]; 
console.log(tags); 


