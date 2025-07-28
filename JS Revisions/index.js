const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter((num) => num > 4);
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'History', publish: 1980, edition: 2006 },
    { title: 'Book Three', genre: 'Non-Fiction', publish: 1989, edition: 2002 },
    { title: 'Book Four', genre: 'Science', publish: 1999, edition: 2005 },
    { title: 'Book Five', genre: 'Non-Fiction', publish: 1992, edition: 2002 },
    { title: 'Book Six', genre: 'Fiction', publish: 2002, edition: 2007 },
    { title: 'Book Seven', genre: 'History', publish: 2001, edition: 2008 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 1997, edition: 2002 },
    { title: 'Book Nine', genre: 'Science', publish: 1986, edition: 2000 }
];

const userBooks = books.filter((bk)=>bk.publish>1990 && bk.genre==='Fiction');

console.log(userBooks)

const Nums= [1,2,3,4,5,6,7,8,9,10];

const newnums = Nums.map((num)=>{
     return num*num
}) 
console.log(newnums);

const newNumbers = Nums.map((num)=> num*num).map((num)=>num*2).filter((num)=>num>=49) 
console.log(newNumbers)

const reducenums = Nums.reduce((acc,currval)=>acc+currval,0)
console.log(reducenums)

const course = [
    {itemc:'js course',price:2999},
    {itemc:'java course',price:3999},
    {itemc:'web dev course',price:5999},
    {itemc:'python course',price:1999}
]

const totalprice = course.reduce((acc,item)=>acc+item.price,0);
console.log(totalprice);