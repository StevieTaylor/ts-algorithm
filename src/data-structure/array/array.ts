import { deepCopy } from '../../utils/deepCopy';
console.log('--------------------------------------数组结构--------------------------------------');

class ArrayList {
    private array: any[];
    // size：数组元素的实际数量
    private size: number;
    // capacity：数组的容量(长度) 
    constructor(capacity: number) {
        this.array = new Array(capacity);
        this.size = 0;
    }

    // 获取元素, O(1)
    public get(index: number) {
        return this.array[index];
    }

    // 更新元素, O(1)
    public set(index: number, newValue: any) {
        this.array[index] = newValue;
    }

    // 获取实际元素的数量
    public Size() {
        return this.size;
    }

    // 获取数组的容量(长度)
    public Capacity() {
        return this.array.length;
    }

    /**
     *  插入元素，有几种情形：
     *    1. 当 size = capacity时，数组满了，属于超范围插入
     *    2. 当 size < capacity时，再比较size和index
     *        2.1. 当 index < 0 时，超范围
     *        2.2. 当 index = 0 时，属于头部插入
     *        2.3. 当 0 < index < size时，属于中间插入
     *        2.4. 当 index = size时，属于尾部插入 
     *        2.5. 当 index > size时，超范围
     */
    public insert(index: number, newValue: any) {
        if (index < 0 || index > this.size) {
            throw new Error('超出数组元素实际范围');
        }
        // 当实际元素数量超过数组长度时
        if (this.size >= this.array.length) {
            this.array.length = this.array.length + 1;
            console.log(this.array);
        }
        // 从右向左循环，元素逐个右移1位
        for (let i = this.size - 1; i >= index; i--) {
            this.array[i] = this.array[i + 1];
        }
        this.array[index] = newValue;
        this.size++;
    }

    public resize() {
        // 
        this.array.length = this.array.length + 1;
    }

    // 头部插入
    public unshift(value: any) {
        this.insert(0, value);
    }

    // 尾部插入
    public push(value: any) {
        this.insert(this.size, value);
    }

    public add(value: any) {
        if (this.size >= this.Capacity()) {
            throw new Error('array is full');
        }
        this.array[this.size] = value;
        this.size++;
    }
}

let arraylist = new ArrayList(10);
for (let i = 0; i < 10; i++) {
    arraylist.add(`第${i}元素`);
}
console.log(arraylist);
console.log(arraylist.get(3));
arraylist.insert(2, 'insertElement');
// console.log(arraylist);