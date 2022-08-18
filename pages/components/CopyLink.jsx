import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function CopyLink () {
  const [text, setText] = useState("リンクをコピーできます")
  const [link, setLink] = useState("")

  const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) )

  const copyLink = async () => {
    setText("コピーしました！")
    await sleep(2000)
    setText("リンクをコピーできます")
  }

  useEffect(() => {
    const link = window.location.href
    setLink(link)
  }, [])

  return (
    <>
      <p>{ text }</p>

      <CopyToClipboard text={link} onCopy={() => copyLink() }>

        <button className='btn'>
          <FontAwesomeIcon icon={faCopy} className="text-2xl" />
        </button>
          
      </CopyToClipboard>
    </>
  )
}
