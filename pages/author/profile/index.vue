<template>
  <c-flex class="w-full" h="95vh">
    <side-bar>
      <profile-sidebar />
    </side-bar>

    <c-box class="container mx-auto">
      <c-box class="hidden-scrollbar m-6 md:m-20 overflow-y-auto" h="80%">
        <c-text class="text-3xl text-center md:text-left font-semibold mb-10">
          My profile
        </c-text>
        <c-form-control class="w-full mx-auto lg:mx-0 lg:w-2/3" is-required>
          <c-flex class="w-full flex-wrap md:flex-nowrap mb-8">
            <!-- first name -->
            <c-box class="w-full mb-8 md:w-1/2 md:mr-10 md:mb-0">
              <c-form-label for="fname">First name</c-form-label>
              <c-input id="fname" placeholder="First name" />
            </c-box>
            <!-- last name -->
            <c-box class="w-full md:w-1/2">
              <c-form-label for="lname">Last name</c-form-label>
              <c-input id="lname" placeholder="Last name" />
            </c-box>
          </c-flex>
          <!-- email -->
          <c-box class="w-full mb-8">
            <c-form-label for="email">Email</c-form-label>
            <c-input id="email" placeholder="Email" />
          </c-box>
          <!-- country -->
          <c-box class="w-full mb-8">
            <c-form-label for="country">Country</c-form-label>
            <c-select id="country" placeholder="Select country">
              <option value="american">American</option>
              <option value="germany">Germany</option>
              <option value="vietnam">Viet Nam</option>
            </c-select>
          </c-box>
          <!-- drop-box account -->
          <c-box class="w-full mb-8">
            <c-form-label for="dropbox">Your Dropbox account</c-form-label>
            <c-input id="dropbox" placeholder="Dropbox" />
          </c-box>
          <!-- change password & delete account -->
          <c-flex class="items-center justify-between mb-16">
            <!-- Change password -->
            <c-button
              variant-color="blue"
              @click="isOpenChangePasswordForm = !isOpenChangePasswordForm"
            >
              Change password
            </c-button>
            <!-- Delete account -->
            <c-button
              variant="outline"
              variant-color="red"
              @click="openDeleteModal"
            >
              Delete
            </c-button>
          </c-flex>
          <!-- Change password form -->
          <c-collapse :is-open="isOpenChangePasswordForm">
            <c-text class="text-2xl font-semibold mb-8">Change passowd</c-text>
            <c-box class="w-full mb-8">
              <c-form-label for="cpassword">Current passowd</c-form-label>
              <c-input id="cpassword" placeholder="Current passowd" />
            </c-box>
            <c-box class="w-full mb-8">
              <c-form-label for="npassword">New passowd</c-form-label>
              <c-input id="npassword" placeholder="New passowd" />
            </c-box>
            <c-box class="w-full mb-8">
              <c-form-label for="cfpassword">Confirm passowd</c-form-label>
              <c-input id="cfpassword" placeholder="Confirm passowd" />
            </c-box>
          </c-collapse>
          <!-- delete modal -->
          <c-modal
            :is-open="isOpenDeleteModal"
            :on-close="closeDeleteModal"
            :block-scroll-on-mount="false"
            is-centered
            close-on-esc
          >
            <c-modal-content ref="content">
              <c-modal-header>Deleting your account</c-modal-header>
              <c-modal-close-button />
              <c-modal-body>
                Are you sure you want to delete your account?<br />
                Account will be deleted after a 30 day archival process.
              </c-modal-body>
              <c-modal-footer>
                <c-button variant-color="red" mr="3" @click="closeDeleteModal">
                  No
                </c-button>
                <c-button variant-color="blue"> Yes </c-button>
              </c-modal-footer>
            </c-modal-content>
            <c-modal-overlay />
          </c-modal>
          <!-- save -->
          <c-button class="float-right" variant-color="blue">Save</c-button>
        </c-form-control>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import ProfileSidebar from '@/components/SideBar/ProfileSidebar'

export default {
  components: {
    'profile-sidebar': ProfileSidebar,
  },
  data() {
    return {
      isOpenDeleteModal: false,
      isOpenChangePasswordForm: false,
    }
  },
  methods: {
    openDeleteModal() {
      this.isOpenDeleteModal = true
    },
    closeDeleteModal() {
      this.isOpenDeleteModal = false
    },
  },
}
</script>

<style scoped>
.hidden-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
