async function nestedLoops() {
    A: while (x) {
        await y;
        while (z) {
            continue A;
        }
        while (a) {
            continue;
        }
    }
}