<template>
  <v-list>
    <v-list-item>
      <v-row>
        <v-col>م</v-col>
        <v-col>كود الصنف</v-col>
        <v-col>اسم الصنف</v-col>
        <v-col>الكميه</v-col>
        <v-col>منطقة التخزين</v-col>
      </v-row>
    </v-list-item>
    <v-list-item v-for="(product, n) in products" :key="n">
      <v-row>
        <v-col>{{ n + 1 }}</v-col>
        <v-col>{{ product.code }}</v-col>
        <v-col>{{ product.name }}</v-col>
        <v-col>{{ product.quantity }}</v-col>
        <v-col>{{ product.section }}</v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProductsList',
  computed: mapGetters('products', ['products']),
  beforeMount() {
    this.$axios.$get('products').then((res) => this.setProducts(res))
  },
  methods: mapMutations('products', ['setProducts']),
}
</script>
