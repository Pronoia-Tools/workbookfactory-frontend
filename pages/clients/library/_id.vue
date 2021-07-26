<template>
  <c-box class="container mx-auto py-24">
    <c-box class="px-6 md:px-12">
      <c-flex class="items-center justify-center mb-16 lg:justify-start">
        <c-image
          :src="require('@/static/icons/books.svg')"
          class="mr-4 lg:mr-8"
          alt="icons"
        />
        <c-text class="text-4xl font-semibold">Library</c-text>
      </c-flex>

      <c-box class="mb-20">
        <c-text class="text-2xl font-semibold mb-20">
          Workbook Information
        </c-text>

        <c-flex class="mb-10 flex-wrap">
          <c-box class="w-full mb-20 lg:w-1/3 md:pr-10 lg:mb-0">
            <c-image
              :src="require('@/static/workbook.jpg')"
              alt="img-workbook"
              class="w-full h-auto mb-10"
            />
            <c-flex class="items-center justify-between">
              <c-button class="w-1/2 mr-2" variant-color="blue">Open</c-button>
              <c-button
                class="w-1/2 ml-2"
                variant-color="blue"
                variant="outline"
              >
                Sent an invite
              </c-button>
            </c-flex>
          </c-box>

          <c-flex class="text-lg w-full flex-wrap lg:w-2/3 md:pl-10">
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Title:</c-text>
              <c-text>Build your nest</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">By:</c-text>
              <c-text>Mikey</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Edition:</c-text>
              <c-text>3</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Language:</c-text>
              <c-text>English</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Published:</c-text>
              <c-text>02/06/2020</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Price:</c-text>
              <c-text>$30</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Categories:</c-text>
              <c-text>Category 1, Category 2, Category 3</c-text>
            </c-flex>
            <c-flex class="w-full mb-6">
              <c-text class="font-semibold text-right mr-6">Share with:</c-text>
              <c-text>coach1@gmail.com, coach2@gmail.com</c-text>
            </c-flex>
            <!-- <c-box class="w-1/11 mr-10 font-semibold text-right">
              <c-text class="mb-6">Title:</c-text>
              <c-text class="mb-6">By:</c-text>
              <c-text class="mb-6">Edition:</c-text>
              <c-text class="mb-6">Language:</c-text>
              <c-text class="mb-6">Published:</c-text>
              <c-text class="mb-6">Price:</c-text>
              <c-text class="mb-6">Categories:</c-text>
              <c-text class="mb-6">Share with:</c-text>
            </c-box>

            <c-box class="w-8/11">
              <c-text class="mb-6">Build your nest</c-text>
              <c-text class="mb-6">Mikey</c-text>
              <c-text class="mb-6">3</c-text>
              <c-text class="mb-6">English</c-text>
              <c-text class="mb-6">02/06/2020</c-text>
              <c-text class="mb-6">$30</c-text>
              <c-text class="mb-6">Category 1, Category 2, Category 3</c-text>
              <c-text class="mb-6">coach1@gmail.com, coach2@gmail.com</c-text>
            </c-box> -->
          </c-flex>
        </c-flex>

        <c-flex class="text-lg">
          <c-text class="font-semibold mr-4"> Description: </c-text>

          <c-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
            maxime dolore delectus temporibus hic, sequi accusantium ullam
            beatae, repellendus illum, atque laudantium ad voluptate officia
            amet sit non impedit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias minus incidunt maxime nam dolorum modi
            officiis id dolores magni! Reprehenderit saepe officiis doloremque
            consequatur consectetur! Vitae earum quasi fugit delectus. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quia tenetur,
            quam adipisci vel suscipit rerum distinctio odit iure quisquam odio,
            explicabo tempore temporibus ea provident! Neque ipsum amet officia
            nulla.
          </c-text>
        </c-flex>
      </c-box>

      <c-box class="overflow-hidden">
        <c-text class="text-2xl font-semibold mb-20">Access Management</c-text>
        <c-box class="w-full text-lg text-center overflow-x-auto">
          <c-flex class="font-semibold items-center justify-between mb-8">
            <c-text class="w-2/5 md:w-1/5">My coach</c-text>
            <c-text class="w-2/5 lg:w-1/5">View</c-text>
            <c-text class="w-1/5">Permission</c-text>
          </c-flex>

          <!-- This section apply with each coachs  -->
          <!-- example: coach 1 -->
          <c-flex class="items-center justify-between mb-8">
            <c-text class="w-2/5 md:w-1/5">Superman</c-text>
            <c-box class="w-2/5 pr-2 lg:w-1/5 lg:pr-0">
              <c-select placeholder="Select part of view">
                <option value="workbook">Whole workbook</option>
                <option value="questions">Questions</option>
              </c-select>
            </c-box>
            <c-form-control class="w-1/5">
              <c-switch id="permission" size="lg" />
            </c-form-control>
          </c-flex>

          <!-- example: coach 2 -->
          <c-flex class="items-center justify-between mb-8">
            <c-text class="w-2/5 md:w-1/5">Batman</c-text>
            <c-box class="w-2/5 pr-2 lg:w-1/5 lg:pr-0">
              <c-select placeholder="Select part of view">
                <option value="workbook">Whole workbook</option>
                <option value="questions">Questions</option>
              </c-select>
            </c-box>
            <c-form-control class="w-1/5">
              <c-switch id="permission" size="lg" />
            </c-form-control>
          </c-flex>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
