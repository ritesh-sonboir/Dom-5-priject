
    let arr = [1,3,3,3,"ritesh",3]
    console.log(arr)
    arr.push(10);
    console.log(arr)

    arr.pop()
    console.log(arr)

    arr.unshift(30)
    console.log(arr)
    //suru me add ho jayga, todo list wale app me use kiya ja skta hai 
    //baki optimization ke liye thik nahi hai kyoko sari value shift hone se operation
    //time leta hai, koi argument nahi leta

    console.log(arr.includes(3 && 1))
    console.log(arr.indexOf("ritesh"))
    console.log(arr.indexOf(10)) //agr value nahi huai to -1 deta hai

    const arr2 = [1,3,3,4,5,6,6,6]
    const bindarr2 = arr2.join()  //array ko string me convert
    console.log(arr2)
    console.log(typeof bindarr2)



    //slice and splice 


   const  a = [1,23,4,5,6,7]
   console.log("origenel array before =>",a)
   
   const slicekaro = a.slice(0,3)
   console.log("slice values =>" ,slicekaro);

   console.log(a)

   console.log("origenel array after slice operation =>",a)

   const splicekaro = a.splice(0,3)
   console.log("spice values =>",splicekaro)

   //splice origenel array ko manupulate karta hai aur changes kar deta hai , isme 
   //isme range include hoti hai

   console
   .log("origenel array after splice operation",a)



   //array funtion 

   const af = [1,2,3,4,4,5]
   const af2 = [1,2,3,4,4,6]

  // const bf = af.push(af2)  //pura array push hokar ek element ban jayga

   console.log(af)



//to array ko ek me kaise jode 

  const allarr = af.concat(af2)
  
  console.log(allarr)
  console.log(typeof allarr)

  //dusra tarika hai spread method se

  const sprall = [...af,...af2]
  console.log('spread arrays =>',sprall)



  const anotherarr = [1,2,3,[4,6],[5,6,7,[7,8]]]
  
  const convarr = anotherarr.flat(Infinity)
  
  console.log(anotherarr)
  console.log(convarr)


 console.log(Array.isArray(anotherarr))
 console.log(Array.from("rinku")) //array me convert kar dega

 console.log(Array.from({name : "rinkuji"})) //ise directly to nai convert kar skta but i
 //key ya value dene par kar skta hai

  let x =1
  let y = 2
  let z = 4
  console.log(Array.of(x,y,z)) //array bana dega



    

