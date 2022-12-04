import { ReactNode } from 'react';

import { Container } from './styles';

export interface IButtonProps {
  whiteSchema: boolean
  children: ReactNode
  rest?: string[]
  onClick?: () => void
  size: boolean
}

export function Button({ size, children, whiteSchema = false, onClick, ...rest }: IButtonProps) {
  return (
    <Container size={size} onClick={onClick} type='submit' whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
}
