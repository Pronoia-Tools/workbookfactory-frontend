<template>
  <c-flex direction="row" w="100%">
    <side-bar>
      <editor-sidebar />
    </side-bar>
    <c-box w="80%">
      <c-box mx="4" my="5" py="5" background-color="#fff">
        <c-box px="2rem">
          <c-box>
            <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
          </c-box>

          <c-box py="10">
            <c-grid template-columns="repeat(3, 1fr)" gap="6">
              <c-grid-item col-span="1" bg="blue.300" />
              <c-grid-item col-span="2">
                <c-stack :spacing="5">
                  <c-form-control display="flex" align-items="center">
                    <c-form-label width="100px"> Title </c-form-label>
                    <c-input v-model="title" flex="1" type="text" />
                  </c-form-control>

                  <c-form-control display="flex">
                    <c-box display="flex" w="50%" align-items="center">
                      <c-form-label width="100px" px="2">
                        Language
                      </c-form-label>
                      <c-input v-model="language" flex="1" type="text" />
                    </c-box>
                  </c-form-control>

                  <c-form-control display="flex">
                    <c-box display="flex" w="80%" align-items="center">
                      <c-form-label width="100px"> Price </c-form-label>
                      <c-input v-model="price" flex="1" type="text" />
                    </c-box>
                    <c-box display="flex" w="20%" pl="2">
                      <c-select v-model="currency">
                        <option selected>USD</option>
                      </c-select>
                    </c-box>
                  </c-form-control>

                  <c-form-control display="flex" align-items="center">
                    <c-form-label width="100px"> Categories </c-form-label>
                    <c-input flex="1" type="text" />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="4">
              <c-textarea
                v-model="description"
                placeholder="Description"
                min-height="300px"
              ></c-textarea>
            </c-box>

            <c-flex mt="8" align-items="center" justify-content="flex-end">
              <c-button variant-color="blue" size="md" @click="submitForm">
                Submit
              </c-button>
            </c-flex>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import EditorSidebar from '@/components/SideBar/EditorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'editor-sidebar': EditorSidebar,
  },
  data() {
    return {
      title: '',
      language: '',
      price: '',
      currency: '',
      description: '',
      categories: '',
      image: '',
    }
  },
  methods: {
    submitForm() {},
  },
}
</script>
