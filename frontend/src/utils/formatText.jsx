export function formatText(text, limitLength = 40) {
    const textArr = text.split(" ")
    const newText = textArr.map((string, index) => {
      if (index < limitLength) return string
    }).filter(string => string !== undefined
    )
    return `${newText.toString().replaceAll(",", " ")}...`
  }