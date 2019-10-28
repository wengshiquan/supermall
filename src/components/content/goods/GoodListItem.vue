<template>
  <div>
      <img :src="goodsItems.show.img" alt="">
  </div>
</template>

<script>
export default {
    name:"GoodListItem",
    props:{
        goodsItems:{
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

</style>