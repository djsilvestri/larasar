<template>
  <q-page padding>
     <q-list
     class="q-mb-md"
     bordered
     padding>
     <q-item-label>Settings</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Enable Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
          v-model="enableDarkMode"
          color="blue" />
        </q-item-section>
      </q-item>
</q-list>

<q-list bordered padding>
<q-item-label header>More</q-item-label>
<q-item
 to="/settings/privacy"
 tag="label"
 v-ripple>
<q-item-section>
<q-item-label>Privacy Statement</q-item-label>
</q-item-section>
<q-item-section side >
<q-icon name="chevron_right" />
</q-item-section>
</q-item>
<q-item
 to="/settings/email"
 tag="label"
 v-ripple>
<q-item-section>
<q-item-label>Email us</q-item-label>
</q-item-section>
<q-item-section side >
<q-icon name="chevron_right" />
</q-item-section>
</q-item>
    </q-list>
  </q-page>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  computed: {
    ...mapGetters('settings', ['settings']),
    enableDarkMode: {
      get () {
        return this.settings.enableDarkMode
      },
      set (value) {
        this.setEnableDarkMode(value)
      }
    },
    show12HourTimeFormat: {
      get () {
        return this.settings.show12HourTimeFormat
      },
      set (value) {
        this.setShow12HourTimeFormat(value)
      }
    },
    showTasksInOneList: {
      get () {
        return this.settings.showTasksInOneList
      },
      set (value) {
        this.setShowTasksInOneList(value)
      }
    }
  }, // end computed property
  methods: { // store/store-settings.js
    ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList', 'setEnableDarkMode'])
  }
}
</script>
