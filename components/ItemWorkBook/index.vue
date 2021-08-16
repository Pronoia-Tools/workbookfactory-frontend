<template>
  <c-box class="mx-auto">
    <c-box
      background-image="url('/cover.png')"
      class="
        product-img
        relative
        h-[500px]
        w-full
        bg-center bg-no-repeat bg-cover
        rounded-md
        mx-auto
      "
    >
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

        <!-- open icon -->
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
          <c-image class="w-[20px]" :src="require('@/static/icons/open.svg')" />
        </c-box>

        <!-- info icon -->
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
          <c-image class="w-[10px]" :src="require('@/static/icons/info.svg')" />
        </c-box>
      </c-box>
    </c-box>

    <c-box class="product-infomation flex flex-col space-y-1 pt-4">
      <nuxt-link to="/" class="product-title">
        <h3 class="text-[16px] text-eerieBlack leading-[26px] font-semibold">
          {{ workbook.title }}
        </h3>
      </nuxt-link>

      <nuxt-link to="/" class="product-author m-0">
        <p class="text-darkSilver text-[13px] uppercase font-semibold">
          {{ workbook.owner.username }}
        </p>
      </nuxt-link>

      <nuxt-link to="/" class="product-published m-0">
        <p class="text-darkSilver text-[13px]">
          Last open: {{ $dayjs(workbook.created).format('MM DD YYYY') }}
        </p>
      </nuxt-link>
    </c-box>
  </c-box>
</template>

<script>
export default {
  components: {},
  props: {
    workbooks: {
      type: Array,
      default: null,
    },
  },
  data() {
    return { workbook: this.workbooks[0] }
  },
}
</script>

<style lang="scss">
.product-img:hover .overlay {
  opacity: 1;
}
</style>
