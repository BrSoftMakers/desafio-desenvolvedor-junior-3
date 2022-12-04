import { ReactNode } from 'react';

import { Container } from './styles';

export interface IButtonProps {
  whiteSchema: boolean
  children: ReactNode
  rest?: string[]
  onClick?: () => void

}

export function Button({ children, whiteSchema = false,onClick, ...rest }: IButtonProps) {
  return (
    <Container onClick={onClick} type='submit' whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
}
