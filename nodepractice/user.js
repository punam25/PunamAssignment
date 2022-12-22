var _ = require('lodash');
let userprofile={
    name: "punam",
    lastname: "patil",
    age: 28,
    address: {
        currentAddress: "pune",
        permanantAddress: "buldhana"
    },
    delivaryAddress:[
        {
            name:"snehal",
            address:"jalgaon",
            age:24
        },
        {
            name:"snehal",
            address:"pune",
            age:28
        },
        {
            name:"prerna",
            address:"bhusawal",
            age:27
        },
        {
            name:"pranav",
            address:"pune",
            age:25
        },
        {
            name:"punam",
            address:"pune",
            age:29
        },
        {
            name:"sunil",
            address:"pune",
            age:22
        }


    ]
};
let grouped = _.groupBy(userprofile.delivaryAddress,z => z.name);
    // console.log(grouped);

   let sortIndex= _.sortBy(userprofile.delivaryAddress, z=>z.age);
//    console.log("lodash sorted",sortIndex);

let sliceArray=_.slice(userprofile.delivaryAddress,1,4);
console.log(sliceArray);
    
// console.log(JSON.stringify(userprofile.delivaryAddress[1].name));

let sortedarray= userprofile.delivaryAddress.sort((a, b) => {

     if (a.age< b.age) {
  
       return -1;
  
     }
  
     return 0;
  
   });
    // console.log("Sorted  ",sortedarray);
    // console.log("sorted array access=>",JSON.stringify(userprofile.delivaryAddress[0]));
