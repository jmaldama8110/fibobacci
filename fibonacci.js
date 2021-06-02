const fibonacci = function (requestPosition) {


    let nPos = parseInt( requestPosition );
    
    if (nPos < 1) return "OOPS";
    // nPos is the position at the array we need to retrieve
    // therefore, nPos -1 is the arrays position.
  

    const data = [1, 1]; // initial array
    // do runs to construct the fibonacci array
    let i = 0;
    do {

        const prev = data[data.length - 2], curr = data[data.length - 1];
        data.push(prev + curr);
        i = i + 1;

    } while (i < nPos);

    return data[nPos - 1];

};

module.exports = fibonacci;