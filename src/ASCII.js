import React from 'react'


export const ASCII = () => {

  const getStringA = (height) => {
    const width = Math.max(1, Math.floor(height / 4))
    const lineLength = height * 2
    const linesArray = []
    let leftPoint = 0
    let rightPoint = lineLength - 1
    const lineOfAllSpaces = " ".repeat(lineLength)
    const unitOfA = "A".repeat(width)

    let numMiddleLines = 0;
    for (let i = 0; i < height; i++) {
      if (leftPoint > rightPoint) {
        break
      }
      const numMiddleSpaces = rightPoint - leftPoint - (2* (width - 1))
      const middleSpaces = numMiddleSpaces <= 0 ? "" : " ".repeat(numMiddleSpaces)
      let middleString = unitOfA + middleSpaces + unitOfA
  
      if (numMiddleSpaces <=0) {
        middleString = " ".repeat(unitOfA.length/2) + unitOfA + " ".repeat(unitOfA.length/2)
      }
      else if (i/height >= .375 && i/height <= .5) {
        middleString = middleString.replace(/ /g, "A").slice(0, numMiddleLines - 1.5 * unitOfA.length)
        numMiddleLines++
      }
      let lineString = lineOfAllSpaces.substring(0, leftPoint) + middleString + lineOfAllSpaces.substring(rightPoint, lineLength - 1)
      
      linesArray.push(lineString)
      leftPoint++ 
      rightPoint-- 
    }

    return linesArray.reverse()
  }

  const getStringC = (height) => {
    if (height <= 1) {
      return ["C"]
    }
    const width = Math.max(1, Math.floor(height / 4))
    const lineLength = height * 1.5
    const unitOfC = "C".repeat(width)
    let topLeftPoint = unitOfC.length
    let topRightPoint = lineLength - 1
    let bottomLeftPoint = unitOfC.length
    let bottomRightPoint = lineLength - 1
    let bottomLines = []
    let middleLines = []
    let topLines = []
    const lines = []
    const lineOfAllSpaces = " ".repeat(lineLength)
    if (unitOfC.length % 2 == 0) {
      topLeftPoint--
      bottomLeftPoint--
    }
    for (let i = 0; i < height; i++) {
      console.log(`${i} / ${height} === ${i/height}`)
      let line = ''
      if (i/height <= .125) {
        line = lineOfAllSpaces.substring(0, topLeftPoint) + "C".repeat(topRightPoint - topLeftPoint) + lineOfAllSpaces.substring(topRightPoint, lineLength - 1)
        topRightPoint--
        topLeftPoint++
        topLines.push(line)
      } 
      else if (i/height >= .75) {
        line = lineOfAllSpaces.substring(0, bottomLeftPoint) + "C".repeat(bottomRightPoint - bottomLeftPoint) + lineOfAllSpaces.substring(bottomRightPoint, lineLength - 1)
        bottomRightPoint--
        bottomLeftPoint++
        bottomLines.push(line)
      } else {
        line = unitOfC
        middleLines.push(line)
      }
      console.log(line)
      lines.push(line)

    }

    return topLines.reverse().concat(middleLines, bottomLines)
  }

  const height = 3
  const lines = getStringA(height)
  // return ( 0 .125 .25 .375 .5 .625 .75 .875 1
  //   <div>{ for(let i=0; i< lines.length; i++) {
  //     console.log('s')
  //   }}</div>
  //   )
  return (
    <div>
      {lines.map((line, i) => (
        <div>{line.replace(/ /g, "\u00a0")}</div>
      ))}
    </div>
  );
}
