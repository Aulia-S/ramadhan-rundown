import { useEffect, useState } from 'react'
import moment from 'moment'
import momentHijri from 'moment-hijri'

import Time from '../components/Time'
import hr from '../assets/img/hr.png'
import mosque from '../assets/img/mosque.png'
import candle from '../assets/img/candle.png'
import candleFlip from '../assets/img/candle-flip.png'
import star from '../assets/img/star.png'
import starFlip from '../assets/img/star-flip.png'

function convertGregorianToHijri(gregorianDate) {
  const hijriDate = momentHijri(gregorianDate, 'YYYY-MM-DD').format('iYYYY')
  return hijriDate
}

function HomePage() {
  const [start, setStart] = useState(moment(new Date().getTime()))

  const end = moment([2025, 1, 28])
  const days = end.diff(start, 'days')
  const hours = end.diff(start, 'hours') - end.diff(start, 'days') * 24
  const minutes = end.diff(start, 'minutes') - end.diff(start, 'hours') * 60
  const seconds = end.diff(start, 'seconds') - end.diff(start, 'minutes') * 60

  useEffect(() => {
    setInterval(() => {
      setStart(moment(new Date().getTime()))
    }, 1000)
  })

  return (
    <div style={{ backgroundImage: `url('/bg-pattern.png')` }} className='relative bg-[#185D4E] bg-cover h-screen flex flex-col items-center justify-center space-y-[60px] pt-6 pb-20'>
      <div className='absolute top-0 z-20 flex justify-between w-full px-2 sm:px-10 xl:px-20'>
        <img src={candle} alt='candle' className='h-40 md:h-96' />
        <img src={candleFlip} alt='candle' className='h-40 md:h-96' />
      </div>
      <div className='absolute top-[360px] sm:top-90 lg:top-80 z-10 flex justify-between w-full px-6 sm:px-32 xl:px-64'>
        <img src={star} alt='candle' className='h-16 lg:h-32' />
        <img src={starFlip} alt='candleFlip' className='h-16 lg:h-32' />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 bg-black/20 py-[14px] px-[28px] gap-4 z-10 rounded mx-4'>
        <Time name='Days' value={days} type='first' />
        <Time name='Hours' value={hours} />
        <Time name='Minutes' value={minutes} />
        <Time name='Seconds' value={seconds} />
      </div>
      <img src={hr} alt='hr' className='w-[200px] z-10' />
      <div className='flex flex-col items-center space-y-[20px] z-10'>
        <p className='text-white font-[700] text-xl sm:text-3xl'>Head to</p>
        <p className='text-[rgb(254,194,0)] font-[700] text-4xl sm:text-6xl'>Ramadhan</p>
        <p className='text-[#FEC200] font-[700] text-xl sm:text-3xl'>{end.format('DD MMMM')}</p>
        <p className='text-[#FEC200] font-[700] text-xl sm:text-3xl'>
          {end.format('yyyy')} M/ {convertGregorianToHijri(end.format('YYYY-MM-DD'))} H
        </p>
      </div>
      <p className='text-white z-10 text-xs mb-20'>
        By{' '}
        <a href='https://www.instagram.com/auliasabri.io/' className='underline underline-offset-2'>
          @auliasabri.io
        </a>
      </p>
      <div className='absolute bottom-0'>
        <img src={mosque} alt='mosque' />
      </div>
    </div>
  )
}

export default HomePage
