let recursiveFunction = function (arr, x, start, end) {
	
	if (start > end) return false;
	let mid=Math.floor((start + end)/2);
	if (arr[mid]===x) return true;
	if(arr[mid] > x)
		return recursiveFunction(arr, x, start, mid-1);
	else
		return recursiveFunction(arr, x, mid+1, end);
}


let arr = [10, 37, 25, 77, 38, 99];
let x = 25;

if (recursiveFunction(arr, x, 0, arr.length-1))
	console.log("Element found!");
else console.log("Element not found!");

x = 60;

if (recursiveFunction(arr, x, 0, arr.length-1))
console.log("Element found!");
else console.log("Element not found!");