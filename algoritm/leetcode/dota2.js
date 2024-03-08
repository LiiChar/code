var predictPartyVictory = function (senate) {
    let winner;
    for (let i = 0; i < senate.length; i++) {
        console.log(senate);
        if (senate.length == 1) {
            winner = senate 
            break
        }
        if (!(senate.includes('R') && senate.includes('D'))) {
            winner = senate.includes('R') ? "R" : "D"
            break
        }
        if (senate[i] != senate[i + 1] ?? false ) {
            senate = !!senate[i + 1] ? senate.slice(0, i + 1)+senate.slice(i + 2)  : senate.slice(1)
            // senate = senate.slice(0, i + 1)+senate.slice(i + 2)
        }
        if (i + 1 >= senate.length) {
            i = 0
        }
        winner = senate
    }
    return winner == 'R' ? 'Radiant' : "Dire"
};

console.log(predictPartyVictory('DDRRR'));

clearTimeout