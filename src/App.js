import { useEffect, useState } from "react";
import moment from "moment";

import Time from './components/Time';
import hr from './assets/img/hr.png';
import mosque from './assets/img/mosque.png'
import candle from './assets/img/candle.png'
import candleFlip from './assets/img/candle-flip.png'
import star from './assets/img/star.png'
import starFlip from './assets/img/star-flip.png'

function App() {
  const [start, setStart] = useState(moment(new Date().getTime()));

  const end2 = moment([2023, 2, 22]);
  const days2 = end2.diff(start, "days");
  const hours2 = end2.diff(start, "hours") - end2.diff(start, "days") * 24;
  const minutes2 = end2.diff(start, "minutes") - end2.diff(start, "hours") * 60;
  const seconds2 = end2.diff(start, "seconds") - end2.diff(start, "minutes") * 60;

  useEffect(() => {
    setInterval(() => {
      setStart(moment(new Date().getTime()));
    }, 1000);
  });

  return (
    <div style={{ backgroundImage: `url('/bg-pattern.png')`}} className="relative bg-[#185D4E] bg-cover h-screen flex flex-col items-center justify-center space-y-[60px]">
        <div className='absolute top-0 z-20 flex space-x-[700px]'>
          <img src={candle} alt="candle" className='h-96' />
          <img src={candleFlip} alt="candle" className='h-96' />
        </div>
        <div className='absolute top-[30%] z-10 flex space-x-[900px]'>
          <img src={star} alt="candle" className='h-32' />
          <img src={starFlip} alt="candleFlip" className='h-32' />
        </div>
        <div className='bg-black/20 flex w-fit py-[14px] px-[28px] space-x-4 z-10'>
          <Time name='Days' value={days2} type='first' />
          <Time name='Hours' value={hours2} />
          <Time name='Minutes' value={minutes2} />
          <Time name='Seconds' value={seconds2} />
        </div>
        <img src={hr} alt="hr" className='w-[200px] z-10' />
        <div className='flex flex-col items-center space-y-[20px] z-10'>
          <p className='text-white font-[700] text-3xl'>Head to</p>
          <p className='text-[rgb(254,194,0)] font-[700] text-6xl'>Ramadhan</p>
          <p className='text-[#FEC200] font-[700] text-3xl'>2023 M/ 1443 H</p>
        </div>
        <p className='text-white z-10 text-xs'>By <a href="https://www.instagram.com/auliasabri.io/" className='underline underline-offset-2'>@pecandukode</a></p>
        <div className='absolute bottom-0'>
          <img src={mosque} alt="mosque" />
        </div>
    </div>
  );
}

export default App;
