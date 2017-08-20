import React from 'react'

export default ({height, width, hasErrored, isLoading, location}) => {
  let statusClass

  if (location) {
    statusClass = 'success'
  } else if (isLoading) {
    statusClass = 'isLoading'
  } else if (hasErrored) {
    statusClass = 'hasErrored'
  } else {
    statusClass = 'isLoading'
  }

  return (

    <svg className={'animated-location-loader ' + statusClass} width={width || '900px'} height={height || '900px'} viewBox='0 0 905 905'>
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <path className='marker' d='M650.988005,336.213419 C653.508995,431.827384 586.8653,577.049576 451.05692,771.879995 L451.05692,771.96165 C451.047433,771.948041 451.037947,771.934432 451.02846,771.920824 C451.018974,771.934432 451.009487,771.948041 451,771.96165 L451,771.879995 C315.916908,578.090071 249.261722,433.379922 251.034444,337.749548 C251.011515,336.50245 251,335.25257 251,334 C251,223.54305 340.54305,134 451,134 C561.45695,134 651,223.54305 651,334 C651,334.738749 650.995995,335.476562 650.988005,336.213419 Z M451,434 C506.228475,434 551,389.228475 551,334 C551,278.771525 506.228475,234 451,234 C395.771525,234 351,278.771525 351,334 C351,389.228475 395.771525,434 451,434 Z' id='marker' stroke='#979797' fill='#D8D8D8' />
        <path d='M451,903 L451,903 C699.528137,903 901,701.528137 901,453 C901,204.471863 699.528137,3 451,3' id='outer-2' stroke='#979797' />
        <path d='M1,903 L1,903 C249.528137,903 451,701.528137 451,453 C451,204.471863 249.528137,3 1,3' id='outer-1' stroke='#979797' transform='translate(226.000000, 453.000000) scale(-1, 1) translate(-226.000000, -453.000000) ' />
        <g id='yes-no' transform='translate(7.000000, 148.000000)' stroke='#979797' strokeLinecap='round'>
          <path d='M144.5,377.5 L344.5,577.5' id='yes-1' />
          <path d='M344.5,577.5 L741.5,31.5' id='yes-2' />
          <g id='No' transform='translate(110.000000, 0.000000)'>
            <path d='M34,30 L630.02649,576.357616' id='Line-4' />
            <path d='M630.02649,30 L34,576.357616' id='Line-5' />
          </g>
        </g>
        <circle id='ping-ring' stroke='#979797' cx='451' cy='451' r='450' />
        <circle id='ping-ring2' stroke='#979797' cx='451' cy='451' r='450' />
      </g>
    </svg>
  )
}
