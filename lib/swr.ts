// useSWRの第一引数で用いるサーバーのエンドポイント
export const $api = process.env.SERVER_URL

// useSWRの第二引数で用いるfetcher関数
export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json()
    return data
  } catch(error: any) {
    throw new Error(error.message)
  }
}

export default $api
