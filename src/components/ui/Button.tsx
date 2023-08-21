import React, { ReactElement, ReactNode } from 'react'

const Button = ({children, onClick}: {onClick: () => void, children: ReactElement | ReactNode}) => {
  return (
    <div className='flex flex-rơw cursor-pointer hover:text-opacity-white' onClick={onClick} >
        {children}
    </div>
  )
}

export default Button