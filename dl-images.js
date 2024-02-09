#!/usr/bin/env node

const fs = require("fs");
const cheerio = require('cheerio');

let out = "";
let files = fs.readdirSync("html");

files.forEach(function(d){

    let file = fs.readFileSync("html/" + d, "utf8")

    let $ = cheerio.load(file);

    let imgfile = $(".infobox .mw-file-description .mw-file-element")
    
    if (imgfile && imgfile.attr("src")) {
        imgfile = imgfile.attr("src").replace('//upload', 'https://upload');
        console.log(d, imgfile)
        out += `wget "${imgfile}" -O img/${d.replace('.html', '.jpg')} \n`;
    } else {
        console.log(d)
    }

})

fs.writeFileSync("dl-images.sh", out)