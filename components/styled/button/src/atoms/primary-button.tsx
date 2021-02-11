import { FC } from 'react'
import Button, { ButtonProps } from './button'

const PrimaryButton: FC<ButtonProps> = ({ type, value, disabled = false }) => (
  <Button type={type} value={value} buttonStyle="primary" disabled={disabled} />
)

export default PrimaryButton
