
// First We call a fnction named outer .

// Then We called a varibles named 'a' .

// We called a inner funtion named helWorld .

// Print out the varible a by console .

// We called the inner funtion named inner in outer function .

/* function outer() {


    var a = 23332 ;

    console.log('Hello I am from outer function');

    function helWorld() {
        console.log(a);
        console.log('Hello I am from inner function');
    }



    helWorld();


}

outer(); */






function add (a, b){


    function sum() {
        return a+b;
    }


    function sub() {
        return a-b;        
    }


    function times(){
       return a*b;
    }


    function div () {
        return a/b;
    }

    return sum() + sub() + times() + div()

}

var result = add(10, 10);

console.log(result);

