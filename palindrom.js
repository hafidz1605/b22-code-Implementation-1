function palindrom(text){
    let textBaru= ""
    for(let panjang=text.length-1; panjang>=0;panjang--){
        textBaru += (text[panjang])

    }
    if (textBaru == text){
        console.log(`${text} adalah kata palindrom`)
    } else{
        console.log(`${text} bukan kata palindrom`)
    }
    
}

palindrom('katak')
palindrom('kecebong')
