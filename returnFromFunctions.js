function parent (msg) {
    function child (name) {
        console.log(msg+ ' ' + name );
        function manyChil (ex) {
            console.log(msg+ ' ' + name + ' ' + ex );
        }
        return manyChil
    }
    return child
}


var gm = parent('Good Morning');
var ge = parent('Good Evening');

ge('Bangladesh');
var b = gm('Bangladesh');
b('How are you??');