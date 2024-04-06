

    function loginUserMassage(username){
        if(true){
            console.log(`${username} has loged in`)
            return "return value"
        }
       
        return console.log(`value is = ${username}`);   
         //return ke phle ka instuction execute hota hai
        
    }
    
    console.log(loginUserMassage("rinku ji"))


    //rest opretor -> skele wala kam

    function calculateCartPrice(num,...num1){
        console.log(num)
        return num1
        
    }
    console.log(calculateCartPrice(100,233,983,444))


    // object ko funtion me pass karna
    const user ={
        name :"rinku",
        branch:"it"
    }
    // const dusraobj = {
    //     name : "gangu",
    //     branch :"cs"
    // }

    function handeObject(anyobject){
        console.log(`${anyobject.name} is present in ${anyobject.branch}`)
    }
    handeObject(user)
    handeObject({
        name :"ritesh",
        branch : "teli"
    })  //direct object bhi pass kar skte hai

    //array ko kaise pass kare funtion me


    const myarry = [10,20,30,"ritesh"]
    const [num1,num2,num3,text] = myarry

    function returnarry(getarry){
        console.log(num3)
        return getarry[3]
        
    }
    console.log(num1)
    console.log(returnarry(myarry))





