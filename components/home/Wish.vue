<template>
  <!--<div>-->
  <!--<div class="card">-->
  <!--&lt;!&ndash; post title start &ndash;&gt;-->
  <!--<div class="post-title d-flex align-items-center">-->
  <!--<img src="~/assets/images/message.png" alt="" style="width: 20px"/>-->
  <!--<div class="posted-author">-->
  <!--<h6 class="author">-->
  <!--Jon Wileyam-->
  <!--</h6>-->
  <!--<span class="post-time">20,October,2020</span>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; post title start &ndash;&gt;-->
  <!--<div class="post-content">-->
  <!--<p class="post-desc pb-0">-->
  <!--Many desktop publishing packages and web page editors now-->
  <!--use Lorem Ipsum as their default model text, and a search.-->
  <!--</p>-->
  <!--</div>-->
  <!--<br>-->
  <!--&lt;!&ndash; thanks start &ndash;&gt;-->
  <!--<div class="card thanks-card">-->
  <!--<div class="post-title d-flex align-items-center">-->
  <!--<img src="~/assets/images/message.png" alt="" style="width: 20px"/>-->
  <!--<div class="posted-author">-->
  <!--<h6 class="author">-->
  <!--Daw Khin Ma Ma <span class="badge badge-primary">Senior</span>-->
  <!--</h6>-->
  <!--<span class="post-time">20,October,2020</span>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="post-content">-->
  <!--<p class="post-desc pb-0">-->
  <!--Many desktop publishing packages and web page editors now-->
  <!--use Lorem Ipsum as their default model text, and a search-->
  <!--for-->
  <!--</p>-->
  <!--<div class="post-thumb-gallery">-->
  <!--<figure class="post-thumb img-popup">-->
  <!--<a-->
  <!--href="https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg">-->
  <!--<img-->
  <!--src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"-->
  <!--alt="post image"-->
  <!--/>-->
  <!--</a>-->
  <!--</figure>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="card thanks-card">-->
  <!--&lt;!&ndash; <div style="position:relative; left:670px; top:-14px;"> &ndash;&gt;-->
  <!--&lt;!&ndash; <span class="badge badge-info" >Thanks Messages</span> &ndash;&gt;-->
  <!--&lt;!&ndash; </div> &ndash;&gt;-->
  <!--<div class="post-title d-flex align-items-center">-->
  <!--<div class="posted-author">-->
  <!--<h6 class="author">-->
  <!--Khin Khin-->
  <!--</h6>-->
  <!--<span class="post-time">20,October,2020</span>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="post-content">-->
  <!--<p class="post-desc pb-0">-->
  <!--Many desktop publishing packages and web page editors now-->
  <!--use Lorem Ipsum as their default model text, and a search-->
  <!--for-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <div>
    <!-- post title start -->
    <div class="post-title d-flex align-items-center">
      <img src="~/assets/images/message.png" alt="" style="width: 20px"/>
      <div class="posted-author">
        <h6 class="author">
          {{wish.member_name}}
        </h6>

        <span class="post-time">{{wish.created_date}}</span>
      </div>
    </div>
    <!-- post title start -->
    <div class="post-content">
      <p class="post-desc">
        {{wish.content}}
      </p>
      <div class="post-thumb-gallery">
        <figure class="post-thumb img-popup" v-if="wish.wish_image_url!==null && wish.wish_image_url!=='0'">
          <a
            :href="wish.wish_image_url">
            <img
              :src="wish.wish_image_url"
              alt="post image"
            />
          </a>
        </figure>
      </div>
    </div>
    <br>
    <div class="card thanks-card" v-for="thankMessage in wish.thank_messages">
      <div class="post-title d-flex align-items-center">
        <div class="posted-author">
          <h6 class="author">
            {{thankMessage.member_name}} <span v-if="thankMessage.is_senior" class="badge badge-primary">Senior</span>
          </h6>
          <span class="post-time">{{thankMessage.date}}</span>
        </div>
      </div>
      <div class="post-content">
        <p class="post-desc pb-0">
          {{thankMessage.message}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {}
    },

    props: ['wish'],
    mounted() {
      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
    },

    created() {

    },

  }
</script>
<style>

</style>
