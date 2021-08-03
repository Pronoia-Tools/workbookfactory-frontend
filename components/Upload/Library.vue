<template>
  <c-flex
    direction="column"
    w="320px"
    as="nav"
    background-color="#FEFBF5"
    class="border py-5 font-ibm"
  >
    <c-box class="px-4 pb-5">
      <c-box as="h4" size="sm" class="text-base font-ibm">
        Drop and drag item
      </c-box>
      <c-box class="border rounded-md mt-3 w-full h-20"></c-box>
    </c-box>
    <hr />

    <c-box class="px-4 py-5">
      <c-flex class="justify-between font-semibold">
        <p as="p" size="sm" class="text-base font-ibm">Images</p>
        <p as="h4" size="sm" class="text-base text-blue-700">
          <c-icon w="5" name="plus" class="icon" />
          Upload
        </p>
      </c-flex>
      <c-flex class="py-5 space-x-2" align-items="center">
        <c-input-group w="210px">
          <c-input-left-element>
            <c-icon name="searchIcon" color="gray.400" text="sm" />
          </c-input-left-element>
          <c-input type="phone" placeholder="Search" />
        </c-input-group>
        <c-icon name="grid" color="blue.700" />
        <c-icon name="list" color="blue.700" />
      </c-flex>

      <c-box class="grid grid-cols-2 gap-4 auto-rows-auto">
        <c-box w="100%">
          <c-image
            class="rounded-md shadow-sm"
            src="https://bit.ly/chakra-jonathan-bakebwa"
            alt="Jonathan Bakebwa"
          />
          <p class="text-xs mt-2">
            <span
              class="
                block
                font-semibold
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
              "
              >A name of the this picture
            </span>
            <span class="block text-darkSilver">1920x1080 - 128kb</span>
          </p>
        </c-box>
        <c-box w="100%">
          <c-image
            class="rounded-md shadow-sm"
            src="https://bit.ly/chakra-jonathan-bakebwa"
            alt="Jonathan Bakebwa"
          />
          <p class="text-xs mt-2">
            <span
              class="
                block
                font-semibold
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
              "
              >A name of the picture</span
            >
            <span class="block text-darkSilver">1920x1080 - 128kb</span>
          </p>
        </c-box>
        <c-box w="100%">
          <c-image
            class="rounded-md shadow-sm"
            src="https://bit.ly/chakra-jonathan-bakebwa"
            alt="Jonathan Bakebwa"
          />
          <p class="text-xs mt-2">
            <span
              class="
                block
                font-semibold
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
              "
              >A name of the picture</span
            >
            <span class="block text-darkSilver">1920x1080 - 128kb</span>
          </p>
        </c-box>
        <c-box w="100%">
          <c-image
            class="rounded-md shadow-sm"
            src="https://bit.ly/chakra-jonathan-bakebwa"
            alt="Jonathan Bakebwa"
          />
          <p class="text-xs mt-2">
            <span
              class="
                block
                font-semibold
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
              "
              >A name of the picture</span
            >
            <span class="block text-darkSilver">1920x1080 - 128kb</span>
          </p>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>
