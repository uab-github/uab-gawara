<template>

  <!--<transition name="modal">-->
  <div class="modal-mask" tabindex="-1" role="dialog">
    <div class="modal-wrapper">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Group Save</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" @click="cancel">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="phone">Enter Phone</label>
              <input type="text" class="form-control" id="phone"
                     aria-describedby="emailHelp" placeholder="Enter phone">
            </div>
            <!--<p>Modal body text goes here.</p>-->
          </div>
          <div class="modal-footer">
            <button type="button" class="edit-btn join-group" @click="save">Save Change</button>
            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</transition>-->
</template>
<script>
  import axios from '~/plugins/axios'

  export default {

    data() {
      return {
        groupData: {},
        showModal: false
      }
    },

    props: ['modalStatus'],
    mounted() {
    },

    created() {
      // this.groupInfo();
    },
    methods: {
      async groupInfo() {
        let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
        this.groupData = groupInfoData.data
      },
      cancel() {
        this.showModal = false;
        this.modalStatus(false);
      },
      save() {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
          window.location.href =
            // 'http://play.google.com/store/apps/details?id=PACKAGEURL';
            'https://play.google.com/store/apps/details?id=com.uab.uabbankpay';
        }
        if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
          window.location.href =
            // 'http://itunes.apple.com/lb/app/PACKAGEURL';
            'https://apps.apple.com/us/app/uabpay/id1496595220';
        }
        this.$swal('Thank',
          'Please login your uab Pay.',
          'success');
        this.showModal = false;
        this.modalStatus(false);
      }
    }

  }
</script>

<style>

</style>
