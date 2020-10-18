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
                <!--<images></images>-->
              </aside>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <div class="friends-section mt-20">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="content-box friends-zone">
                        <div class="row mt--20 friends-list">
                          <div class="col-lg-4 col-sm-6 recently request">
                            <div class="friend-list-view">
                              <!-- profile picture end -->
                              <div class="profile-thumb">
                                <a href="#">
                                  <figure class="profile-thumb-middle">
                                    <img src="~/assets/images/profile/profile-small-1.jpg" alt="profile picture">
                                  </figure>
                                </a>
                              </div>
                              <!-- profile picture end -->
                              <div class="posted-author">
                                <h6 class="author">Kate Midiltoin</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 recently request">
                            <div class="friend-list-view">
                              <!-- profile picture end -->
                              <div class="profile-thumb">
                                <a href="#">
                                  <figure class="profile-thumb-middle">
                                    <img src="~/assets/images/profile/profile-small-1.jpg" alt="profile picture">
                                  </figure>
                                </a>
                              </div>
                              <!-- profile picture end -->
                              <div class="posted-author">
                                <h6 class="author">Kate Midiltoin</h6>
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


  export default {
    data() {
      return {
        sample_img: '',
        groupData: {},
      }
    },
    components: {
      MainHeader, Navbar, GroupInfo, Images, Wish
    },
    created() {
      this.groupInfo();
    },

    methods: {

      async groupInfo() {
        let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        this.groupData = groupInfoData.data
      },
    }
  }
</script>

<style>

</style>
