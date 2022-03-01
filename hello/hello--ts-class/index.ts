class HelloTsClassA {
    name = 'class hello';

    method() {
        console.log(`< hello method >`, this.name);
    }
}

class HelloTsClassB {
    name = 'class hello';

    constructor() {
        this.method = this.method.bind(this);
    }

    method() {
        console.log(`< hello method >`, this.name);
    }
}

class HelloTsClassC {
    name = 'class hello';

    method = () => {
        console.log(`< hello method >`, this.name);
    };
}
