import {request} from "./request"

export function getHomeMultidata(){
    return request({
        url:'api/v1/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'api/v1/home/data',
        params:{
            type,
            page
        }
    })
}


// let totalNums = []

// const nums1 = [20,11,222]
// const nums2 = [111,22,333]

// totalNums.push(...nums1)