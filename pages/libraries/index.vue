<template>
  <c-box class="container mx-auto my-8 font-ibm">
    <c-box>
      <h1 class="text-3xl">Your Library</h1>
    </c-box>
    <c-box class="my-6 grid grid-flow-col lg:grid-cols-4 lg:gap-4 products">
      <c-box class="product-item">
        <c-box class="product-img bg-gray-400">
          <nuxt-link to="/" class="">
            <c-box
              background-image="url('/product.png')"
              class="lg:h-[350px] w-full"
            >
            </c-box>
          </nuxt-link>
        </c-box>
        <c-box class="product-infomation flex flex-col space-y-1 pt-4">
          <nuxt-link to="/" class="product-title">
            <h3
              class="text-[16px] font-semibold text-eerieBlack leading-[26px]"
            >
              WE‘RE PREGNANT! The First-Time Dad’s Pregnancy Handbook
            </h3>
          </nuxt-link>
          <nuxt-link to="/" class="product-author m-0">
            <p class="text-darkSilver text-[13px] uppercase font-semibold">
              adriand klup
            </p>
          </nuxt-link>
          <nuxt-link to="/" class="product-published m-0">
            <p class="text-darkSilver text-[13px]">
              Last open: 07/08/2021 21:06
            </p>
          </nuxt-link>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  components: {},
}
</script>
