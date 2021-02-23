function caller() {
    return function (name) {
        return 'Caller calling you' + ' ' + name
    }
}

var a = caller();
var b = a('Yousuf Rana');
b;


var y = caller()('Yousuf Rana');
y;