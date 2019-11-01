const fs = require('fs');

const { regionData } = require('./newRegionData.js');
let toJSONData = JSON.stringify(regionData,null,"\t");

fs.writeFile('singlelayer.json',toJSONData,function(err){
  if (err) {
    res.status(500).send('Server is error...')
  }
})
