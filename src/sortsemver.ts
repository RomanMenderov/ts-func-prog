const semverSort = (strArr:string[]):string[] => {

    function compare(a:string, b:string) {
        const aSplit = a.split(".");
        const bSplit = b.split(".");
    
    
        const length = Math.min(aSplit.length, bSplit.length);
        for (let i = 0; i < length; ++i) {
            if (parseInt(aSplit[i]) < parseInt(bSplit[i])) {
                return -1;
            } else if (parseInt(aSplit[i]) > parseInt(bSplit[i])) {
                return 1;
            }
        }
    
        if (aSplit.length < bSplit.length) {
            return -1;
        } else if (aSplit.length > bSplit.length) {
            return 1;
        }
    
        return 0;
    }

    return strArr.sort((a,b) => compare(a, b));

}

// semverSort([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]