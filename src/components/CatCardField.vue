<template>
  <div class="form-group row">
    <label v-bind:for="id" class="col-sm-2 col-form-label">{{ fieldTitle }}</label>
    <input v-bind:type="fieldType" v-bind:required="required" class="form-control col-sm-10" v-bind:id="id" v-bind:placeholder="placeholder">
    <div v-if="required" class="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    fieldTitle: String,
    fieldType: String,
    required: Boolean,
    placeholder: String
  }
}
</script>
