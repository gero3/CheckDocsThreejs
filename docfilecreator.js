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

fs.writeFileSync("files.json", JSON.stringify(getFiles("./en"),null,4));
console.log(getFiles("./en"))