const testVar = {}

function testFunc() {
  return "hi"
}
var record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function superbowlWin(record){
  let sb = record.find(r => r.result === "W")
    return sb ? sb.year : undefined
}

console.log(superbowlWin(record))