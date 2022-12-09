export const isMyOwnJudgement = (seletedNumber: number, candidateNumber: number) => {
  if (seletedNumber === candidateNumber) {
    return 'btn'
  } else {
    return 'btn-primary'
  }
}
