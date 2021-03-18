function solve() {
  let textInput = document.getElementById("input").value;
  let textArr = textInput.split('.');
  let outputElement = document.getElementById("output");

  let resultArr = textArr.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index/3)

      if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []
      }

      resultArray[chunkIndex].push(item)

      return resultArray
  }, [])

    for (let paragraph of resultArr) {
        let currentParagraph = paragraph.join('.')
        outputElement.innerHTML += `<p>${currentParagraph}</p>`
    }

}