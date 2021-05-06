function reverseWords(text){
    let text2=' '+ text
    console.log(text2)
    let textBaru= ""
    end= text2.length
    for(let panjang=text2.length-1; panjang>=0;panjang--){
        if(text2[panjang]==' '){
            start=panjang+1
            for(start;start<end;start++){
                textBaru += text2[start]
            }
            textBaru += ' '
            end=panjang                            

        }

    }
    
  console.log(textBaru)    
}


reverseWords('Saya Belajar Javascript')

