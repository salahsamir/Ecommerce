

export const TextSlicer=(text,num)=>{
    if(text.length>num){
        return text.slice(0,num)+"..."
    }else{
        return text
    }
}
