// ES6 compliant codes
const coun = function One(){
    counterValue = 0;
    return function(){
        return counterValue++;
    };
}();

