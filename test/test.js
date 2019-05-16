let arr = [1,2,2,4,9,6,7,5,2,3,5,6,5];
// arr = new Set(arr);
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < array.length; i++) {
    if(arr[i]==arr[j]){ //第一个等同于第二个，splice方法删除第二个
                       arr.splice(j,1);
                       j--;
                   }
  }
}
