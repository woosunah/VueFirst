<template>
  <div class="contact-me">
    <h2>{{ "contact me".toUpperCase() }}</h2>
    <div class="divider"></div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="15">
            <v-text-field v-model="first" label="Name*" solo></v-text-field>
          </v-col>
          <v-col cols="12" sm="15">
            <v-text-field v-model="first" label="Email*" solo></v-text-field>
          </v-col>
          <v-col cols="12" sm="15">
            <v-text-field v-model="first" label="Subject*" solo></v-text-field>
          </v-col>
          <v-col cols="12" sm="15">
            <v-textarea v-model="first" label="Message*" solo></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-btn
      class="ma-2"
      x-large
      :loading="loading"
      :disabled="loading"
      color="#82b1ff"
      @click="loader = 'loading'"
    >
      SUBMIT
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-me {
  background: #222;
  padding: 20px;
  text-align: center;
}
h2 {
  margin-top: 50px;
  color: white;
}
.message {
  padding-bottom: 50px;
}
.ma-2 {
  color: white;
}
</style>