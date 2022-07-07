async function getData() {
    return {
        length: 1,
        list: [1]
    }
}

async function getOtherData() {
    return [1]
}

async function test() {
    if ((await getData()).length > 1) {
        return 'data length > 1';
    } else if ((await getData()).length < 1) {
        return 'data length < 1';
    } else {
        return await getOtherData();
    }
}