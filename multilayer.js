const fs = require('fs');

const { regionData } = require('./newRegionData.js');

let resultJSONData = [];

regionData.forEach( province_ele => {
  let p_p = {
    codeId: province_ele.codeId,
    name: province_ele.name,
    parentId: 0
  };
  resultJSONData.push(p_p);
  province_ele.children.forEach( city_ele => {
    let c_p = {
      codeId: city_ele.codeId,
      name: city_ele.name,
      parentId: province_ele.codeId
    };
    resultJSONData.push(c_p);
    city_ele.children.forEach( country_ele => {
      let c_p = {
        codeId: country_ele.codeId,
        name: country_ele.name,
        parentId: city_ele.codeId
      };
      resultJSONData.push(c_p);
    })
  })
});
let toJSONData = JSON.stringify(resultJSONData,null,"\t");

fs.writeFile('multilayer.json',toJSONData,function(err){
  if (err) {
    res.status(500).send('Server is error...')
  }
})
