<!--<template>
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
</template>-->

<!--<script>
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
  color: #fff;
}
.message {
  padding-bottom: 50px;
}
.ma-2 {
  color: #fff;
}
</style>-->

<!-- <template>
  선생님버전 contact me 
  <div class="contact-me">
    <h2>{{ 'contact me'.toUpperCase() }}</h2>
    <div class="divider"></div>
    <div class="form">
      <v-text-field
        placeholder="Name*"
        color="white"
        solo
        class="contact-text-field"
        v-model="name"
      >
        placeholder input같은 스타일 
      </v-text-field>
      <v-text-field
        placeholder="Email*"
        color="white"
        solo
        class="contact-text-field"
        v-model="email"
      >
      placeholder input같은 스타일 
      </v-text-field>
      <v-text-field
        placeholder="Subject*"
        color="white"
        solo
        class="contact-text-field"
        v-model="subject"
      >
      placeholder input같은 스타일 
      </v-text-field>
      <v-textarea solo placeholder="Message*" v-model="message"></v-textarea>
      <v-row justify="center">
        <v-btn color="#82b1ff" dark>
          SUBMIT
        </v-btn>
      </v-row>
    </div>
    <div v-for="(employee, i) in body.data" :key="i" style="color:white">
      <div>
        {{
          'name : ' + employee.employee_name + 'age : ' + employee.employee_age
        }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  computed: {
    ...mapState(['body']),
  },
  beforeMount() {

  },
  // HTTP POST요청하는 방법
  methods: {
    httpGetExample () {
          // this.$http
    //   .get('http://dummy.restapiexample.com/api/v1/employees')
    //   // get요청은 url넣으면 끝
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   });
    // 위의내용 콜백함수 요청(응답)이 올때 실행,
    // HTTP통신방법
    console.log(this.body);
    for (let i = 0; i < this.body.data.length; i++) {
      let employee = this.body.data[i];
      console.log(
        'name : ' + employee.employee_name + 'age : ' + employee.employee_age
      );
    }
    // name/age for of문다른방법
    for (let employee of this.body.data) {
      console.log(
        'name : ' + employee.employee_name + 'age : ' + employee.employee_age
      );
    }
    // console.log(forEach사용법-제일 많이 사용)
    this.body.data.forEach((employee) => {
      console.log(
        'name : ' + employee.employee_name + 'age : ' + employee.employee_age
      );
    });
    },
    requestSendEmail() {
    this.$http
    .post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },
  },
};
</>

<style lang="scss" scoped>
.contact-me {
  padding: 50px;
  background-color: #333333;
}
h2 {
  color: #fff;
}
.contact-text-field {
  margin-bottom: 10px;
}
</style> 오류남-->

<template>
  <div class="contact-me">
    <h2>{{ 'Contact Me'.toUpperCase() }}</h2>
    <div class="divider"></div>
    <div class="form">
      <v-text-field
        placeholder="Name*"
        color="white"
        solo
        class="contact-text-field"
        v-model="name"
      ></v-text-field>
      <v-text-field
        placeholder="Email*"
        color="white"
        solo
        class="contact-text-field"
        v-model="email"
      ></v-text-field>
      <v-text-field
        placeholder="Subject*"
        color="white"
        solo
        class="contact-text-field"
        v-model="subject"
      ></v-text-field>
      <v-textarea solo placeholder="Message*" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn color="#82b1ff" dark @click="requestSendEmail">
          submit</v-btn
        ></v-row
      >
    </div>
    <!-- <div>
      <div v-for="(employee, i) in body.data" :key="i" style="color: white">
        <div>
          {{
            'name :' +
              employee.employee_name +
              ' age : ' +
              employee.employee_age
          }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sendGrid from '@/config/sendGrid.json';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  computed: {
    ...mapState(['body']),
  },
  beforeMount() {},
  methods: {
    httpGetExample() {
      // this.$http
      //   .get('http://dummy.restapiexample.com/api/v1/employees')
      //   .then(function(response) {
      //     // handle success
      //     console.log(response.data);
      //   })
      //   .catch(function(error) {
      //     // handle error
      //     console.log(error);
      //   });
      console.log(this.body);
      for (let i = 0; i < this.body.data.length; i++) {
        let employee = this.body.data[i];
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      }
      console.log('for of 문');
      for (let employee of this.body.data) {
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      }
      console.log('forEach 사용법');
      this.body.data.forEach((employee) => {
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      });
    },

    requestSendEmail() {
      let body = {
        personalizations: [
          {
            to: [
              {
                email: 'sunah5011@gmail.com',
              },
            ],
            subject: this.subject,
          },
        ],
        from: {
          email: this.email,
        },
        content: [
          {
            type: 'text/plain',
            value:
              '안녕하세요 내 이름은 ' + this.name + '입니다.' + this.message,
          },
        ],
      };
      this.$http
        .post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', body, {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
            'x-rapidapi-key': sendGrid.key,
            accept: 'application/json',
            useQueryString: true,
          },
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-me {
  padding: 50px;
  background-color: #333333;
}
h2 {
  color: white;
}
.contact-text-field {
  margin-bottom: 10px;
}
</style>
