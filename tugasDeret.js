function deret(angka){
    if(typeof angka === 'number'){
        stringAngka = angka.toString()
             if (stringAngka.length<2){
                 console.log('angka harus berbentuk deret, minimal 2 angka')
             }else{ let arrayAngka=stringAngka.split('0')
                    let panjangArray=arrayAngka.length-1
                    angkaBaru=[]
                    for(let a=0;a<=panjangArray;a++){
                    let subArray = arrayAngka[a].split('')
                      subArray.sort(function(a, b){return a - b})
                      angkaBaru.push(subArray)
                    }
                }
                    console.log(angkaBaru.toString().replace(/,/g, ''))
    } else {console.log('input harus berupa angka')
             }

    }


deret(5956560159466056)
deret('a')