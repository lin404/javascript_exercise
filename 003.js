class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    // add a item at the end of array
    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.data;
    }

    // delete the last item
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length --;
        return lastItem;
    }

    // delete the specified index of item in array
    deleteAtIndex(index){
        const item = this.data[index];
        shiftItem(index);
        return item;
    }

    shiftItem(index){
        for(let i=index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length --;
        return this.data;
    }
}

const myArray = new MyArray();
myArray.push('0');
myArray.push('1');
myArray.push('2');
console.log(myArray);