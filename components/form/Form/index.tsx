import React, { PropsWithChildren, useState } from 'react'

const Form = ({children}:PropsWithChildren) => {
  return (
    <form>
      {children}
    </form>
  )
}

export default Form