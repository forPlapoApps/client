const estimates = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 5 },
  { id: 5, value: 8 },
  { id: 6, value: 13 },
  { id: 7, value: 21 },
  { id: 8, value: 42 },
]

const Mode = (array) => {
  let newArray = []
  let check = false // 重複チェッカー

  array.forEach(e => {
    if (newArray.filter((f) => f.value == e)[0]) {
      const oldHash = newArray.filter((g) => g.value == e)[0]
      const count = oldHash.count + 1
      newArray = newArray.filter((h) => h.value != e)
      newArray.push({ value: e, count })
      check = true
    } else {
      newArray.push({ value: e, count: 1 })
    }
  });

  const countArray = newArray.map((c) => c.count )
  const max = Math.max(...countArray)

  const result = check ? newArray.filter((i) => i.count == max)[0].value : 0
  return result
}

const agreement = (estimateArray) => {
  let newArray = estimateArray.map((e) => {
    return estimates.filter((estimate) => estimate.value == e)[0].id
  })

  const mode = Mode(newArray)
  const modeLength = newArray.filter((e) => e == mode).length
  const arrayLength = newArray.length

  return `${modeLength / arrayLength * 100}%`
}

console.log(agreement([8, 8, 8, 5]))
