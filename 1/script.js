function toMatrix(data, rowSize) {
    if(isNaN(rowSize) || rowSize <= 0 || !Number.isInteger(rowSize)){
        console.log('Enter correct number! (Should be "NUMBER" type and greater than zero)')
        return;
    }
    
    let arr = []

    for (let i = 0; i < data.length; i++) {
        arr[i] = []
        for (let j = 0; j < rowSize; j++)
        {
            arr[i][j] = data[j]
            if(j === data.length - 1 ) {
                j++
                let iter = 0
                while (j !== rowSize){
                    arr[i][j] = data[iter]
                    if (iter === data.length - 1){
                        iter = -1
                    }
                    iter++
                    j++
                }
            }
        }
    }
    console.table(arr)
}
let arr = [1,2,3,4,5,90,100]
toMatrix(arr, 0.12)
toMatrix(arr, 14)