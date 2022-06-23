//Binary Search 
console.clear();
let binarySearch = function (arr, key, start, end) {
	if (start > end) 
  return false;
	let mid=parseInt((start + end)/2);
	if (arr[mid]===key)
    return true;
	if(arr[mid] > key)
		return binarySearch(arr, key, start, mid-1);
	else
		return binarySearch(arr, key, mid+1, end);
}
let arr = [10,20,30,40,50,60,70];
let x = 50;
if (binarySearch(arr, x, 0, arr.length-1)){
	console.log("Element found!"); 
}
else{
   console.log("Element not found!");
}

