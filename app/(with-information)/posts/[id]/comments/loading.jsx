import React from 'react'
import { LoadingAnimation } from '../../../../../components/LoadingAnimartion/LoadingAnimation'

export default function loading() {
  return (
    <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
        <LoadingAnimation/>
    </div>
  )
}
