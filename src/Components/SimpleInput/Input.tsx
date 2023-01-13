import * as React from 'react'

interface Props {
  placeholder: string
}

const SimpleInput = ({ placeholder }: Props) => {
  return <input className="emptyfist-input" placeholder={placeholder} />
}

export default SimpleInput;