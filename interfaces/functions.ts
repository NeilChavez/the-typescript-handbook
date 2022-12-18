(() => {
    interface addToNumbers {
        (a: number, b: number): number
    }
    let addToNumbersFunction: addToNumbers;

    addToNumbersFunction = (a: number, b: number) => {
        return 10;
    }
})()