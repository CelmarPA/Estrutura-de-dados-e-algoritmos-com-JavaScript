// defaultEquals:
export function defaultEquals(a, b) {
    return a === b;
}

// Compare elements:
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

// defaultCompare:
export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}