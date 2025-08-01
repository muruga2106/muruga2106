function test(cb) {
    cb();
}

const obj = {
    name: 'test',
    func: function () {
        console.log(this.name);
        // const self = this;
        test(() => {
            console.log('callback:', this.name);
        });
    }
};

obj.func();

// const newFnc = obj.func.bind(obj);
const newFnc = obj.func();
newFnc();

const p1 = { name: 'p1' };
obj.func.call(p1);