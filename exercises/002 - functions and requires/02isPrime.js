module.exports = {
    ///THIS METHOD SHOULD RETURN TRUE IF THE NUMBER IS ONLY DIVISBLE BY 1 AND ITSELF
    //EX true: 3
    //EX false: 10
    isPrime: function(value)
    {

        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return true;
    }

};