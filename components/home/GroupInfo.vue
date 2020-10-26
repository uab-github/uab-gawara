<template>
  <div class="card widget-item">
    <h4 class="widget-title" style="margin-bottom: 20px">
      {{group.group_title}}
    </h4>
    <div class="widget-body">
      <div class="about-author">
        <ul class="author-into-list">
          <li>
            <a href="#"><i class="bi bi-pin-man"></i>{{group.organizer_name}}</a>
          </li>
          <li>
            <a href="#"
            ><i class="bi bi-pin-man"></i>{{group.group_member}} members</a
            >
          </li>
          <li>
            <a href="#"
            ><i class="bi bi-pin-man"></i>{{splitTime(group.donation_last_date)}}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import axios from '~/plugins/axios'


  export default {

    data() {
      return {
        groupData: {}
      }
    },

    props: ['group'],
    mounted() {
    },

    created() {

    },
    methods: {
      splitTime(dateTime) {
        if (dateTime !== null && dateTime !== '' && dateTime !== undefined) {
          dateTime.split(" ");
          let splitArray = dateTime.split(" ");
          return splitArray[0];
        }
        return dateTime;
      }
    }

  }
</script>

<style>

</style>
