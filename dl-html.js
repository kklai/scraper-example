#!/usr/bin/env node

const fs = require("fs"); // library used to read files on your computer

let data = fs.readFileSync("data.csv", "utf8"); // reads the data file
let lines = data.split("\r\n") // split the csv into an array

let out = ""; // empty string for output

lines.forEach(function(d,i){ // for loop 

    if ( i != 0) { // dont read the first line of the csv
        let split = d.split(",") // split each line of the csv by comma
        out += `wget "${split[3]}" -O html/a${split[0]}_${split[2].split(' ').join('-')}.html \n` // add a command for each line of the data that will download the html file with the wget library
    }
})

fs.writeFileSync("dl-html.sh", out) // write a shellfile for downloading