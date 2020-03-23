import { deepCopy} from '../utils/deepCopy';
console.log('--------------------------------------数组结构--------------------------------------');

class ArrayList{
    private array:any[];
    private size:number;
    constructor(size:number){
       this.size = size;
       this.array = new Array(size);
       size=0;
    }

    // 获取元素, O(1)
    public get(index:number){
      return this.array[index];
    }

    // 更新元素, O(1)
    public update(index:number,newValue:any){
        this.array[index]=newValue;
    }

    // 插入元素
    public insert(index:number,newValue:any){
        if(index<0 || index>this.size){
           throw new Error('超出数组元素实际范围');
        }
        for(let i=this.size-1;i>=index;i--){
           this.array[i+1] = this.array[i];
        }
        this.array[index] = newValue;
        this.size++;
    }

    public resize(){
        // 
        if(this.array.length > this.size){
           this.array = new Array(this.size*2);
        }
    }

    public Length(){
        return this.array.length;
    }
}

let arraylist = new ArrayList(10);
console.log('array:',arraylist);
console.log(':',arraylist.get(3));
arraylist.insert(2,'insertEle')
console.log(':',arraylist);