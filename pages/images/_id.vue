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
                  <button class="edit-btn join-group" @click="showModal = true">Join Group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showModal">
          <modal :modal-status="modalStatus"></modal>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar" style="margin-top: 50px">
                <!-- widget single item start -->
                <group-info></group-info>
                <!-- widget single item end -->
                <!-- widget single item start -->
                <images></images>
              </aside>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <div class="photo-section mt-20">
                <!-- <div class="container"> -->
                <div class="row">
                  <div class="col-12">
                    <div class="content-box">
                      <div class="content-body">
                        <div class="row mt--30 photo-filter">
                          <div class="col-sm-6 col-md-6" v-for="image in images">
                            <div class="card" style="padding: 0;margin-top: 20px">
                              <div class="post-thumb-gallery">
                                <figure class="post-thumb img-popup">
                                  <a
                                    :href="image.image_url">
                                    <img
                                      :src="image.image_url"
                                      alt="Sweets Memories"
                                    />
                                  </a>
                                </figure>
                                <div class="photo-gallery-caption">
                                  <h3 class="photos-caption"></h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--<div class="col-sm-6 col-md-6">-->
                          <!--<div class="card" style="padding: 0;margin-top: 20px">-->
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
                          <!--<div class="photo-gallery-caption">-->
                          <!--<h3 class="photos-caption">Photos in dinner</h3>-->
                          <!--</div>-->
                          <!--</div>-->
                          <!--</div>-->
                          <!--</div>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import MainHeader from "../../components/home/MainHeader";
  import Navbar from "../../components/home/NavBar";
  import GroupInfo from "../../components/home/GroupInfo";
  import Images from "../../components/home/Images";
  import Wish from "../../components/home/Wish";
  import Modal from "../../components/home/Modal";


  export default {
    data() {
      return {
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        groupData: {},
        images: [],
        showModal: false,
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish, Modal
    },
    mounted() {
      // this.getImages();

      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
      var bgSelector = $(".bg-img");
      bgSelector.each(function (index, elem) {
        var element = $(elem),
          bgSource = element.data('bg');
        console.log("Hello");
        element.css('background-image', 'url(' + bgSource + ')');
      });
    },
    created() {
      this.groupInfo();
      this.getImages();


    },
    async fetch() {

      // let groupInfoData = await axios.get(`/9b1a08b6-7217-4a38-ac57-5fe3a66d536c`);
      let groupInfoData = await axios.get(`/Wallet_GetGroupImage?GroupID=49cae29b1c465ae1fa7320eeaa221d80d6659bf8228afefa981f7eb84935acebfg`);
      this.images = groupInfoData.data.data;

      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
    },
    methods: {

      async groupInfo() {
        // let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        let groupInfoData = await axios.get(`/Wallet_GetGroupImage?GroupID=49cae29b1c465ae1fa7320eeaa221d80d6659bf8228afefa981f7eb84935acebfg`);
        this.groupData = groupInfoData.data
      },
      async getImages() {
        // let groupInfoData = await axios.get(`/9b1a08b6-7217-4a38-ac57-5fe3a66d536c`);
        let groupInfoData = await axios.get(`/Wallet_GetGroupInfo?GroupID=49cae29b1c465ae1fa7320eeaa221d80d6659bf8228afefa981f7eb84935acebfg`);
        this.images = groupInfoData.data.data;
        $(".img-popup").lightGallery();

        // light gallery images
        $(".img-gallery").lightGallery({
          selector: ".gallery-selector",
          hash: false
        });
        // this.sample_img = this.images[1].image_url;
      },
      save() {
        this.showModal = false
      },
      modalStatus(request) {
        this.showModal = request;
        console.log("Hello12312323123123213");
      }

    }
  }
</script>

<style>

</style>
