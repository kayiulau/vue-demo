//const 类似 var
const STORAGE_KEY = 'todos-vuejs'
export default{
    //抓取
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },

    save(items){
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}