function hello(name, print) {
    print(name);
}

hello('Yousuf Rana', function(name) {
    console.log(name);
});

hello('Yousuf Rana', function print(name) {
    console.log('Hello...!' + name);
});

hello('Yousuf Rana', function(name) {
    console.log('How are you buddy ' + name + ' ?');
});

hello('Md. Yousuf Rana', function(name) {
    console.log('Length of Yousudf Rana is =  ' + name.length + ' ');
});

var user = {
    age: 22
};

var myself = {
    name: 'Md. Yousuf Rana',
    age: user.age,
    email: 'lntelliigence273@gmail.com'
};

function prinMyself(person, callBack){
    console.log('Person Name: ' + person.name);
    if  (person.age >= 18){
        callBack(person.email);
    }else{
        callBack('You are too little, Try later..!')
    }
}

prinMyself(myself, function(email){
    console.log(email);
}); 



function print(data, cl1 , cl2) {
    console.log(data);
    cl1(data);
    cl2(data);
}

print('Yousuf Rana is a begginer Front-end devloper ' , function(data){
    var upperCase = data.toUpperCase();
    console.log(upperCase);
} , function(data){
    var lowerCase = data.toLowerCase();
    console.log(lowerCase);
})