import React from 'react';
import styled from '@emotion/styled';
import 'gemini-foundations';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--palette-pink);
  color: var(--palette-black);
  padding: var(--spacing-small) var(--spacing-medium);
  border: none;
  border-radius: var(--spacing-small);
`;
