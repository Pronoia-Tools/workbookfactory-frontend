<template>
  <c-box class="container mx-auto my-8">
    <!-- page title -->
    <c-box
      as="p"
      class="font-ibm font-semibold text-3xl text-eerieBlack mb-6 px-4 xl:px-0"
    >
      Workbook Information
    </c-box>

    <!-- workbook information -->
    <c-flex class="flex-wrap mb-14">
      <!-- workbook image -->
      <c-box class="w-full mb-10 lg:w-1/3 xl:w-1/4 lg:mb-0">
        <c-image
          :src="require('@/static/workbook.jpg')"
          alt="workbook"
          class="mx-auto w-[300px] h-[430px]"
        />
      </c-box>
      <!-- workbook details -->
      <c-box class="w-full lg:w-2/3 xl:w-3/4 px-4">
        <!-- workbook-title -->
        <c-box
          as="p"
          class="font-ibm font-semibold text-eerieBlack text-2xl mb-2"
        >
          Title: The Bad Guys in Cut to the Chase (The Bad Guys #13) (13)
        </c-box>
        <!-- workbook author -->
        <c-box as="p" class="font-ibm font-semibold text-darkSilver mb-5">
          BY: ADRIAND KULP
        </c-box>
        <!-- workbook other infor -->
        <c-box class="font-ibm-momo font-semibold text-base text-darkLava mb-5">
          <c-box as="p" class="mb-2">
            Edition:
            <span class="font-normal">3</span>
          </c-box>
          <c-box as="p" class="mb-2">
            Language:
            <span class="font-normal">English</span>
          </c-box>
          <c-box as="p" class="mb-2">
            Published:
            <span class="font-normal">2021/06/02</span>
          </c-box>
          <c-box as="p" class="mb-2">
            Price:
            <span class="font-normal">$30</span>
          </c-box>
          <c-box as="p" class="mb-2">
            Category:
            <span class="font-normal">Childrenbook, Adventure</span>
          </c-box>
          <c-box as="p" class="mb-2">
            Share with:
            <span class="font-normal">Brian, Mraky</span>
          </c-box>
        </c-box>
        <!-- workbook description -->
        <c-box class="font-ibm-momo text-base text-darkLava">
          <c-box as="p" class="mb-2 font-semibold"> Description: </c-box>
          <c-box as="p" class="font-normal">
            "I wish I'd had these books as a kid. Hilarious!" -- Dav Pilkey,
            creator of Captain Underpants and Dog Man They may look like Bad
            Guys, but these wannabe heroes are doing good deeds... whether
            youlike it or not in this New York Times bestselling illustrated
            series.
          </c-box>
          <c-collapse class="font-normal" :is-open="readMore">
            <br />
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </c-collapse>
          <c-pseudo-box
            as="button"
            class="text-blue-500 underline focus:outline-none"
            @click="readMore = !readMore"
          >
            {{ !readMore ? 'Read more' : 'Hide less' }}
          </c-pseudo-box>
        </c-box>
      </c-box>
    </c-flex>

    <c-box class="px-4 xl:px-0">
      <c-box as="p" class="font-ibm font-semibold text-xl text-eerieBlack mb-5">
        Access management
      </c-box>

      <c-box class="w-full lg:w-2/3 overflow-x-auto" min-height="300px">
        <c-box
          as="table"
          class="w-full border border-quickSilver font-ibm-momo text-base"
        >
          <!-- head -->
          <c-box as="thead" class="text-darkSilver">
            <c-box as="tr">
              <c-box as="th" class="w-2/12">My coach</c-box>
              <c-box as="th" class="w-1/12">View</c-box>
              <c-box as="th" class="w-2/12">Permission</c-box>
            </c-box>
          </c-box>

          <!-- body -->
          <c-box as="tbody" class="text-eerieBlack">
            <!-- 1 -->
            <c-box as="tr" class="text-center">
              <c-box as="td">Mraky@WorkbookFactory.io</c-box>
              <c-box as="td">Collaborator</c-box>
              <c-box as="td">
                <c-switch size="lg" />
              </c-box>
            </c-box>

            <!-- 2 -->
            <c-box as="tr" class="text-center">
              <c-box as="td">Mraky@WorkbookFactory.io</c-box>
              <c-box as="td">Collaborator</c-box>
              <c-box as="td">
                <c-switch size="lg" />
              </c-box>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      readMore: false,
    }
  },
}
</script>
