<template>
  <div class="goods">
      <goods-list-item/>
      {{goods}}
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