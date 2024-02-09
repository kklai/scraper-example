#!/usr/bin/env node

const fs = require("fs");
const cheerio = require('cheerio');

let data = fs.readFileSync("data.csv", "utf8");
let lines = data.split("\r\n")

let out = "";

lines.forEach(function(d,i){

    if ( i != 0) {
        let split = d.split(",")
        out += `wget "${split[3]}" -O html/a${split[0]}_${split[2].split(' ').join('-')}.html \n`
    }
})

fs.writeFileSync("dl-html.sh", out)