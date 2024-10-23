const codinglanguage = ['js','java','python','swift'];
codinglanguage.forEach(function (language){
    console.log(language);
})

codinglanguage.forEach((language,index,arr) => {
    console.log(language,index,arr);
})



const myCoding = [{
    name: 'javascript',
    type: 'scripting',
    level: 'intermediate',
},
{
    name: 'java',
    type: ' not a scripting',
    level: 'high level language',
}]

myCoding.forEach( (item) => {
console.log(item);
})
