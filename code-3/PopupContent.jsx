import React from 'react'

const PopupContent = ({copied}) => {
  return (
    <section>
     
     {copied && (
        <div style={{
            position: 'absolute',
            bottom: '3rem'
        }}>Copied to clickboard</div>
     )}
    </section>
  )
}

export default PopupContent
