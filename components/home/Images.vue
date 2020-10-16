<template>
  <div class="card widget-item">
    <h4 class="widget-title">Sweets Memories</h4>
    <div class="widget-body">
      <div class="sweet-galley img-gallery">
        <div class="row row-5">
          <div class="col-6">
            <div class="gallery-tem">
              <figure class="post-thumb">
                <a
                  class="gallery-selector"
                  :href="sample_img"
                >
                  <img
                    :src=sample_img
                    alt="sweet memory"
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="col-6">
            <div class="gallery-tem">
              <figure class="post-thumb">
                <a
                  class="gallery-selector"
                  href="~/assets/images/gallery/gallery-2.jpg"
                >
                  <img
                    src="~/assets/images/gallery/gallery-2.jpg"
                    alt="sweet memory"
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="col-6">
            <div class="gallery-tem">
              <figure class="post-thumb">
                <a
                  class="gallery-selector"
                  href="~/assets/images/gallery/gallery-3.jpg"
                >
                  <img
                    src="~/assets/images/gallery/gallery-3.jpg"
                    alt="sweet memory"
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="col-6">
            <div class="gallery-tem">
              <figure class="post-thumb">
                <a
                  class="gallery-selector"
                  href="~/assets/images/gallery/gallery-4.jpg"
                >
                  <img
                    src="~/assets/images/gallery/gallery-4.jpg"
                    alt="sweet memory"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        cars: [],
      }
    },
  }
</script>
<style>

</style>
