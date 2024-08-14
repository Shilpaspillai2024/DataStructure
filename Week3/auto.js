class Node{
    constructor(){
        this.children={}
        this.endofword=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char]=new Node()
            }
            curr=curr.children[char]
        }
        curr.endofword=true
    }

    search(word){
        let node=this.root
        for(let char of word){

            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.endofword
    }

    autosuggestion(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }
        let list=[]
        this.collectword(node,word,list)
        return list

    }

    collectword(node,word,list){
        if(node.endofword){
            list.push(word)
        }
        for(let char in node.children){
           this.collectword(node.children[char],word+char,list) 
        }
    }

    delete(word){
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node,word,index){
        if(index===word.length){
            if(!node.endofword){
                return false
            }
            node.endofword=false
            return Object.keys(node.children).length===0


        }
        let char=word[index]
        if(!node.children[char]) return false
        let deletechild=this.deleteHelper(node.children[char],word,index+1)
        if(deletechild){
            this.delete.node.children[char]
            return Object.keys(node.children).length===0 && !node.endofword
        }

    return false

    }
}
const trie=new Trie()
trie.insert("APPLE")
trie.insert("APP")
trie.insert("APPU")
trie.insert("BABU")
console.log(trie.search("BABU"))
console.log(trie.autosuggestion("APP"))
trie.delete("APP")
console.log(trie.search("APP"))
