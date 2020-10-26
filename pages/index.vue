<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="main-wrapper">
        <!--<div class="profile-banner-large bg-img" data-bg="~/assets/images/cover.jpg"></div>-->
        <div class="profile-banner-large bg-img">
          <img class="profile-banner-large bg-img" src="~/assets/images/cover.jpg" alt="" style="width: 100%;height: 136%">
        </div>
        <div class="profile-menu-area bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3">
                <div class="profile-picture-box">
                  <!--<figure class="profile-picture">-->
                    <!--<a href="#">-->
                      <!--<img-->
                        <!--src="~/assets/images/cover.jpg"-->
                        <!--alt="profile picture"-->
                      <!--/>-->
                    <!--</a>-->
                  <!--</figure>-->
                </div>
              </div>
              <!--<navbar></navbar>-->
              <div class="col-lg-2 col-md-3 d-none d-md-block">
                <!--<div class="profile-edit-panel">-->
                  <!--<button class="edit-btn join-group" @click="showModal = true">Join Group</button>-->
                <!--</div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar">
                <!-- widget single item start -->
                <!--<group-info></group-info>-->
                <!-- widget single item end -->
                <!-- widget single item start -->
                <!--<images></images>-->
              </aside>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <!-- post status start -->
              <!--<div class="card">-->
                <!--&lt;!&ndash; post title start &ndash;&gt;-->
                <!--<div class="post-title d-flex align-items-center" style="margin-left:-20px">-->
                  <!--<div class="posted-author">-->
                    <!--<h4 class="author" style="font-size: 18px;font-weight: bold;">-->
                      <!--"မြတ်ဆရာကန့်တော့ပွဲ" အဖွဲ့ရည်ရွယ်ချက်-->
                    <!--</h4>-->
                  <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash; post title start &ndash;&gt;-->
                <!--<div class="post-content">-->
                  <!--<p class="post-desc">-->
                    <!--Many desktop publishing packages and web page editors now-->
                    <!--use Lorem Ipsum as their default model text, and a search-->
                    <!--for 'lorem ipsum' will uncover many web sites still in their-->
                    <!--infancy.-->
                  <!--</p>-->

                  <!--&lt;!&ndash;<div class="profile-edit-panel d-lg-none">&ndash;&gt;-->
                    <!--&lt;!&ndash;<button class="edit-btn join-group" @click="showModal = true">Join Group</button>&ndash;&gt;-->
                  <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
              <!--</div>-->
              <!--<div v-if="showModal">-->
                <!--<modal :modal-status="modalStatus"></modal>-->
                <!---->
              <!--</div>-->

              <!--<div class="card" v-for="(title, index) in titles">-->
                <!--{{title.body}}-->
              <!--</div>-->
              <!--<infinite-loading-->
                <!--spinner="spiral"-->
                <!--@infinite="infiniteScroll"-->
              <!--&gt;</infinite-loading>-->

              <!--<wish></wish>-->
              <!-- post status end -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import MainHeader from "../components/home/MainHeader";
  import Navbar from "../components/home/NavBar";
  import GroupInfo from "../components/home/GroupInfo";
  import Images from "../components/home/Images";
  import Wish from "../components/home/Wish";
  import Modal from "../components/home/Modal";
  import axios from 'axios'

  export default {
    data() {
      return {
        showModal: false,
        titles: [],
        page: 1,
        sample_img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        cars: [],
        items: [
          'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
          'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        ],
        index: null,
        media: [

          { // For image
            thumb: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
            src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
            caption: 'caption to display. receive <html> <b>tag</b>', // Optional
            srcset: '...' // Optional for displaying responsive images
          }
        ]

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

    },
    computed: {
      url() {
        return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page;
      }
    },
    methods: {
      async fetchData() {
        const response = await axio.get(this.url);
        this.titles = response.data;
      },
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++;
          axios
            .get(this.url)
            .then(response => {
              if (response.data.length > 1) {
                response.data.forEach(item => this.titles.push(item));
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
      },
      save() {
        this.showModal = false
      },
      modalStatus(request){
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
