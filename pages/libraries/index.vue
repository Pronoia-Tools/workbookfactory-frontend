<template>
  <c-box class="container mx-auto my-8">
    <c-box>
      <h1 class="text-3xl font-ibm">Your Library</h1>
    </c-box>
    <c-box class="my-6 grid grid-flow-col lg:grid-cols-4 lg:gap-4 products">
      <c-box class="product-item">
        <c-box class="product-img rounded-md relative">
          <c-box
            class="
              absolute
              flex
              top-0
              left-0
              w-full
              h-full
              items-center
              justify-center
              opacity-0
              overlay
              rounded-md
            "
          >
            <c-box
              class="absolute rounded-md bg-black w-full h-full opacity-30 z-10"
            ></c-box>
            <c-box
              class="
                w-12
                h-12
                items-center
                justify-center
                flex
                border-2 border-white
                rounded-full
                mx-2
                pointer
                z-30
              "
            >
              <c-image
                class="w-[20px]"
                :src="require('@/static/icons/open.svg')"
              />
            </c-box>
            <c-box
              class="
                w-12
                h-12
                items-center
                justify-center
                flex
                border-2 border-white
                rounded-full
                mx-2
                pointer
                z-30
              "
            >
              <c-image
                class="w-[10px]"
                :src="require('@/static/icons/info.svg')"
              />
            </c-box>
          </c-box>
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
              class="text-[16px] text-eerieBlack leading-[26px] font-semibold"
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

<style lang="scss">
.product-img:hover .overlay {
  opacity: 1;
}
</style>
