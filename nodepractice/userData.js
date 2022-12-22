

const axios=require('axios');
var _ = require('lodash');
const getUserName=()=>{
  const url="https://jsonplaceholder.typicode.com/users";
  // const url="https://jsonplaceholder.typicode.com/todos/2";
  
  return axios
  .get(url)
  .then((response)=>{
    console.log(response.data);
    
    // let grouped = _.groupBy(response.data, z => z.username);
    // console.log(grouped);

    sortArray1= _.sortBy(response.data,z=>z.name);
    console.log("sorted by lodash",sortArray1);
     

  })
  .catch((error)=>{

    console.error(error);
  });
  

};

getUserName();
