# scraper-example

How to write a scraper

First run `npm install`. This sets you up with the libraries needed to run the js file.

Part 1 - Download html files
1. Download html files. Read details in `dl-html.js`. You can run this file with `node dl-html.js`.
2. This creates a shell file called `dl-html.sh`
3. Then you have to add permission to this file `chmod 777 dl-html.sh`
4. Then you can run the download file `./dl-html.sh`
5. This should download a bunch of html files into the `html` folder

Part 2 - Download images
1. Read the html files and figure out what the image url. Read details in `node dl-images.js` You can run this file with `node dl-html.js`.
2. This creates a shell file called `dl-images.sh`
3. Then you have to add permission to this file `chmod 777 dl-images.sh`
4. Then you can run the download file `./dl-images.sh`
5. This should download a bunch of images into the `images` folder

Part 3 - Manual process..
A bunch of the wiki entries didn't have images. So I googled and downloaded the images manually.
