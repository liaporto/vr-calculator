import React from 'react'

type FormControlProps = {
  children: JSX.Element | Array<JSX.Element>;
}

const FormControl = ({children}:FormControlProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default FormControl