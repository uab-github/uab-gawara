<template>

  <!--<transition name="modal">-->
  <div class="modal-mask" tabindex="-1" role="dialog">
    <div class="modal-wrapper">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Join Group</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" @click="cancel">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="phone">Please Type Phone Number (optional)</label>
              <input type="number" class="form-control" id="phone" v-model="phoneNumber"
                     aria-describedby="emailHelp" placeholder="09*******">
            </div>
            <!--<p>Modal body text goes here.</p>-->
          </div>
          <div class="modal-footer">
            <button type="button" class="edit-btn join-group" @click="save">Go to uabPay</button>
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
        phoneNumber: '',
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
      // async groupInfo() {
      //   let groupInfoData = await axios.get(`/90466ad7-b106-4295-aeaf-f3cfbfea0ba1`);
      //   this.groupData = groupInfoData.data
      // },
      cancel() {
        this.showModal = false;
        this.modalStatus(false);
      },
      async save() {

        if (this.phoneNumber != '') {
          let response = await axios.post(`/Wallet_SendJoinRequest?GroupID=${this.$route.params.id}&PhoneNo=${this.phoneNumber}`, '').catch(function (error) {
            if (error.response) {
              console.log("Error");
              console.log(error.response.data.message);
            }
          });
        }

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
        console.log(this.$route.params.id);
        this.$swal('Thank',
          'Please login your uabPay.',
          'success');
        this.showModal = false;
        this.modalStatus(false);
      }
    }

  }
</script>

<style>

</style>
