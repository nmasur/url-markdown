const got = require('got');
const { JSDOM } = require("jsdom");
const { Readability } = require('@mozilla/readability');
const TurndownService = require('turndown');

const url = process.argv[2];

got(url).then(response => {
    const dom = new JSDOM(response.body);
    let reader = new Readability(dom.window.document);
    let article = reader.parse();
    var turndownService = new TurndownService();
    var markdown = turndownService.turndown(article.content);
    console.log(markdown);
}).catch(err => {
  console.log(err);
});
