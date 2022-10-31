import React from 'react'
import Svg from '../pages/svg/404'

const Button = () => {
  return (
    <>
      <div className="pt-5">
        <div className="flex items-center justify-center">
          <button className="bg-black text-white p-2 rounded-lg shadow-xl hover:bg-white hover:text-black hover:outline-none hover:ring hover:ring-black">
            click here
          </button>
          <Svg />
        </div>
      </div>
    </>
  )
}

export default Button
