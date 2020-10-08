<template>
  <div>
    <v-row justify="center">
      <v-col cols="10">
        <p class="txt" align="center">Why Choose Us</p>
        <v-expansion-panels inset>
          <!-- inset은 패널효과 -->
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header>
              {{ item.title }}
              <v-icon>mdi-link</v-icon>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.text }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Solutions Based",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
          title: "Professional Developers",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
          title: "Modular, Adoptable Code",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
          title: "Customizable",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.txt {
  color: #f09f54;
  font-weight: bold;
  font-size: 25px;
}
</style>