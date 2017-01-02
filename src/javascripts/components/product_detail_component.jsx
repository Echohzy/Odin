'use strict';

// var product = {
//   id: 0,
//   name: "test product",
//   skus:[{
//     id: 0,
//     name: "sku1",
//     attrs:[{id: 1,name:"size"},{id:2, name: "color"}],
//     vals:[{id: 1,name: "s", sku_attr_id: 1}, {id: 2, name:"red", sku_attr_id:2}],
//     count: 12
//   },{
//     id: 1,
//     name: "sku2",
//     attrs:[{id: 1,name:"size"},{id:2, name: "color"}],
//     vals:[{id: 1,name: "m", sku_attr_id: 1}, {id: 2, name:"blue", sku_attr_id:2}],
//     count: 12
//   },{
//     id: 2,
//     name: "sku3",
//     attrs:[{id: 1,name:"size"},{id:2, name: "color"}],
//     vals:[{id: 1,name: "m", sku_attr_id: 1}, {id: 2, name:"red", sku_attr_id:2}],
//     count: 0
//   },{
//     id: 3,
//     name: "sku4",
//     attrs:[{id: 1,name:"size"},{id:2, name: "color"}],
//     vals:[{id: 1,name: "l", sku_attr_id: 1}, {id: 2, name:"blue", sku_attr_id:2}],
//     count: 2
//   }]
// };
// 
// 
var keys = {
  "1": {
    "10":{id:10,name:"10"}
  },
  "2": {
    "20":{id:20,name:"20"},
    "21":{id:21,name: "21"},
    "22":{id:22,name: "22"},
    "23":{id:23,name: "23"},
    "24":{id:24,name: "24"}
  },
  "3": {
    "30":{id:30,name:"30"},
    "31":{id:31,name:"31"},
    "32":{id:32,name:"32"},
    "33":{id:33,name:"33"}
  },
  "4": {
    "40":{id:40,name: "40"}
  } 
};
var data = {
    "10;24;31;40": {
        price:366,
        count:46
    },
    "10;24;32;40": {
        price:406,
        count:66
    },
    "10;24;33;40": {
        price:416,
        count:77
    },
    "10;24;30;40": {
        price:356,
        count:59
    },
    "10;23;31;40": {
        price:366,
        count:50
    },
    "10;23;32;40": {
        price:406,
        count:9
    },
    "10;23;33;40": {
        price:416,
        count:90
    },
    "10;23;30;40": {
        price:356,
        count:46
    },
    "10;22;31;40": {
        price:356,
        count:27
    },
    "10;22;32;40": {
        price:396,
        count:38
    },
    "10;22;33;40": {
        price:406,
        count:42
    },
     "10;21;31;40": {
        price:366,
        count:79
    },
    "10;21;32;40": {
        price:406,
        count:79
    },
    "10;21;33;40": {
        price:416,
        count:10
    },
    "10;21;30;40": {
        price:356,
        count:43
    },
    "10;20;31;40": {
        price:356,
        count:46
    },
    "10;20;32;40": {
        price:396,
        count:49
    },
    "10;20;33;40": {
        price:406,
        count:65
    },
    "10;20;30;40": {
        price:346,
        count: 3
    }
};

import React, { Component } from 'react';

import _ from 'lodash';

var SKUResult = {};


export default class ProductDetailComponent extends Component {
  constructor(props){
    super(props);
    this.getObjKeys = this.getObjKeys.bind(this);
    this.add2SKUResult = this.add2SKUResult.bind(this);
    this.combineSKU = this.combineSKU.bind(this);
    this.initSKU = this.initSKU.bind(this);
    this.state = {
      SKUResult: {}
    };
  }
  componentWillMount(){
    this.initSKU();
  }
  getObjKeys(obj){
    if(obj!== Object(obj)) throw new TypeError("Invalid object");
    return _.keys(obj);
  }
  add2SKUResult(key, sku){
    if(SKUResult[key]){
      SKUResult[key].count += sku.count;
      SKUResult[key].prices.push(sku.price);
    }else{
      SKUResult[key] = {
        count: sku.count,
        prices: [sku.price]
      };
    }
  }
  combineSKU(skuKeyAttrs, cnum, sku){
    var len = skuKeyAttrs.length;
    for(var i=0; i<len; i++){
      var key = skuKeyAttrs[i];
      for(var j=i+1;j<len; j++){
        if(j + cnum <= len){
          var tempArr = skuKeyAttrs.slice(j, j+cnum);
          var genKey = key + ";" + tempArr.join(";");
          console.log(genKey);
          this.add2SKUResult(genKey, sku);
        }
      }
    }
  }
  initSKU(){
    var i, j, skuKeys = this.getObjKeys(data);
    for(i=0;i<skuKeys.length;i++){
      var skuKey = skuKeys[i];
      var sku = data[skuKey];
      var skuKeyAttrs = skuKey.split(";");
      var len = skuKeyAttrs.length;
      for(j=0;j<len;j++){
        this.add2SKUResult(skuKeyAttrs[j], sku);
        (j > 0 && j < len-1) && this.combineSKU(skuKeyAttrs, j, sku);
      }
      SKUResult[skuKey] = {
        count: sku.count,
        prices: [sku.price]
      };
    }
    this.setState({SKUResult: SKUResult});
  }
  render(){
    return (
      <div className="product-select">
        {
          _.map(keys, (item,key)=>{
            return (
              <div className="specification" key={key}>
                {
                  _.map(item, (item)=>{
                    if(this.state.SKUResult[item.id]){
                      return (<span key={item.id} className="btn able" style={{marginRight:"10px",color:"blue"}}>{item.name}</span>);
                    }else{
                      return (<span key={item.id} className="btn disable" style={{marginRight:"10px",color:"gray"}}>{item.name}</span>)
                    }
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}