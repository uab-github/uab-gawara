<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <!--<div class="profile-banner-large bg-img"></div>-->
        <div class="profile-banner-large bg-img" :style="{ backgroundImage: 'url(' + bgImage + ')' }"></div>
        <!--<div class="profile-banner-large bg-img">-->
        <!--<img class="" :src="sample_img" alt="">-->
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
                      "{{groupData.group_title}}" အဖွဲ့ရည်ရွယ်ချက်
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
  import MainHeader from "../../components/home/MainHeader";
  import Navbar from "../../components/home/NavBar";
  import GroupInfo from "../../components/home/GroupInfo";
  import Images from "../../components/home/Images";
  import Wish from "../../components/home/Wish";
  import Modal from "../../components/home/Modal";
  import {mapMutations} from "vuex";


  export default {
    data() {
      return {
        showModal: false,
        bgImage: "",
        cover_image: 'https://garawa-cover.s3-ap-southeast-1.amazonaws.com/Cover1.jpg',
        cover_image_sai_sai: 'https://garawa-cover.s3-ap-southeast-1.amazonaws.com/Cover2.jpg',
        image: '',
        wishes: [],
        groupData: {},
        images: [],
        title: '',
        imageUrl: '',
      }
    },
    // async asyncData ({ query, store }) {
    //
    // },
    head() {
      // console.log("head");
      // console.log(this.imageData);
      return {
        meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0'},
          {hid: 'description', name: 'description', content: ''},
          {name: 'apple-mobile-web-app-capable', content: "yes"},
          {property: 'og:title', content: 'Garawa'},
          // {property: 'og:image', content: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg'},
          {property: 'og:image', content: this.imageData},
          {property: 'og:url', content: 'https://go.nuxtjs.dev/config-head'},
          {property: 'og:site_name', content: 'Garawa'},
        ]
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish, Modal
    },

    computed: {
      imageData() {
        if (this.$route.query.app === 'saisai') {
          return this.cover_image_sai_sai
        } else {
          return this.cover_image
        }
        // return this.$store.state.todos.list
      }
    },
    mounted() {
      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false
      });
      // let app = this;
      // var bgSelector = $(".bg-img");
      // bgSelector.each(function (index, elem) {
      //   let element = $(elem);
      //     // bgSource = element.data('bg');
      //     // bgSource = app.groupData.group_cover_image_url;
      //   console.log("Hello Monted");
      //   // console.log(app.groupData);
      //   element.css('background-image', 'url(' + app.sample_img + ')');
      // });
    },
    created() {

      // this.setCover('testing');
      this.groupInfo();
      this.getImages();
      this.getWishes();
    },
    methods: {
      // ...mapMutations({
      //   setCover: 'cover/set'
      // }),
      async getWishes() {
        // let wishData = await axios.get(`/2752cadf-2f86-4ba9-b241-a51ddf761318`);
        // let wishData = await axios.get(`/a5d012ff-5df7-4d7a-8054-fdb9178816e9`);
        let wishData = await axios.get(`/Wallet_GetWishlist?GroupID=${this.$route.params.id}&page&page=1&rows=100`);
        this.wishes = wishData.data.wishes;
      },
      async groupInfo() {
        console.log("group");
        // let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        let groupInfoData = await axios.get(`/Wallet_GetGroupInfo?GroupID=${this.$route.params.id}`);
        this.groupData = groupInfoData.data;
        this.bgImage = "'" + this.groupData.group_cover_image_url + "'";
        // if (this.groupData.group_member === 1) {
        //   this.cover_image_url = this.sample_img
        // } else {
        //   this.cover_image_url = this.sample_img_sai_sai
        // }

        // console.log("img");
        // console.log(this.groupData.group_cover_image_url);
        // console.log("this.groupData");
        // console.log(this.groupData);
      },
      async getImages() {
        // let groupInfoData = await axios.get(`/9b1a08b6-7217-4a38-ac57-5fe3a66d536c`);
        let images = await axios.get(`/Wallet_GetGroupImage?GroupID=${this.$route.params.id}`);
        this.images = images.data.data;
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
