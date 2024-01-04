let celciusInput= document.querySelector('#celcius> input')
let farInput= document.querySelector('#far> input')
let kelvinInput= document.querySelector('#kelvin> input')

let btn = document.querySelector('#button button')

function roundnumber(number){
  return Math.round(number*100)/100
}
celciusInput.addEventListener('input',function(){
  let ctemp = parseFloat(celciusInput.value)
  let ftemp= (ctemp*(9/5))+32
  let ktemp=  ctemp+273.15;
  farInput.value=roundnumber(ftemp)
  kelvinInput.value=roundnumber(ktemp)
})
farInput.addEventListener('input',function(){
  let ftemp = parseFloat(farInput.value)
  let ctemp= (ftemp-32)*(5/9)
  let ktemp=  (ftemp-32)*5/9+273.15
  celciusInput.value=roundnumber(ctemp)
  kelvinInput.value=roundnumber(ktemp)
})

kelvinInput.addEventListener('input',function(){
  let ktemp = parseFloat(kelvinInput.value)
  let ctemp= ktemp-273.15
  let ftemp= (ktemp-273.15)*9/5+32
  celciusInput.value=roundnumber(ctemp)
  farInput.value=roundnumber(ftemp)
})
btn.addEventListener('click',()=>{
  celciusInput.value=""
  farInput.value=""
  kelvinInput.value=""
})

