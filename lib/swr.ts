// useSWRの第一引数で用いるサーバーのエンドポイント
export const $api = process.env.SERVER_URL

// useSWRの第二引数で用いるfetcher関数
export const fetcher = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default $api
