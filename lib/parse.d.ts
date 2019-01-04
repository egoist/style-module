interface RuleObj {
    [k: string]: string | RuleObj;
}
declare function wrap(stringToWrap: string, wrapper: string): string;
declare function parse(obj: RuleObj, className: string, isInsideObj?: boolean): string[];
export { RuleObj, parse, wrap };
