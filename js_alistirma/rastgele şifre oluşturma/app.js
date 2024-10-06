//rastgele küçük harf üretir
const getRandomLower= ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

//restgele büyük harf oluşturma
const getRandomUpper= ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}


//rastgele sayı oluşturma
const getRandomNumber= ()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

const getRandomSymbol=()=>{
    const symbols=['!','@','#','$','%','^','&','*',',']
    return symbols[Math.floor(Math.random()*symbols.length)]
}


const randomFunctions = {getRandomLower,getRandomNumber,getRandomUpper,getRandomSymbol}

const generatedPassword =()=>{
    const length =16
    let generatedPassword=''
    for(let x=0; x<length; x++){
        generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random()*4)]()
    }
    return generatedPassword
}


const button = document.querySelector("#generate")
const spanResult = document.getElementById('result')

button.addEventListener('click',()=>{
    spanResult.textContent = generatedPassword()

})
