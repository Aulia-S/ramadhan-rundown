import React from 'react'

const Time = (props) => {
  const bgHead = props.type === 'first' ? 'bg-[#16165F]/30 text-white' : 'bg-[#FEDFB1]/80 text-[#292D32]'
  const value = props.value.toString().length === 1 ? '0' + props.value : props.value

  return (
    <div className='w-[145px]'>
      <h3 className={`${bgHead} text-xs text-center font-[700] px-[30px] py-[10px] rounded-tl-[10px] rounded-br-[10px]`}>{props.name}</h3>
      <p className='font-mono text-center p-[28px] text-3xl font-semibold text-white'>{value}</p>
    </div>
  )
}

export default Time
