<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <div class="profile-banner-large bg-img" :style="{ backgroundImage: 'url(' + bgImage + ')' }"></div>
        <!--<div class="profile-banner-large bg-img" :data-bg="groupData.group_cover_image_url"></div>-->
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
                <group-info v-bind:group="groupData"></group-info>
                <div class="card widget-item">
                  <h4 class="widget-title">Sweets Memories</h4>
                  <div class="widget-body">
                    <div class="sweet-galley img-gallery">
                      <div class="row row-5">
                        <images v-bind:image="image" v-for="image in images"></images>
                      </div>
                    </div>
                  </div>
                </div>
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

                          <div class="col-sm-6 col-md-6" v-for="image in images" v-if="images.length!==0">
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
                          <div class="col-md-6" style="padding-top: 17px" v-else>
                            <h4>no Images</h4>
                          </div>
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
  import MainHeader from "../../../components/home/MainHeader";
  import Navbar from "../../../components/home/NavBar";
  import GroupInfo from "../../../components/home/GroupInfo";
  import Images from "../../../components/home/Images";
  import Wish from "../../../components/home/Wish";
  import Modal from "../../../components/home/Modal";


  export default {
    data() {
      return {
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        bgImage: "",
        groupData: {},
        images: [],
        showModal: false,
        sweetimages: []
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish, Modal
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
      this.groupInfo();
      this.getImages();
      this.getImagesSweet();
      this.sample_img = this.groupData.group_cover_image_url

    },
    async fetch() {
      let images = await axios.get(`/Wallet_GetGroupImage?GroupID=${this.$route.params.id}`);
      this.images = images.data.data;

      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
    },
    methods: {

      async groupInfo() {
        let groupInfoData = await axios.get(`/Wallet_GetGroupInfo?GroupID=${this.$route.params.id}`);
        this.groupData = groupInfoData.data;
        this.bgImage = "'" + this.groupData.group_cover_image_url + "'";
      },
      async getImages() {
        let images = await axios.get(`/Wallet_GetGroupImage?GroupID=${this.$route.params.id}`);
        this.images = images.data.data;
        $(".img-popup").lightGallery();

        // light gallery images
        $(".img-gallery").lightGallery({
          selector: ".gallery-selector",
          hash: false
        });
      },
      async getImagesSweet() {
        let images = await axios.get(`/Wallet_GetGroupImage?GroupID=${this.$route.params.id}`);
        this.images = images.data.data;
        $(".img-popup").lightGallery();

        // light gallery images
        $(".img-gallery").lightGallery({
          selector: ".gallery-selector",
          hash: false
        });
      },
      save() {
        this.showModal = false
      },
      modalStatus(request) {
        this.showModal = request;
      }

    }
  }
</script>

<style>

</style>
