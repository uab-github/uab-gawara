<template>
  <div>
    <header>
      <div class="header-top sticky bg-white d-none d-lg-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5"></div>

            <div class="col-md-2">
              <!-- brand logo start -->
              <div class="brand-logo text-center">
                <a href="index.html">
                  <img
                    src="~/assets/images/logos/black-logo.png"
                    alt="brand logo"
                    style="padding-top: 10px; padding-bottom: 10px"
                  />
                </a>
              </div>
              <!-- brand logo end -->
            </div>

            <div class="col-md-5">
              <div
                class="header-top-right d-flex align-items-center justify-content-end"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--mobile view-->
    <header>
      <div class="mobile-header-wrapper sticky d-block d-lg-none">
        <div class="mobile-header position-relative">
          <!-- <div class="mobile-logo">
            <a href="index.html">
              <img src="assets/images/logos/black-logo.png" alt="logo" />
            </a>
          </div> -->
          <div class="mobile-menu w-100">
            <ul>
              <li>
                <a href="index.html">
                  <img
                    src="~/assets/images/logos/black-logo.png"
                    alt="logo"
                    style="width: 120px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style>

</style>
