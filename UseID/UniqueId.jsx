import React, {useId} from 'react'

const UniqueId = () => {

    const id = useId();
    const id2 = useId();
  return (
    <div>
      <label htmlFor={`${id}`}>Email</label>
      <input type="email" id={`${id}`} />

      <label htmlFor={`${id}`}>password</label>
      <input type="password" id={`${id}`} />
    </div>
  )
}

export default UniqueId
