#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const SVG = require("svgi");

const sourceDir = path.join(__dirname, 'token-icons');

// THIS WILL GET THE DEFAULT COLOR OF THE SVG CIRCLE FILL
fs.readdir(sourceDir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        const filePath = path.join(sourceDir, file);
        let fileCircleColor = "";

        fs.readFile(filePath, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            const icon = new SVG(data);
            const fileCircleColor=icon.children[0].properties.fill; // this is fragile and doesn't work on grs.svg - maybe switch to search for circle?
            
            // FIND THE MATCHING FILE IN THE COMPILED DIRECTORY
            const fileCapitalized = file.charAt(0).toUpperCase() + file.slice(1);
            const fileExtension = fileCapitalized.substr(0, fileCapitalized.lastIndexOf(".")) + ".js";
            const sourceFileCapitalized = path.join(__dirname + "/source/tokens", fileExtension);

            // THIS WILL REPLACE THE DEFAULT COLOR OF THE SVG CIRCLE WITH INHERIT
            fs.readFile(sourceFileCapitalized, 'utf8', function (err,jsData) {
                if (err) {
                    return console.log("Error: ", err);
                }

                // THIS WILL REPLACE THE DEFAULT COLOR OF THE SVG CIRCLE WITH INHERIT
                const colorRegex = new RegExp(fileCircleColor, "g");
                const circleInherit = jsData.replace(colorRegex, 'inherit');
                // console.log(circleInherit);
                
                // THIS WILL REPLACE THE COLOR #000 WITH DEFAULT COLOR
                const defaultColorReplaced = circleInherit.replace(/#000/g, fileCircleColor);
                // console.log(defaultColorReplaced);

                // Save the file
                fs.writeFile(sourceFileCapitalized, defaultColorReplaced, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });
        });
    });
});

console.log("Fixed colors")