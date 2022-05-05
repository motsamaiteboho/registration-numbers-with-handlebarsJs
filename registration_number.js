function RegstrationNumbers(){
    
    var regNumbers = [];
    var regByTown = [];

    function addRegistration(regNumber){
        if(!regNumbers.includes(regNumber))
            regNumbers.push(regNumber);
    }
    function AllRegNumbers(){
        return regNumbers;
    }
    function filterByTown(townsName){
        regByTown = [];
        if(townsName === "capetown")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CA")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "paarl")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CL")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "george")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CJ")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "stellenbosch")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CK")) {
                    regByTown.push(reg);
                }
            }
        }
        else
        {
            regByTown = regNumbers;
        }
        return regByTown;
    }
    function resetReg()
    {
        regNumbers  = [];
    }
    
    return {
        addRegistration,
        AllRegNumbers,
        filterByTown,
        resetReg
    }
}