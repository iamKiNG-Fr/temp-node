// npm --v [check version]

// npm 1 <package Name> [Local dependency- used fora project]

// sudo npm install -g <pn> [to install globally]

// package.json [manifest file(stores important info about project/package)]

// npm init[step by step ], npm init -y[everything default]

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);