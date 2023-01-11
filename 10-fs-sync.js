const {readFileSync, writeFileSync} = require('fs')
console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// This will create or override
// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)

//this will append
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    )
console.log('Done');
console.log('Starting Next');