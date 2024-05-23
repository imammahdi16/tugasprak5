<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Hammam Online Store
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" exact label="Home" />
        <q-route-tab to="/products" label="Products" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <q-carousel v-if="isHomePage" animated v-model="carouselModelValue">
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index"
          :img-src="slide.img"
          draggable="false"
        >
          <div
            class="absolute-bottom text-subtitle1 text-shadow text-center full-width"
          >
            {{ slide.caption }}
          </div>
        </q-carousel-slide>
        <q-carousel-control position="bottom-left" offset="[18, 18]" />
      </q-carousel>
      <div class="q-pa-md row justify-center">
        <q-card
          v-for="(product, index) in products"
          :key="index"
          class="q-ma-md"
          style="width: 300px"
        >
          <q-card-section>
            <img
              :src="product.img"
              style="width: 100%; height: 200px; object-fit: cover"
            />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">{{ product.name }}</div>
            <div>{{ product.description }}</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Buy Now" color="primary" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Hammam Online Store</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, computed, nextTick } from "vue";
import { useRoute } from "vue-router";
import {
  QLayout,
  QHeader,
  QToolbar,
  QBtn,
  QToolbarTitle,
  QAvatar,
  QTabs,
  QRouteTab,
  QDrawer,
  QPageContainer,
  QCarousel,
  QCarouselSlide,
  QCarouselControl,
  QCard,
  QCardSection,
  QCardActions,
  QFooter,
} from "quasar";

export default {
  components: {
    QLayout,
    QHeader,
    QToolbar,
    QBtn,
    QToolbarTitle,
    QAvatar,
    QTabs,
    QRouteTab,
    QDrawer,
    QPageContainer,
    QCarousel,
    QCarouselSlide,
    QCarouselControl,
    QCard,
    QCardSection,
    QCardActions,
    QFooter,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const route = useRoute();
    const carouselModelValue = ref(0); // Menambahkan variabel reaktif untuk v-model

    const isHomePage = computed(() => route.path === "/");

    const slides = [
      { img: "https://cdn.quasar.dev/img/parallax1.jpg", caption: "Slide 1" },
      { img: "https://cdn.quasar.dev/img/parallax2.jpg", caption: "Slide 2" },
      { img: "https://cdn.quasar.dev/img/parallax3.jpg", caption: "Slide 3" },
    ];

    const products = [
      {
        img: "https://static.vecteezy.com/system/resources/previews/010/457/280/non_2x/the-best-selling-product-landing-page-template-free-vector.jpg",
        name: "Product 1",
        description: "$10",
      },
      {
        img: "https://img.freepik.com/free-vector/gradient-fluid-effect-landing-page_23-2149329979.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais",
        name: "Product 2",
        description: "$100",
      },
      {
        img: "https://assets-global.website-files.com/6009e6adcf8c45466fee3e56/651cc0eeb5cb83b7dd745cce_Desktop%204096x2416.webp",
        name: "You design, We help!",
        description: "$300",
      },
    ];

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      carouselModelValue, // Menambahkan ke dalam return setup

      isHomePage,
      slides,
      products,
    };
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
