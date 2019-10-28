<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>

import GoodsListItem from './GoodListItem'

export default {    
    name:"GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>