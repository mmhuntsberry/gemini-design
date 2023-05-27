import styled from '@emotion/styled';
import '@gemini-design/styles';
import React from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  background-color: var(--palette-green);
  color: var(--palette-black);
  padding: var(--spacing-small) var(--spacing-medium);
  border: none;
  border-radius: var(--spacing-small);
`;
export default Button;
