import React from 'react'
import Button, { ButtonProps } from './button'

const PrimaryButton: React.FC<ButtonProps> = ({ type, value, disabled = false }) => (
  <Button type={type} value={value} buttonStyle="primary" disabled={disabled} />
)

export default PrimaryButton
