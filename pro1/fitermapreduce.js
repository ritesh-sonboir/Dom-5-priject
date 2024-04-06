

     const codingLanguage = ['java','python','c++','Ruby','html']

     const value = codingLanguage.forEach((item)=>{
        //console.log(item);
        return item;
     })
     console.log(value);
     //for each koi vale return nahi karta iska value undefine hota hai

     const mynum = [1,2,3,4,5,6,6,7];

     console.log("filter keyword")

     //const filNum = mynum.filter((num)=>{ 
         // ye mistake hai jisse null value chali jati hai
        //ye implicite retern ke karan yaha par return keyword use hoga
        //num > 4;
     //   return num >4;
     //})

     //for each me bina filter ke
     const newnum =[]
     const forfil = mynum.forEach((num)=>{
        
        if(num>4){
         newnum.push(num)
          
        }
     })
     console.log(newnum);

     console.log("map funtion")


     const mapaddten = mynum.map((num)=>num+10)
     console.log(mapaddten)


     //channing of map and other method => ek sath muliple map ya dusre 
     //combination dena
    const chainNum =  mynum
                  .map((num)=>num*10)
                  .map((num)=>num+1)
                  .filter((num)=>num>30)
    console.log("Chain value =>",chainNum)




    console.log("reduce key")
    //reduce => reduce((accu,currentvalue)=>{},initialvalue)
    //acumlator => initialvalue{0},currentvalue => array ki value[1 fir,2,3]
    let a = [1,2,3,4]
    const tottlval = a.reduce((acc,currevalue)=>{
        console.log(`accumlator => ${acc}
         currentvalue =>${currevalue}`)
        return acc+currevalue;
    },0)

    console.log(tottlval);

    //let suppos with example

    const shopProduct = [
        {
            item :"juta",
            price : 200
        },
        {
            item :"kapda",
            price : 500
        },
        {
            item :"juta",
            price : 300
        }
    ]

    const totalprice =shopProduct.reduce((acc,itemp) => acc+itemp.price,0)
    console.log("totle price hai => ",totalprice);







     //const filCar = codingLanguage.find((char)=>char='java')
     



