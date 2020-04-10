<template>
  <form id="contact-form" class="contact-form" @submit.prevent="sendEmail"> 
    <!-- <q-form action="https://broadbandguitar.com/mail.php" method="post" @submit="submitForm">  -->
    <div class="row q-mb-md">
     <q-banner class="bg-white-3 col">
      <template v-slot:avatar>
        <q-icon name="mail" color="primary" />
      </template>
      Let us help you reach your musical potential.
    </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input 
      v-model="formData.name"
      :rules="[ val => val && val.length > 0 || 'Please enter your name.']"
      ref="name"
      lazy-rules 
    outlined
    class="col"
    label="Name"
    stack-label />
    </div>
    <div class="row q-mb-md">
    <q-input
    v-model="formData.email"
    :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
    ref="email"
    lazy-rules
    outlined
    class="col"
    label="Email"
    stack-label />
    </div>
   <div class="row q-mb-md">
      <q-input 
      v-model="formData.message"
      :rules="[ val => val && val.length > 0 || 'Please enter a message.']"
      ref="message"
      lazy-rules
    outlined
    type="textarea"
    class="col"
    label="Message"
    stack-label />
    </div>
    <div class="row">
      
      <q-btn
      color="primary"
      :label="tab"
      type="submit"
      />
    </div>
  </form>
</template> 




<script>
import { mapActions } from 'vuex'
import { emailjs } from 'emailjs-com'


export default {
  props: ['tab'],
  data() {
    return {
      formData: {
      name: '',
      email: '',
      message: ''
      },
    };
  },
  methods: { // store/store-auth.js
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    sendEmail(e)  {

       emailjs.sendForm('broadbandlivelessons', 'template_GrU5rcWh', e.target, 'user_OPS78xtHmsmR38RLsJ4As')
      .then((result) => {
        console.log('Success!', result.status, result.text);
      }, (error) => {
        console.log('Failed...', error);
      });
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Your email has been sent'
      })

      // this.$refs.email.validate();
      // this.$refs.name.validate();
      // this.$refs.message.validate();

      // if (this.$refs.email.hasError && this.$refs.name.hasError && this.$refs.message.hasError) {
      //   this.$q.notify({
      //     color: 'negative',
      //     message: 'Please fill out all of the fields.'
      // }) } else {
      // emailjs.sendForm('broadbandlivelessons', 'template_GrU5rcWh', e.target, 'user_OPS78xtHmsmR38RLsJ4As')
      // .then((result) => {
      //   console.log('Success!', result.status, result.text);
      // }, (error) => {
      //   console.log('Failed...', error);
      // });
      // this.$q.notify({
      //   color: 'green-4',
      //   textColor: 'white',
      //   icon: 'cloud_done',
      //   message: 'Your email has been sent'
      // })
      // }
      // this.$refs.email.validate();
      // this.$refs.name.validate();
      // this.$refs.message.validate();
    
      // if (!this.$refs.email.hasError && !this.$refs.name.hasError && !this.$refs.message.hasError) {
      //   if (this.tab === 'login') {
      //     this.loginUser(this.formData)
      //   } else {
      //     this.registerUser(this.formData)
      //   }
      //   content = this.formData
      // axios({
      //   method: 'post',
      //   url: 'https://broadbandguitar.com/mail.php',
      //   data: this.content
      // }) 
      // this.formData
      
      // }
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>
