<template>
  <v-app>
    <v-container fluid>
      <!-- components -->
      <AddForm />
      <hr />
      <ProductsList />
    </v-container>
  </v-app>
</template>

<script>
// components
import AddForm from '~/components/home/add_form/index'
import ProductsList from '~/components/home/products_list/index'

export default {
  name: 'Home',
  components: { AddForm, ProductsList },
}
</script>
