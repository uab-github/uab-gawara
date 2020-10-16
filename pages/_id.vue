<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <div class="profile-banner-large bg-img" :data-bg="sample_img"></div>
        <div class="profile-menu-area bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3">
                <div class="profile-picture-box">
                  <figure class="profile-picture">
                    <a href="#">
                      <img
                        :src="groupData.group_profile_image_url"
                        alt="profile picture"
                      />
                    </a>
                  </figure>
                </div>
              </div>
              <navbar></navbar>
              <div class="col-lg-2 col-md-3 d-none d-md-block">
                <div class="profile-edit-panel">
                  <button class="edit-btn join-group">Join Group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar">
                <!-- widget single item start -->
                <group-info></group-info>
                <!-- widget single item end -->
                <!-- widget single item start -->
                <!--<images></images>-->
              </aside>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center" style="margin-left:-20px">
                  <div class="posted-author">
                    <h4 class="author" style="font-size: 18px;font-weight: bold;">
                      "{{groupData.group_name}}" အဖွဲ့ရည်ရွယ်ချက်
                    </h4>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    {{groupData.group_description}}
                  </p>
                </div>
                <div class="profile-edit-panel d-lg-none">
                  <button class="edit-btn join-group">Join Group</button>
                </div>
              </div>
              <!--//wish card-->
              <div class="card" v-for="wish in wishes">
                <wish v-bind:wish="wish"></wish>
              </div>
              <!-- post status end -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import MainHeader from "../components/home/MainHeader";
  import Navbar from "../components/home/NavBar";
  import GroupInfo from "../components/home/GroupInfo";
  import Images from "../components/home/Images";
  import Wish from "../components/home/Wish";


  export default {
    data() {
      return {
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        wishes: [],
        groupData: {}
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish
    },
    mounted() {
      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
    },
    created() {
      this.getWishes();
      this.groupInfo();
    },
    methods: {
      async getWishes() {
        // let wishData = await axios.get(`/2752cadf-2f86-4ba9-b241-a51ddf761318`);
        let wishData = await axios.get(`/a5d012ff-5df7-4d7a-8054-fdb9178816e9`);
        this.wishes = wishData.data.wishes
      },
      async groupInfo() {
        let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        this.groupData = groupInfoData.data
      },

    }
  }
</script>

<style>


</style>
