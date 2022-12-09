export const isMyOwnJudgement = (seletedNumber: number, candidateNumber: number) => {
  if (seletedNumber === candidateNumber) {
    return 'btn-lg my-auto'
  } else {
    return 'my-5'
  }
}
