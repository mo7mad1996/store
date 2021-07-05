<template>
  <v-form @submit.prevent="add">
    <v-row align="center">
      <v-col>
        <v-text-field label="كود الصنف" v-model="product.code"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field label="إسم الصنف" v-model="product.name"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field label="الكميه" v-model="product.quantity"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          label="منطقة التخزين"
          v-model="product.section"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-btn type="submit" block>إضافه</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddForm',
  data: () => ({
    product: {
      code: '',
      name: '',
      quantity: '',
      section: '',
    },
  }),

  computed: mapGetters('products', ['ok']),

  methods: {
    ...mapActions('products', ['addProducts']),
    add() {
      this.addProducts(this.product)
    },
  },

  watch: {
    ok() {
      this.product = {
        code: '',
        name: '',
        quantity: '',
        section: '',
      }
    },
  },
}
</script>
