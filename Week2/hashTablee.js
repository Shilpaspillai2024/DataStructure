class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size

    }
    set(key, value) {
        const index=this.hash(key)
        this.table[index]=value

    }
    get(key) {
        const index=this.hash(key)
        return this.table[index]

    }
    remove(key) {
        const index=this.hash(key)
        this.table[index]=undefined


    }

    display() {
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }

    }

    removeDupli(str){
        let result=''
        for(let i=0;i<str.length;i++){
            const char=str[i]
            if(!this.get(char)){
                this.set(char,true)
                result+=char
            }
        }
        return result
    }
}

const table=new HashTable(20)
// table.set('name','shilpa')
// table.display()

const str="programming"
console.log(table.removeDupli(str))