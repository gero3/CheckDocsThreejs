var fs = require("fs");
var path = require("path");

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

fs.writeFileSync("files.json", JSON.stringify(getFiles("./three.js/docs/api/en"),null,4));


var threejsfile = fs.readFileSync("./three.js/src/Three.js","utf8");

fs.writeFileSync("./three.js/src/Three.js",threejsfile.replace("export * from './Three.Legacy.js';", "//export * from './Three.Legacy.js';"));