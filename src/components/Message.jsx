import React, { useEffect } from 'react'

export const Message = () => {

 useEffect(() => {
   console.log('message Mounted');
 
   return () => {
    console.log('message  unmounted');
   }
 }, [])
 

  return (
  <>
  <h3 className='mt-2'>Usuario ya existe</h3>
  </>
  )
}
