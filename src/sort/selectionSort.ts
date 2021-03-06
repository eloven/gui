/**
 * 选择排序
 * O(N^2)
 * O(1)
 * @param arr
 */
function selectionSort<T>(arr: T[]) {
  const len = arr.length
  let minIndex
  let temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

export default selectionSort
