/* eslint-disable @next/next/no-img-element */
import { type } from 'os'
import React from 'react'

type StylesType = {
  color: string | number
}

const SpaceXStyles = (prop: StylesType) => {
  return (
    <div
      style={{
        height: 550,
        width: 500,
        backgroundColor: '#ddedf0',
        marginTop: 20,
        marginLeft: 420,
        borderRight: 'solid',

        borderLeft: 'solid',
        borderRadius: 45,
      }}
    >
      {prop.color}
    </div>
  )
}

export default SpaceXStyles
