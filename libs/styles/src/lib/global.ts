import { css } from '@emotion/react/macro';
import {
  defaultFontSet,
  fonts,
  focus,
  spacing,
  borders,
  typography,
  palette,
  background,
  icon,
  text,
} from './';

// needs a separate css file to prevent FOUT
import './fonts.css';

export const styles = css`
  :root {
    /* BACKGROUND COLORS */
    --background-body: ${background.body};
    --background-critical: ${background.critical};
    --background-info: ${background.info};
    --background-layer: ${background.layer};
    --background-overlay: ${background.overlay};
    --background-selection: ${background.selection};
    --background-success: ${background.success};

    /* BORDER COLORS */
    --border-color-critical: ${borders.color.critical};
    --border-color-dashed: ${borders.color.dashed};
    --border-color-default: ${borders.color.default};
    --border-color-strong: ${borders.color.strong};
    --border-color-success: ${borders.color.success};
    --border-color-active: ${borders.color.active};
    --border-color-tab-weak: ${borders.color.weak};

    /* BORDER WIDTHS */
    --border-width-default: ${borders.width.default};
    --border-width-thick: ${borders.width.thick};
    --border-width-thicker: ${borders.width.thicker};

    /* BORDER RADII */
    --border-radius-default: ${borders.radius.default};

    /* BORDER */
    --border-default: var(--border-width-default) solid ${borders.color.default};
    --border-thick: var(--border-width-thick) solid ${borders.color.default};
    --border-thicker: var(--border-width-thicker) solid ${borders.color.default};

    /* FOCUS */
    --focus-color-default: ${focus.color.default};
    --focus-width-default: ${focus.width.default};

    /* ICONS */
    --icon-color-default: ${icon.color.default};
    --icon-color-critical: ${icon.color.critical};

    /* PALETTE COLORS */
    --palette-black: ${palette.black};
    --palette-blue: ${palette.blue};
    --palette-gray: ${palette.gray};
    --palette-green: ${palette.green};
    --palette-pink: ${palette.pink};
    --palette-red: ${palette.red};
    --palette-white: ${palette.white};
    --palette-yellow: ${palette.yellow};

    /* SPACING */
    --spacing-none: ${spacing.none};
    --spacing-xxsmall: ${spacing.xxsmall};
    --spacing-xsmall: ${spacing.xsmall};
    --spacing-small: ${spacing.small};
    --spacing-medium: ${spacing.medium};
    --spacing-large: ${spacing.large};
    --spacing-xlarge: ${spacing.xlarge};
    --spacing-xxlarge: ${spacing.xxlarge};
    --spacing-huge: ${spacing.huge};
    --spacing-massive: ${spacing.massive};
    --spacing-xmassive: ${spacing.xmassive};
    --spacing-xxmassive: ${spacing.xxmassive};
    --spacing-giant: ${spacing.giant};

    /* TEXT COLORS */
    --text-color-critical: ${text.color.critical};
    --text-color-default: ${text.color.default};
    --text-color-strong: ${text.color.strong};

    /* TYPOGRAPHY */
    --typography-body-family: ${typography.body.family};
    --typography-body-letter-spacing: ${typography.body.letterSpacing};
    --typography-body-line-height: ${typography.body.lineHeight};
    --typography-body-size: ${typography.body.size};
    --typography-body-transform: ${typography.body.transform};
    --typography-body-weight: ${typography.body.weight};

    --typography-button-family: ${typography.button.family};
    --typography-button-letter-spacing: ${typography.button.letterSpacing};
    --typography-button-line-height: ${typography.button.lineHeight};
    --typography-button-size: ${typography.button.size};
    --typography-button-transform: ${typography.button.transform};
    --typography-button-weight: ${typography.button.weight};

    --typography-descriptive-small-family: ${typography.descriptiveSmall
      .family};
    --typography-descriptive-small-letter-spacing: ${typography.descriptiveSmall
      .letterSpacing};
    --typography-descriptive-small-line-height: ${typography.descriptiveSmall
      .lineHeight};
    --typography-descriptive-small-size: ${typography.descriptiveSmall.size};
    --typography-descriptive-small-transform: ${typography.descriptiveSmall
      .transform};
    --typography-descriptive-small-weight: ${typography.descriptiveSmall
      .weight};

    --typography-descriptive-medium-family: ${typography.descriptiveMedium
      .family};
    --typography-descriptive-medium-letter-spacing: ${typography
      .descriptiveMedium.letterSpacing};
    --typography-descriptive-medium-line-height: ${typography.descriptiveMedium
      .lineHeight};
    --typography-descriptive-medium-size: ${typography.descriptiveMedium.size};
    --typography-descriptive-medium-transform: ${typography.descriptiveMedium
      .transform};
    --typography-descriptive-medium-weight: ${typography.descriptiveMedium
      .weight};

    --typography-descriptive-large-family: ${typography.descriptiveLarge
      .family};
    --typography-descriptive-large-letter-spacing: ${typography.descriptiveLarge
      .letterSpacing};
    --typography-descriptive-large-line-height: ${typography.descriptiveLarge
      .lineHeight};
    --typography-descriptive-large-size: ${typography.descriptiveLarge.size};
    --typography-descriptive-large-transform: ${typography.descriptiveLarge
      .transform};
    --typography-descriptive-large-weight: ${typography.descriptiveLarge
      .weight};

    --typography-field-family: ${typography.field.family};
    --typography-field-letter-spacing: ${typography.field.letterSpacing};
    --typography-field-line-height: ${typography.field.lineHeight};
    --typography-field-size: ${typography.field.size};
    --typography-field-transform: ${typography.field.transform};
    --typography-field-weight: ${typography.field.weight};

    --typography-filters-family: ${typography.filters.family};
    --typography-filters-letter-spacing: ${typography.filters.letterSpacing};
    --typography-filters-line-height: ${typography.filters.lineHeight};
    --typography-filters-size: ${typography.filters.size};
    --typography-filters-transform: ${typography.filters.transform};
    --typography-filters-weight: ${typography.filters.weight};

    --typography-label-family: ${typography.label.family};
    --typography-label-letter-spacing: ${typography.label.letterSpacing};
    --typography-label-line-height: ${typography.label.lineHeight};
    --typography-label-size: ${typography.label.size};
    --typography-label-transform: ${typography.label.transform};
    --typography-label-weight: ${typography.label.weight};

    --typography-meta-family: ${typography.meta.family};
    --typography-meta-letter-spacing: ${typography.meta.letterSpacing};
    --typography-meta-line-height: ${typography.meta.lineHeight};
    --typography-meta-size: ${typography.meta.size};
    --typography-meta-transform: ${typography.meta.transform};
    --typography-meta-weight: ${typography.meta.weight};

    --typography-nav-family: ${typography.nav.family};
    --typography-nav-letter-spacing: ${typography.nav.letterSpacing};
    --typography-nav-line-height: ${typography.nav.lineHeight};
    --typography-nav-size: ${typography.nav.size};
    --typography-nav-transform: ${typography.nav.transform};
    --typography-nav-weight: ${typography.nav.weight};

    --typography-h1-family: ${typography.h1.family};
    --typography-h1-letter-spacing: ${typography.h1.letterSpacing};
    --typography-h1-line-height: ${typography.h1.lineHeight};
    --typography-h1-size: ${typography.h1.size};
    --typography-h1-transform: ${typography.h1.transform};
    --typography-h1-weight: ${typography.h1.weight};
    --typography-h2-family: ${typography.h2.family};
    --typography-h2-letter-spacing: ${typography.h2.letterSpacing};
    --typography-h2-line-height: ${typography.h2.lineHeight};
    --typography-h2-size: ${typography.h2.size};
    --typography-h2-transform: ${typography.h2.transform};
    --typography-h2-weight: ${typography.h2.weight};
    --typography-h3-family: ${typography.h3.family};
    --typography-h3-letter-spacing: ${typography.h3.letterSpacing};
    --typography-h3-line-height: ${typography.h3.lineHeight};
    --typography-h3-size: ${typography.h3.size};
    --typography-h3-transform: ${typography.h3.transform};
    --typography-h3-weight: ${typography.h3.weight};
    --typography-h4-family: ${typography.h4.family};
    --typography-h4-letter-spacing: ${typography.h4.letterSpacing};
    --typography-h4-line-height: ${typography.h4.lineHeight};
    --typography-h4-size: ${typography.h4.size};
    --typography-h4-transform: ${typography.h4.transform};
    --typography-h4-weight: ${typography.h4.weight};
    --typography-h5-family: ${typography.h5.family};
    --typography-h5-letter-spacing: ${typography.h5.letterSpacing};
    --typography-h5-line-height: ${typography.h5.lineHeight};
    --typography-h5-size: ${typography.h5.size};
    --typography-h5-transform: ${typography.h5.transform};
    --typography-h5-weight: ${typography.h5.weight};
    --typography-h6-family: ${typography.h6.family};
    --typography-h6-letter-spacing: ${typography.h6.letterSpacing};
    --typography-h6-line-height: ${typography.h6.lineHeight};
    --typography-h6-size: ${typography.h6.size};
    --typography-h6-transform: ${typography.h6.transform};
    --typography-h6-weight: ${typography.h6.weight};

    /**
    * ? TYPOGRAPHY UTILITY CLASSES
    * 
    * These classes are used to apply typography styles to elements.
    * The goal being to keep the markup semantic and the styles reusable.
    *
    * @syntax
    * .{library-prefix}--{typography-type}
    *
    * @example
    * <div class="toolkit--h1">This is an h1</div>
    */
    .toolkit--h1 {
      font-family: var(--typography-h1-family);
      font-size: var(--typography-h1-size);
      font-weight: var(--typography-h1-weight);
      letter-spacing: var(--typography-h1-letter-spacing);
      line-height: var(--typography-h1-line-height);
      text-transform: var(--typography-h1-transform);
    }

    .toolkit--h2 {
      font-family: var(--typography-h2-family);
      font-size: var(--typography-h2-size);
      font-weight: var(--typography-h2-weight);
      letter-spacing: var(--typography-h2-letter-spacing);
      line-height: var(--typography-h2-line-height);
      text-transform: var(--typography-h2-transform);
    }

    .toolkit--h3 {
      font-family: var(--typography-h3-family);
      font-size: var(--typography-h3-size);
      font-weight: var(--typography-h3-weight);
      letter-spacing: var(--typography-h3-letter-spacing);
      line-height: var(--typography-h3-line-height);
      text-transform: var(--typography-h3-transform);
    }

    .toolkit--h4 {
      font-family: var(--typography-h4-family);
      font-size: var(--typography-h4-size);
      font-weight: var(--typography-h4-weight);
      letter-spacing: var(--typography-h4-letter-spacing);
      line-height: var(--typography-h4-line-height);
      text-transform: var(--typography-h4-transform);
    }

    .toolkit--h5 {
      font-family: var(--typography-h5-family);
      font-size: var(--typography-h5-size);
      font-weight: var(--typography-h5-weight);
      letter-spacing: var(--typography-h5-letter-spacing);
      line-height: var(--typography-h5-line-height);
      text-transform: var(--typography-h5-transform);
    }

    .toolkit--h6 {
      font-family: var(--typography-h6-family);
      font-size: var(--typography-h6-size);
      font-weight: var(--typography-h6-weight);
      letter-spacing: var(--typography-h6-letter-spacing);
      line-height: var(--typography-h6-line-height);
      text-transform: var(--typography-h6-transform);
    }

    .toolkit--body {
      font-family: var(--typography-body-family);
      font-size: var(--typography-body-size);
      font-weight: var(--typography-body-weight);
      letter-spacing: var(--typography-body-letter-spacing);
      line-height: var(--typography-body-line-height);
      text-transform: var(--typography-body-transform);
    }

    .toolkit--descriptive-small {
      font-family: var(--typography-descriptive-small-family);
      font-size: var(--typography-descriptive-small-size);
      font-weight: var(--typography-descriptive-small-weight);
      letter-spacing: var(--typography-descriptive-small-letter-spacing);
      line-height: var(--typography-descriptive-small-line-height);
      text-transform: var(--typography-descriptive-small-transform);
    }

    .toolkit--descriptive-medium {
      font-family: var(--typography-descriptive-medium-family);
      font-size: var(--typography-descriptive-medium-size);
      font-weight: var(--typography-descriptive-medium-weight);
      letter-spacing: var(--typography-descriptive-medium-letter-spacing);
      line-height: var(--typography-descriptive-medium-line-height);
      text-transform: var(--typography-descriptive-medium-transform);
    }

    .toolkit--descriptive-large {
      font-family: var(--typography-descriptive-large-family);
      font-size: var(--typography-descriptive-large-size);
      font-weight: var(--typography-descriptive-large-weight);
      letter-spacing: var(--typography-descriptive-large-letter-spacing);
      line-height: var(--typography-descriptive-large-line-height);
      text-transform: var(--typography-descriptive-large-transform);
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.2s ease-out;
  }

  html,
  body {
    background: var(--background-body);
    color: var(--text-color-default);
    font-family: ${defaultFontSet};
    line-height: 1.4;
    margin: 0;
    overscroll-behavior: none;
    padding: 0;
  }

  a {
    color: var(--text-color-default);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: none;
    outline: none;
    font-family: ${defaultFontSet};

    :focus {
      box-shadow: 0 0 0 var(--focus-width-default) var(--focus-color-default);
    }
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${fonts.heading};
    margin-block-end: 1%;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.3125rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: normal;
    margin-bottom: var(--spacing-medium);
  }

  input {
    font-family: ${defaultFontSet};
  }

  img {
    width: 100%;
  }

  label {
    font-family: ${defaultFontSet};
    font-size: var(--typography-label-size);
  }

  legend {
    font-size: 0.75rem;
    font-weight: bold;
  }

  ol,
  ul {
    list-style: none;
    padding-left: 0;
  }

  small {
    font-size: 0.625rem;
    line-height: 1.6;
  }

  span {
    font-family: ${defaultFontSet};
  }

  svg {
    color: var(--icon-color-default);
  }

  .no-scroll {
    overflow-y: hidden;
  }
`;

// export default styles;
