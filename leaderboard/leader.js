
// let x=`${process.env.PORT}/view`

let x="http://localhost:3000/view";
fetch(x).then((data)=>{
    return data.json();// converted to object
}).then((ObjectData)=>{
  // console.log(ObjectData);
  let tableData="";
  for(let i=0;i<ObjectData.length;i++){
    console.log(ObjectData[i]);
  }
  // ObjectData.forEach(values => {
  //    tableData+=`
  //    <tr>
  //      <td>${values.name}</td>
  //       <td>${values.puzzle1}</td>
  //        <td>${values.puzzle2}</td>
  //         <td>${values.puzzle3}</td>
  //        <td>${values.puzzle4}</td>
  //       <td>${values.puzzle5}</td>
  //      </tr>`;   
  // });
  // console.log(tableData);
  
  // document.getElementById("data").innerHTML=tableData;  
});
