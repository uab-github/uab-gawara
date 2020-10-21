<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <div class="profile-banner-large bg-img" :data-bg="sample_img"></div>
        <!--<div class="profile-banner-large bg-img">-->
        <!--<img class="profile-banner-large bg-img" :src="sample_img" alt="">-->
        <!--</div>-->

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
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar" style="margin-top: 50px">
                <!-- widget single item start -->
                <group-info></group-info>

                <div class="card widget-item">
                  <h4 class="widget-title">Sweets Memories</h4>
                  <div class="widget-body">
                    <div class="sweet-galley img-gallery">
                      <div class="row row-5">
                        <images v-bind:image="image"  v-for="image in images"></images>
                      </div>
                    </div>
                  </div>
                </div>

              </aside>
            </div>
            <div v-if="showModal">
              <modal :modal-status="modalStatus"></modal>
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
                  <button class="edit-btn join-group" @click="showModal = true">Join Group</button>
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
  import Modal from "../components/home/Modal";


  export default {
    data() {
      return {
        showModal: false,
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        wishes: [],
        groupData: {},
        images: []
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

      var bgSelector = $(".bg-img");
      bgSelector.each(function (index, elem) {
        var element = $(elem),
          bgSource = element.data('bg');
        console.log("Hello");
        element.css('background-image', 'url(' + bgSource + ')');
      });
    },
    created() {
      this.getImages();
      this.getWishes();
      this.groupInfo();
    },
    methods: {
      async getWishes() {
        console.log(this.$route.params.id);
        // let wishData = await axios.get(`/2752cadf-2f86-4ba9-b241-a51ddf761318`);
        let wishData = await axios.get(`/a5d012ff-5df7-4d7a-8054-fdb9178816e9`);
        // let wishData = await axios.get(`/Wallet_GetWishlist?GroupID=49cae29b1c465ae1fa7320eeaa221d80d6659bf8228afefa981f7eb84935acebfg&page=1&rows=1`);
        this.wishes = wishData.data.wishes
      },
      async groupInfo() {
        let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        // let groupInfoData = await axios.get(`/Wallet_GetGroupInfo?GroupID=49cae29b1c465ae1fa7320eeaa221d80d6659bf8228afefa981f7eb84935acebfg`);
        this.groupData = groupInfoData.data
      },
      async getImages() {
        let groupInfoData = await axios.get(`/9b1a08b6-7217-4a38-ac57-5fe3a66d536c`);
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
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

</style>
