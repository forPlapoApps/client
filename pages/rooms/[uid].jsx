import CopyLink from "../components/CopyLink"
import FibonacciNumber from "../components/FibonacciNumber"
import OpenButton from "../components/OpenButton"

export default function RoomsUid() {
  return (
    <>
      <div className="flex flex-col w-fit gap-4">
        <CopyLink />
        <OpenButton />
        <FibonacciNumber />
      </div>
    </>
  )
}