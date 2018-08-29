// themed-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule, ThemedStyledFunction } from 'styled-components';

//  import { Theme } from './theme'; // custom theme

// type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ITheme>;

// function withProps<T, U extends HTMLElement = HTMLElement>(
// styledFunction: StyledFunction<React.HTMLProps<U>>,
// ): StyledFunction<T & React.HTMLProps<U>> {
// return styledFunction;
// }

const withProps = <U>() =>
    <P, T, O>(
        fn: ThemedStyledFunction<P, T, O>
    ): ThemedStyledFunction<P & U, T, O & U> => fn;

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, withProps };
export default styled;

export interface Theme {
    modee?: string;
}