div = require('../002 - IsEvenlyDivisible/isEvenlyDivisible.js');

module.exports = {

    ///THIS METHOD SHOULD RETURN TRUE IF THE NUMBER IS ONLY DIVISBLE BY 1 AND ITSELF
    //EX true: 3
    //EX false: 10
    //THIS METHOD SHOULD USE THE PREVIOUS isEvenlyDivisible METHOD
    isPrime: function(value)
    {
        for(var i=2; i<value; i++)
        {
            if(div.isEvenlyDivisible(value, i))
                return false;
        }

        return true;
    }
}