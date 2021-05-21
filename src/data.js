// var defaultValues = (() => Array(100).fill(Array(100).fill('#F00')))()

// How the pixel matrix was made from the png
// var rgbToHex = function (rgb) { 
//   var hex = Number(rgb).toString(16);
//   if (hex.length < 2) {
//        hex = "0" + hex;
//   }
//   return hex;
// }

// var getpix = require("get-pixels")

// getpix("./src/learn_small.png", function(err, pixels) {
//   if(err) {
//     console.log("Bad image path")
//     return
//   }

//   const x = []
//   for (let y = 0; y < 25; y++) {
//     let row = ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF']
//     for (let x = 0; x < 25; x++) {
//       row.push(`#${rgbToHex(pixels.get(x, y, 0))}${rgbToHex(pixels.get(x, y, 1))}${rgbToHex(pixels.get(x, y, 2))}`)
//     }
//     row.push(...['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'])
//     x.push(row)
//   }
//   console.log('result',x);
// })

var learnSymbol = [
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#969696', '#f1f1f1',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#b5b5b5', '#7a7a7a', '#d4d4d4',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#e9e9e9', '#737373', '#797979', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#848484', '#ababab', '#7b7b7b', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#b3b3b3',
    '#7c7c7c', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#e9e9e9', '#6f6f6f',
    '#dbdbdb', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#848484', '#a4a4a4',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#b1b1b1', '#7f7f7f', '#fdfdfd',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#e7e7e7', '#717171', '#dbdbdb', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#848484', '#a3a3a3', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#b1b1b1',
    '#797979', '#b0b0b0', '#b7b7b7', '#b7b7b7',
    '#b7b7b7', '#bbbbbb', '#7a7a7a', '#a4a4a4',
    '#b7b7b7', '#b7b7b7', '#b7b7b7', '#b7b7b7',
    '#b7b7b7', '#b9b9b9', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#aeaeae',
    '#979797', '#989898', '#989898', '#989898',
    '#989898', '#999999', '#7b7b7b', '#8e8e8e',
    '#979797', '#989898', '#989898', '#989898',
    '#868686', '#797979', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d9d9d9',
    '#FFF', '#FFF', '#FFF', '#fafafa',
    '#797979', '#c9c9c9', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#FFF', '#9f9f9f',
    '#8e8e8e', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#dbdbdb', '#6f6f6f',
    '#eeeeee', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#FFF', '#818181', '#b1b1b1',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#FFF', '#b5b5b5', '#7b7b7b', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#d5d5d5',
    '#f1f1f1', '#707070', '#d9d9d9', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#777777', '#dcdcdc',
    '#909090', '#9a9a9a', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#787878', '#a1a1a1',
    '#747474', '#f7f7f7', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#7b7b7b', '#7b7b7b',
    '#c0c0c0', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#7b7b7b', '#898989',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#898989', '#e3e3e3',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ],
  [
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF', '#FFF', '#FFF', '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF',    '#FFF',    '#FFF',
    '#FFF',    '#FFF'
  ]
]
export default learnSymbol

