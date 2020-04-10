<template>
  <form class="contact-form" @submit.prevent="contact">
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
    v-model="formData.user_email"
    type="email"
    name="user_email"
    :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
    ref="user_email"
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
/* eslint-disable */
// import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        user_email: '',
        message: ''
      }
    }
  },
  methods: {
    isValidEmailAddress (email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return re.test(String(email).toLowerCase())
    },
    contact () {
      this.$refs.user_email.validate()
      this.$refs.message.validate()
      if (this.$refs.user_email.hasError && this.$refs.message.hasError) {
        this.$q.notify({
          color: 'negative',
          message: 'Please fill out all the fields.'
        })
      } else if (!this.$refs.user_email.hasError && !this.$refs.message.hasError) {
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
        Email.send({
          SecureToken: 'dc3ec494-1cd2-46e8-8451-1edfc9f849f6',
          To: 'info@broadbandguitar.com',
          From: this.formData.user_email,
          Subject: 'BBG info request',
          Body: this.formData.message
        })
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Your email has been sent'
        })
      }
    }
  }
}
</script>
