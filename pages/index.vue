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
                    <a href="profile.html">
                      <img
                        src="~/assets/images/profile/profile-1.jpg"
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
                <images></images>
              </aside>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center" style="margin-left:-20px">
                  <div class="posted-author">
                    <h4 class="author" style="font-size: 18px;font-weight: bold;">
                      "မြတ်ဆရာကန့်တော့ပွဲ" အဖွဲ့ရည်ရွယ်ချက်
                    </h4>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <h1>Hello</h1>

                  <div class="profile-edit-panel d-lg-none">
                    <button class="edit-btn join-group">Join Group</button>
                  </div>
                </div>
              </div>
              <div class="card" v-for="(title, index) in titles">
                {{title.body}}
              </div>
              <infinite-loading
                spinner="spiral"
                @infinite="infiniteScroll"
              ></infinite-loading>

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
  import axios from 'axios'

  export default {
    data() {
      return {
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
      // $(".img-popup").lightGallery();
      //
      // // light gallery images
      // $(".img-gallery").lightGallery({
      //   selector: ".gallery-selector",
      //   hash: false
      // });
      // $('img.zoomable').css({cursor: 'pointer'}).live('click', function () {
      //   var img = $(this);
      //   var bigImg = $('<img />').css({
      //     'max-width': '100%',
      //     'max-height': '100%',
      //     'display': 'inline'
      //   });
      //   bigImg.attr({
      //     src: img.attr('src'),
      //     alt: img.attr('alt'),
      //     title: img.attr('title')
      //   });
      //   var over = $('<div />').text(' ').css({
      //     'height': '100%',
      //     'width': '100%',
      //     'background': 'rgba(0,0,0,.82)',
      //     'position': 'fixed',
      //     'top': 0,
      //     'left': 0,
      //     'opacity': 0.0,
      //     'cursor': 'pointer',
      //     'z-index': 9999,
      //     'text-align': 'center'
      //   }).append(bigImg).bind('click', function () {
      //     $(this).fadeOut(300, function () {
      //       $(this).remove();
      //     });
      //   }).insertAfter(this).animate({
      //     'opacity': 1
      //   }, 300);
      // });
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
      }
    }
  }
</script>

<style>

</style>
