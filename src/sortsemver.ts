/* eslint-disable no-else-return */
export const semverSort = (strArr:string[]):string[] => {

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

