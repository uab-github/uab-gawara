<template>
  <div class="card widget-item">
    <h4 class="widget-title" style="margin-bottom: 20px">
      {{groupData.group_name}}
    </h4>
    <div class="widget-body">
      <div class="about-author">
        <ul class="author-into-list">
          <li>
            <a href="#"><i class="bi bi-pin-man"></i>{{groupData.organizer_name}}</a>
          </li>
          <li>
            <a href="#"
            ><i class="bi bi-pin-man"></i>{{groupData.group_member}} members</a
            >
          </li>
          <li>
            <a href="#"
            ><i class="bi bi-pin-man"></i>{{groupData.donation_last_date}}</a
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

    // props: ['group'],
    mounted() {
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
