const smarks= ["Siri", 10,20,30,40] //structuring
var[a,...b] = smarks //destructuring
console.log(a,b)


const book = {
    title:"Half Girlfriend",
    author: "Chetan Bhagat"
};
var{title,author} = book
console.log(author)
console.log(book.author)
