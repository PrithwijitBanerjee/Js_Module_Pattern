(() => {
    var b = 200;
    var sum = firstModule.a + b;
    console.log("sum: ", sum);
    const greet = () => {
        console.log("hello from second script");
    }
    greet();
    firstModule.myGreet();
})(); //IIFE