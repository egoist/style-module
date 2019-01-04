import { RuleObj } from './parse';
declare let sheet: StyleSheet | {
    insertRule(rule: string, position: number): void;
    cssRules: {
        [k: string]: any;
    };
} | null;
declare function reset(): void;
declare function css(obj: RuleObj): string;
interface StyleModuleInput {
    [k: string]: RuleObj;
}
interface StyleModuleOutput {
    [k: string]: string;
}
declare function styleModule(obj: StyleModuleInput | (() => StyleModuleInput)): StyleModuleOutput;
declare function keyframes(obj: {
    [k: string]: {
        [k: string]: any;
    };
}): string;
export { css, styleModule, sheet, reset, keyframes };
