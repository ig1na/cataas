<template>
  <section class="container">
      <h2>Cat card form</h2>
      <hr />
      <form novalidate class="was-validated">
        <CatCardField
        v-for="field in addCardFields"
        v-bind:key="field.id"
        v-bind:id="field.id"
        v-bind:fieldTitle="field.title"
        v-bind:fieldType="field.type"
        v-bind:required="field.required"
        v-bind:placeholder="field.placeholder">
        </CatCardField>
</template>

<script>
import CatCardField from "./CatCardField";

export default {
  components: { CatCardField },
  data: function() {
    return {
      addCardFields: [
        { id: "cardTitle", title: "Card title", type: "text", required: true, placeholder: "Card title" },
        { id: "cardImage", title: "Card image URL", type: "url", required: true, placeholder: "Card image URL" },
        { id: "cardDescription", title: "Card description", type: "text", },
        {  },
        {  }
      ]
    }
  }

}
</script>
