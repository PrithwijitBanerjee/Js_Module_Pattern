// Always use IIFE for good practice...

const firstModule = (() => {
    var a = 100;
    console.log("a: ", a);

    const greet = () => {
        console.log("hello from first script");
    }
    return {
        a,
        myGreet: greet
    };
    
})(); //IIFE....