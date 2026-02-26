function fizzBuzz(n) {
    if (n <= 0) {
        return "";
    }

    if (n === 1) {
        return "1";
    }

    if (n === 3 ) 
    {
        return fizzBuzz(n - 1) + " fizz";
    }
    if (n === 5 ) 
    {
        return fizzBuzz(n - 1) + " buzz";
    }
    return fizzBuzz(n - 1) + " " + n;
}

export { fizzBuzz };