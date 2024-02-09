#!/usr/bin/env node

const fs = require("fs");  // library used to read files on your computer
const cheerio = require('cheerio');  // library used to read parse html file

let out = "";
let files = fs.readdirSync("html"); // read all the files in the html folder

files.forEach(function(d){ // loop through all the files in the html folder

    let file = fs.readFileSync("html/" + d, "utf8") // read a single file

    let $ = cheerio.load(file); // parse the file into html

    let imgfile = $(".infobox .mw-file-description .mw-file-element") // select the element containing the movie poster, i figured this out by dragging the html file into the browser and inspecting element, took some trial an error
    
    if (imgfile && imgfile.attr("src")) { // if it has the right element
        imgfile = imgfile.attr("src").replace('//upload', 'https://upload'); // correct the url
        console.log(d, imgfile) // log the output to make sure it looks right
        out += `wget "${imgfile}" -O img/${d.replace('.html', '.jpg')} \n`; // create a wget command for each data entry
    } else {
        console.log(d) // if it failed then log the failure
    }

})

fs.writeFileSync("dl-images.sh", out) // write a shellfile for downloading