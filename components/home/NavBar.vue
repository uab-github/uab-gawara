<template>

  <div class="col-lg-6 col-md-6 offset-lg-1">
    <div class="profile-menu-wrapper">
      <div class="main-menu-inner header-top-navigation">
        <nav>
          <ul class="main-menu">
            <li @click="setActive('id')" :class="{ active: isActive('id') }">
              <nuxt-link :to="'/1/'" id="navbarDropdownMenuLink2">Home
              </nuxt-link>
            </li>
            <li @click="setActive('images-id')" :class="{ active: isActive('images-id') }">
              <nuxt-link :to="'/images/1/'" id="navbarDropdownMenuLink">Photos</nuxt-link>
            </li>
            <li @click="setActive('members-id')" :class="{ active: isActive('members-id') }">
              <nuxt-link :to="'/members/1/'" id="navbarDropdownMenu">Members</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeItem: "id",
      };
    },
    mounted() {
    },
    created() {
      console.log(this.$route.name);

      this.setActive(
        this.$route.name !== undefined ? this.$route.name : "id"
      );
      // console.log(this.$route.params.id);
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem;
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem;
      }
    },
  };
</script>
<style>

</style>
