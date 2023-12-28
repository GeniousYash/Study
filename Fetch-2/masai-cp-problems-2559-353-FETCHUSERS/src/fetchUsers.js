const getUsersData = async () => {
  try {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users");

    console.log("res:",res);
    let data = await res.json();
    console.log("data:",data);
    console.log("data:",data.data);
    let totalPages = data.totalPages;
    console.log("totalPages:",totalPages);
    let data1 = data.data[0];
    console.log("data1:",data1);
    let data2 = data.data[1];
    console.log("data2:",data2);
    var data3 = [];
    for(let i=2; i<=data.data.length-1; i++){
      data3.push(data.data[i]);
    }
    
    console.log("data3:",data3);

   
  } catch (err) {
    console.log("err:",err);
  }
};

getUsersData();

function splitData(){

  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
