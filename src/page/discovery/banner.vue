<template>
  <el-carousel :interval="4000" class="banner-carousel" type="card">
    <el-carousel-item :key="banner.scm" v-for="banner in banners">
      <img
        v-lazy="$utils.genImgUrl(banner.imageUrl, 1000, 400)"
        class="banner-img"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "@/api"
export default {
  async created() {
    const { banners } = await getBanner()
    this.banners = banners
  },
  data() {
    return {
      banners: [],
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-carousel {
<<<<<<< HEAD
  ::v-deep.el-carousel__container {
=======
  /deep/.el-carousel__container {
>>>>>>> 78e033cdff57ee377dd0623faf2b3ad6c46a1e5b
    height: 200px;
  }

  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
</style>
