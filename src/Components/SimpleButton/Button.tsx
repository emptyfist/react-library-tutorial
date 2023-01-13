import * as React from 'react'

interface Props {
  label: string
}

const SimpleButton = ({ label }: Props) => {
  return <button className="emptyfist-btn">{label}</button>
}

export default SimpleButton;