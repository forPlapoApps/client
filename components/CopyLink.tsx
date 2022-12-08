import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sleep } from 'utils/sleep'
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { memo, useState } from 'react'

const CopyLink = memo(function CopyLinkMemo() {
  const [link, setLink] = useState(location.href)
  const [icon, setIcon] = useState(faCopy)

  const copyLink = async () => {
    setIcon(faCheck)
    await sleep(2000)
    setIcon(faCopy)
  }

  return (
    <CopyToClipboard text={link} onCopy={() => copyLink()}>
      <button className='btn ml-auto copy-button'>
        <FontAwesomeIcon icon={icon} className='text-2xl' />
      </button>
    </CopyToClipboard>
  )
})

export default CopyLink
