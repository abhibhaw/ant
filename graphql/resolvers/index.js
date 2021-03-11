const _ = require('lodash');
const Books = [
    {name: 'A',author: 'B',price:10},
    {name: 'B',author: 'C',price:20},
    {name: 'A',author: 'B',price:10}
]
module.exports = {
    Query: {
        hello(p, a, ctx) {console.log(ctx); return 'Hello World'},
        books(p,a,ctx) { return Books }
    }
}
