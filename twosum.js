///Find a pair with the given sum in an array
///https://www.techiedelight.com/find-pair-with-given-sum-array/



function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i <= arr.length; i++) {
        let diff = target - arr[i]
        if (map.has(diff)) {
            console.log(arr[i],diff)
        } else {
            map.set(arr[i],diff)
        }
    }
}

const arr = [8, 7, 2, 5, 3, 1];
twoSum(arr,10)