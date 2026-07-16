
var coworkers = {
    "programmer" : "egoing",//property
    "desinger" : "leezche"
}; // 객체리터럴

coworkers.bookKeeper = "duru";
coworkers["dta scientist"] = "taeho";

coworkers.showAll = function() {
    for (var key in this) {
        if (key != "showAll")
            console.log(JSON.stringify(key) + " : " + this[key]);
    }
};

coworkers.showAll();

var bodyObj = {
    setColor : function(color) {
        document.querySelector("body").style.color = color;
    },
    setBackgroundColor : function(color) {
        document.querySelector("body").style.backgroundColor = color;
    }
}

function onclickHandler(self) {
    if (self.value === 'night') {
        bodyObj.setColor('white');
        bodyObj.setBackgroundColor('black');
    } else {
        bodyObj.setColor('black');
        bodyObj.setBackgroundColor('white');
    }
}
