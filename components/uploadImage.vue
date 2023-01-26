<template>
  <div>
    <file-pond
    ref="pond"
    name="test"
    class="filepond"
    label-idle="Drop files here..."
    :allow-multiple="true"
    accepted-file-types="image/jpeg, image/png"
    server="/upload"
    :files="myFiles"
    @init="handleFilePondInit"
    />
  </div>
</template>

<script>
import vueFilePond from "vue-filepond"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)

export default {
  name: "uploadImage",
  data () {
    return { myFiles: [] };
  },
  components: {
    FilePond
  },
  methods: {
    handleFilePondInit: function () {
      console.log("FilePond has initialized")
    }
  }
}

</script>

<style scoped>

</style>