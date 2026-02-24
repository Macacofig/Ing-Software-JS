function fizzBuzz(n) {
    if (n<=0) {
        return "";
    }
    else
    {
        if(n === 1)
        {
            return "1";
        }
        return fizzBuzz(n-1) + " " + n;
    }
}

export { fizzBuzz };