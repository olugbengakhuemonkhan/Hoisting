// Scope -->
// determines what can see a variable -->
//GLOBAL
// Has no parent
// any one can see it anywhere, and change it anywhere
// if it belongs to the window, or is defined outside
// all functions (just inside of a script tag), it is global
//Awesome for small programs or when neccessary
//dangerous when your program gets big
//in Python, globals are variables that are all the way 
//the left
//LOCAL
//local variables live INSIDE of functions and are visible
////nd changable only to that function and its child functions //

<script>
    // this is NOT inside any function. So it's a global
    var iAmAGlobal = 1;
    console.log(iAmAGlobal);
    console.log(window.iAmAGlobal);
    function checkScope(){
        // in spite of this horrible variable name it is NOT a global
        // it's inside of a funciton, so NODOBY outside of this function
        // can see or use it
        var iAmAGlobal = 2;
        iAmAGlobal++;
        console.log(iAmAGlobal)
        // DONT EVER, unless you have a very good reason, make 
        // a variable inside a function that you have a global for.
        // IT IS CONFUSING. 
    }
    // checkScope()
    // console.log(iAmAGlobal);
    // var a = 1;
    // function child(){
    //     var b = 2;
    //     console.log(a); //global
    //     console.log(b); //local
    //     for(var i = 0; i < 10; i++){
    //         a++
    //     }
    //     function grandChild(){
    //         console.log(`I am a grandchild. I can see and change
    //         my stuff, my parents stuff, and their parents stuff`);
    //         a++
    //         b++
    //     }
    //     grandChild();
    //     console.log(a)
    //     console.log(b)
    // }
    // child();
    // var b;
    // b = 2;
    // console.log(b);
    // states of a variable
    // - undeclared - no var X anywhere
    // - declared - JS knows it exists
    // - init/assigned - not only does it exist, it has a value
        // HOISTING
        // Anytime you have the word var, Javascript will take
        // the var and put it at the top of the function/global
        // where you like it or not
    // var q = 1;
    // function p(){
    //     q++
    //     console.log(q) // log global, 1
    //     var q = 3;
    //     console.log(q)
    // }
    // p();
    // in addition to var, JS got a facelift in 2015 that added
    // "let" and "const"
    // let + const = no more var
    // let is a block level variable
    // it lives for as long as the {} it's inside of do
    // var i
    for(var i = 0; i < 10; i++){
    }
    console.log(i);
    // for(let j = 0; j < 10; j++){
        
    // }
    // console.log(j)
    // for(const k = 0; k < 10; k++){
    // }
    const playerName = prompt("What is your name?");
    playerName = "Joe"
</script>

