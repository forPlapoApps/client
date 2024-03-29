import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { memo, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyLink = memo(() => {
  const [link, setLink] = useState('')
  const [icon, setIcon] = useState(faCopy)

  const sleep = (waitTime: number) => new Promise((resolve) => setTimeout(resolve, waitTime))

  const copyLink = async () => {
    setIcon(faCheck)
    await sleep(2000)
    setIcon(faCopy)
  }

  useEffect(() => {
    const link = window.location.href
    setLink(link)
  }, [])

  return (
    <>
      <CopyToClipboard text={link} onCopy={() => copyLink()}>
        <button className='btn ml-auto copy-button'>
          <FontAwesomeIcon icon={icon} className='text-2xl' />
        </button>
      </CopyToClipboard>
    </>
  )
})

CopyLink.displayName = "CopyLink"

export default CopyLink
