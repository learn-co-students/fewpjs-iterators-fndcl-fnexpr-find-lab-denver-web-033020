const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(seasons) {
  const winningYear = seasons.find( ({result}) => result === "W");
  if (winningYear) {
    return winningYear.year
  };
}
