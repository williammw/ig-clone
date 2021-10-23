import React from 'react'

function Story({username, img}) {
  return (
    <div className="">
      {/* ia mstorty */}
      {/* ig shit */}
      {/* p-[1.5px] border-red-500 border-2 */}
      {
        // hide below css will fuck the z-index up
        // hover:scale-110 transition 
        // transform duration-200 ease-out
      }
        <img className=' h-14 w-14 rounded-full 
        p-[1.5px] border-yellow-500 border-2
        object-contain cursor-pointer 
        ' src={img} alt="" />
      {/* truncate text  */}
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story
