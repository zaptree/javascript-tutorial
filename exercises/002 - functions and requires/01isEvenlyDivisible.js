module.exports = {

    //THIS METHOD SHOULD RETURN TRUE WHEN THERE IS NO REMAINDER dividend / divisor
    //EX true: 4 / 2 = 2    there is no remainder in this example
    //EX false: 5 / 2 = 2.5 there is .5 remainder in this example
    isEvenlyDivisible: function(dividend, divisor)
    {

        if(dividend % divisor === 0){
            return true;
        }
        else {
            return false;
        }

    }
};