import React from 'react';

// import styled from '@emotion/styled';
// import { Global } from '@emotion/react/macro';

// import { darkTheme, lightTheme, spacing } from '../src/styles';
// import styles from '@gemini-design/styles';

// .storybook/preview.tsx

// import { Preview } from '@storybook/react';

// import { ThemeProvider } from 'styled-components';

const preview = {
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {/* <Global styles={styles()} /> */}

        <Story />
      </>
    ),
  ],
};

export default preview;
