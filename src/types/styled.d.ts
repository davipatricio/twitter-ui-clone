import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    search: string;
    white: string;
    gray: string;
    outline: string;
    retweet: string;
    like: string;
    twitter: string;
    twitterDarkHover: string;
    twitterLightHover: string;
  }
}
