<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 font-mono bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Sign in to your account
      </h2>

      <form class="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-6">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              :class="{ 'is-invalid': $v.email.$error }"
            />
            <div v-if="$v.email.$error" class="text-xs text-red-500">
              <span v-if="!$v.email.required">Email is required</span>
              <span v-if="!$v.email.email">Email is invalid</span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              :class="{ 'is-invalid': $v.password.$error }"
            />
            <div v-if="$v.password.$error" class="text-xs text-red-500">
              <span v-if="!$v.password.required">Password is required</span>
              <span v-if="!$v.password.minLength"
                >Password must be at least 6 characters</span
              >
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="remember_me" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <nuxt-link
              to="/register"
              class="text-indigo-600 hover:text-indigo-500"
            >
              Don't have account?
            </nuxt-link>
          </div>
        </div>

        <div>
          <c-button
            :is-loading="isLoading"
            loading-text="Logging in"
            variant-color="blue"
            class="relative flex justify-center w-full px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700"
            @click="loginHandler()"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="w-5 h-5 text-white group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </c-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { toLower } from 'lodash'

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
    }
  },

  validations: {
    email: {
      required,
      email: (val) => email(toLower(val)),
    },
    password: { required, minLength: minLength(6) },
  },

  computed: {
    ...mapGetters('auth', {
      getterLoginStatus: 'getLoginStatus',
      getterAuthData: 'getAuthData',
      isLoading: 'getIsLoading'
    }),
  },

  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    async loginHandler() {
      // stop here if form is invalid
      this.$v.$touch()
      
      if (!this.$v.$invalid) {
        await this.login({
          email: this.email,
          password: this.password,
        })
        
        if (this.getterLoginStatus) {
          this.$toast({
            title: 'Success',
            description: "You're logged in successfully.",
            status: 'success',
            duration: 2000,
            position: 'top-right',
          })
          this.$router.push('/')
          this.$axios.onRequest((config) => {
            config.headers.common.Authorization = `Bearer ${this.getterAuthData?.token}`
          })
        } else {
          this.$toast({
            title: 'Failed',
            description: 'Please recheck your email or password.',
            status: 'error',
            duration: 2000,
            position: 'top-right',
          })
          this.$router.push('/login')
        }
      }     
    },
  },
}
</script>
