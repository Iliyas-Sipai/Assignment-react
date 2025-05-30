export const inst = "INSERT"
export const del = "DELETE"
export const upd = "UPADETE"

export const instFun = (data) => {
    return {
         type:inst,
         payload:data
        }
}
export const delFun = (id) =>{
    return{
        type:del,
        payload:id
    }
}
export const updFun = (id,data)=>{
    return {
        type:upd,
        payload:{id,data}
    }
}
