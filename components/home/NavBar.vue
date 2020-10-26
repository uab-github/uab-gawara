<template>

  <div class="col-lg-6 col-md-6 offset-lg-1">
    <div class="profile-menu-wrapper">
      <div class="main-menu-inner header-top-navigation">
        <nav>
          <ul class="main-menu">
            <li @click="setActive('group-id')" :class="{ active: isActive('group-id') }">
              <nuxt-link :to="'/group/'+this.$route.params.id" id="navbarDropdownMenuLink2">Home
              </nuxt-link>
            </li>
            <li @click="setActive('group-images-id')" :class="{ active: isActive('group-images-id') }">
              <nuxt-link :to="'/group/images/'+this.$route.params.id" id="navbarDropdownMenuLink">Photos</nuxt-link>
            </li>
            <li @click="setActive('group-members-id')" :class="{ active: isActive('group-members-id') }">
              <nuxt-link :to="'/group/members/'+this.$route.params.id" id="navbarDropdownMenu">Members</nuxt-link>
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
        activeItem: "group-id",
        groupId:this.$route.params.id
      };
    },
    mounted() {
    },
    created() {
      // console.log(this.$route.name);

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
