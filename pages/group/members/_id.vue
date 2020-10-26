<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <div class="profile-banner-large bg-img" :style="{ backgroundImage: 'url(' + bgImage + ')' }"></div>
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
              <div class="friends-section mt-20">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="content-box friends-zone">
                        <div class="row mt--20 friends-list">
                          <div class="col-lg-4 col-sm-6 recently request" v-for="member in members">
                            <div class="friend-list-view" style="cursor: default">
                              <!-- profile picture end -->
                              <div class="profile-thumb">

                                <figure class="profile-thumb-middle">
                                  <!--<img src="~/assets/images/profile/profile-small-1.jpg" alt="profile picture">-->
                                  <img src="http://www.gravatar.com/avatar/?d=identicon" alt="profile picture">
                                </figure>

                              </div>
                              <!-- profile picture end -->
                              <div class="posted-author">
                                <h6 class="author" style="padding-top: 10px">{{member.name}}</h6>
                                <h6 class="author" style="padding-top: 10px">{{member.role}}</h6>
                                <h6 class="author" style="padding-top: 10px">{{member.created_date}}</h6>
                              </div>
                            </div>
                          </div>
                          <!--<div class="col-lg-4 col-sm-6 recently request">-->
                            <!--<div class="friend-list-view" style="cursor: default">-->
                              <!--&lt;!&ndash; profile picture end &ndash;&gt;-->
                              <!--<div class="profile-thumb">-->
                                <!--<a href="#">-->
                                  <!--<figure class="profile-thumb-middle">-->
                                    <!--<img src="~/assets/images/profile/profile-small-1.jpg" alt="profile picture">-->
                                  <!--</figure>-->
                                <!--</a>-->
                              <!--</div>-->
                              <!--&lt;!&ndash; profile picture end &ndash;&gt;-->
                              <!--<div class="posted-author">-->
                                <!--<h6 class="author" style="padding-top: 10px">Kate Midiltoin</h6>-->
                                <!--<h6 class="author" style="padding-top: 10px">member</h6>-->
                                <!--<h6 class="author" style="padding-top: 10px">20-10-2020</h6>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</div>-->
                        </div>
                      </div>
                      <div class="row" v-if="members.length===0" style="padding-top: 50px">
                        <div class="col-md-6">
                          <h4> Currently no member yet!</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        bgImage: '',
        images: [],
        members: [],
        groupData: {},
        showModal: false,
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish, Modal
    },
    created() {
      this.groupInfo();
      this.getImages();
      this.getMembers();
    },
    mounted() {
      var bgSelector = $(".bg-img");
      bgSelector.each(function (index, elem) {
        var element = $(elem),
          bgSource = element.data('bg');
        // console.log("Hello");
        element.css('background-image', 'url(' + bgSource + ')');
      });
    },

    methods: {
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
      async groupInfo() {
        let groupInfoData = await axios.get(`/Wallet_GetGroupInfo?GroupID=${this.$route.params.id}`);
        this.groupData = groupInfoData.data;
        this.bgImage = "'" + this.groupData.group_cover_image_url + "'";
      },
      async getMembers() {
        let members = await axios.get(`/Wallet_Getmemberlist?GroupID=${this.$route.params.id}&page=1&rows=100`);
        this.members = members.data.members
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
