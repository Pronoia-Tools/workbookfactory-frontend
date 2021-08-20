<template>
  <c-box
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <loading-screen v-if="isLoading" />

    <c-box class="w-full max-w-md space-y-8">
      <c-heading
        as="h2"
        size="xl"
        class="mt-6 text-3xl font-extrabold text-center text-gray-900"
      >
        Register your account
      </c-heading>

      <c-form-control class="mt-8 space-y-6" method="POST">
        <c-input type="hidden" name="remember" value="true" />

        <c-box class="rounded-md">
          <!-- user name -->
          <c-box class="mb-6">
            <c-form-label for="user_name" class="sr-only">
              User Name
            </c-form-label>
            <c-input
              id="user_name"
              v-model="user_name"
              name="user_name"
              type="text"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="User name"
              :class="{ 'is-invalid': $v.user_name.$error }"
            />
            <c-box v-if="$v.user_name.$error" class="invalid-feedback">
              <span v-if="!$v.user_name.required">User name is required</span>
            </c-box>
            <c-box v-if="isError.username" class="invalid-feedback">
              <span v-for="(error, index) in isError.username" :key="index">
                {{ error }}
              </span>
            </c-box>
          </c-box>

          <!-- first name -->
          <c-box class="mb-6">
            <c-form-label for="first_name" class="sr-only"
              >First Name</c-form-label
            >
            <c-input
              id="first_name"
              v-model="first_name"
              name="first_name"
              type="text"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First name"
              :class="{ 'is-invalid': $v.first_name.$error }"
            />
            <c-box v-if="$v.first_name.$error" class="invalid-feedback">
              <span v-if="!$v.first_name.required">First name is required</span>
            </c-box>
          </c-box>

          <!-- last name -->
          <c-box class="mb-6">
            <c-form-label for="last_name" class="sr-only"
              >Last name</c-form-label
            >
            <c-input
              id="last_name"
              v-model="last_name"
              name="last_name"
              type="text"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last name"
              :class="{ 'is-invalid': $v.last_name.$error }"
            />
            <c-box v-if="$v.last_name.$error" class="invalid-feedback">
              <span v-if="!$v.last_name.required">Last name is required</span>
            </c-box>
          </c-box>

          <!-- email -->
          <c-box class="mb-6">
            <c-form-label for="email-address" class="sr-only"
              >Email address</c-form-label
            >
            <c-input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              :class="{ 'is-invalid': $v.email.$error }"
            />
            <c-box v-if="$v.email.$error" class="invalid-feedback">
              <span v-if="!$v.email.required">Email is required</span>
              <span v-if="!$v.email.email">Email is invalid</span>
            </c-box>
            <c-box v-if="isError.email" class="invalid-feedback">
              <span v-for="(error, index) in isError.email" :key="index">
                {{ error }}
              </span>
            </c-box>
          </c-box>

          <!-- password -->
          <c-box class="mb-6">
            <c-form-label for="password" class="sr-only">Password</c-form-label>
            <c-input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="off"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              :class="{ 'is-invalid': $v.password.$error }"
            />
            <c-box v-if="$v.password.$error" class="invalid-feedback">
              <span v-if="!$v.password.required">Password is required</span>
              <span v-if="!$v.password.minLength">
                Password must be at least 8 characters
              </span>
            </c-box>
            <c-box v-if="isError.password1" class="invalid-feedback">
              <p v-for="(error, index) in isError.password1" :key="index">
                {{ error }}
              </p>
            </c-box>
          </c-box>

          <!-- confirm password -->
          <c-box class="mb-6">
            <c-form-label for="confirm_password" class="sr-only"
              >Password</c-form-label
            >
            <c-input
              id="confirm_password"
              v-model="confirm_password"
              name="confirm_password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm password"
              :class="{ 'is-invalid': $v.confirm_password.$error }"
            />
            <c-box v-if="$v.confirm_password.$error" class="invalid-feedback">
              <span v-if="!$v.confirm_password.required">
                Confirm password is required
              </span>
              <span v-if="!$v.confirm_password.minLength">
                Confirm password must be at least 8 characters
              </span>
            </c-box>
            <c-box
              v-if="!$v.confirm_password.sameAsPassword"
              class="invalid-feedback"
            >
              <span>Passwords must be identical</span>
            </c-box>
          </c-box>
        </c-box>

        <c-box class="text-sm">
          <nuxt-link
            to="/login"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account?
          </nuxt-link>
        </c-box>

        <c-box>
          <c-button
            :is-loading="isLoading"
            loading-text="Registering"
            type="button"
            variant="solid"
            variant-color="blue"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent group hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="registerUser()"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="w-5 h-5 text-white"
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
            Register
          </c-button>
        </c-box>
      </c-form-control>
    </c-box>
  </c-box>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import LoadingScreen from '~/components/Loading/LoadingScreen.vue'

export const emailFormatter = (value) => {
  if (!value) return value
  const parts = value.split('@')
  parts[1] = parts[1].toLowerCase()
  return parts.join('@')
}

export default {
  components: { LoadingScreen },
  mixins: [validationMixin],
  layout: 'login',
  data() {
    return {
      user_name: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      isActive: false,
      isStaff: false,
      isError: {},
      isLoading: false,
    }
  },

  validations: {
    user_name: { required },
    first_name: { required },
    last_name: { required },
    email: {
      required,
      email: (val) => email(emailFormatter(val)),
    },
    password: { required, minLength: minLength(8) },
    confirm_password: {
      required,
      minLength: minLength(8),
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    async registerUser() {
      this.isLoading = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false
      }

      try {
        const response = await this.$axios.$post(
          '/api/rest-auth/registration/',
          {
            username: this.user_name,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password1: this.password,
            password2: this.confirm_password,
            is_active: this.isActive,
            is_staff: this.isStaff,
          }
        )
        if (response) {
          this.$toast({
            title: 'Success',
            description:
              'Your account registered success. Verification e-mail sent.',
            status: 'success',
            duration: 2000,
            position: 'top-right',
          })
          this.$router.push('/login')
        }
      } catch (error) {
        if (error.response) {
          this.$toast({
            title: 'Failed',
            description: 'Your account registered fail.',
            status: 'error',
            duration: 2000,
            position: 'top-right',
          })
        }
        this.isError = error.response.data
      }

      this.isLoading = false
    },
  },
}
</script>

<style scoped>
.invalid-feedback {
  color: red;
  font-size: 12px;
  margin-top: 3px;
}
</style>
