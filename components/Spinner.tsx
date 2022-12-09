const Spinner = () => {
  return (
    <div className='w-full'>
      <div className='flex mx-auto h-60 w-fit'>
        <div className='animate-ping h-2 w-2 bg-blue-600 rounded-full m-auto'></div>
        <div className='animate-ping h-2 w-2 bg-blue-600 rounded-full m-auto mx-4'></div>
        <div className='animate-ping h-2 w-2 bg-blue-600 rounded-full m-auto'></div>
      </div>
    </div>
  )
}

export default Spinner
