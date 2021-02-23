function fullName(firstName, lastName, gender) {
    var output;
    if (gender === 'male') {
        output = 'Mr.' + ' ' + firstName + ' ' + lastName
    } else if (gender === 'female') {
        output = 'Ms.' + ' ' + firstName + ' ' + lastName
    }
    return output;
}

var resultFullName = fullName('Yousuf', 'Rana', 'male')

console.log(resultFullName);

function example() {
    return {
        name: 'Yousuf Rana',
        skill: ['HTML', 'CSS', 'JAVASCRIPT(Learning)'],
        print: function () {
            console.log(this.name, this.skill);
        }
    }
}

var resultOfExample = example();
resultOfExample.print();