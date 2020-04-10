<template>

    <q-layout view="hHh lpR fFf">
      <q-header elevated>
      <q-toolbar>
      <q-btn
      flat
      dense
      round
      @click="leftDrawerOpen = !leftDrawerOpen"
      aria-label="Menu">

      <q-icon name="menu" />
      </q-btn>
         <q-toolbar-title class="absolute-center">
          1-on-1 Learning
        </q-toolbar-title>
<q-btn
        v-if="!loggedIn"
        to="/auth"
        flat
        icon-right="account_circle"
        label="Login"
        class="absolute-right" />

        <q-btn
        v-else
        @click="logoutUser"
        flat
        icon-right="account_circle"
        label="Logout"
        class="absolute-right" />
        <locale-dropdown />
      </q-toolbar>
    </q-header>
    <!-- Header End -->

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary">
        <div class="absolute-bottom bg-transparent text-center">
          <template v-if="user">
            <q-avatar size="70px" class="*q-mb-sm">
              <img :src="user.new.avatar">
            </q-avatar>
            <div class="text-weight-bold">
              <q-btn-dropdown
                rounded
                :label="user.name"
                @click.prevent="authDrawer = !authDrawer"
              >
              </q-btn-dropdown>
            </div>
            <div>{{ user.email }}</div>
          </template>
        </div>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item
        v-for="nav in navs"
        :to="nav.to"
        :key="nav.label"
        class="text-grey-4"
        exact
        clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
        <q-list v-if='authDrawer'>
        </q-list>
        <q-list v-else>
          <q-item clickable to='/profile'>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('profile')}}</q-item-label>
              <q-item-label caption>{{user.role}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-if="(user.id == 1 || user.role == 'Admin') || user.role == 'Seller'" to='/users'>
            <q-item-section avatar><!-- Admins and Sellers View ====-->
              <q-icon name="people" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('users')}}</q-item-label>
              <q-item-label caption>{{user.role}}'s Users</q-item-label>
            </q-item-section>
          </q-item><!--==============-- Admins and Sellers View End -->
          <q-item clickable :to="{name: 'auth.test'}">
            <q-item-section avatar>
              <q-icon name="check_circle_outline" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Test</q-item-label>
              <q-item-label caption>@CheckCode</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div v-if="user" class="q-pa-md"><!-- Authenticated ====-->
          <q-btn icon="lock_open" :label="$t('logout')" @click.prevent="logout" />
        </div><!--=========================== Authenticated End -->
        <div v-else class="q-pa-md"><!--===== Guest ============-->
          <q-btn icon="vpn_key" :label="$t('login')" :to="{name: 'public.login'}" />
          <q-btn icon="add_to_queue" :label="$t('register')" :to="{name: 'public.register'}" />
        </div><!--=========================== Guest End ========-->
      </q-scroll-area>
    </q-drawer>
    <!-- Drawer End -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer>
         <q-tabs>
        <q-route-tab
        to="/"
        icon="home"
        label="Home" />
        <q-route-tab
        to="/profile"
        icon="info"
        label="Settings"
        />
      </q-tabs>
</q-footer>
    <!-- Footer End -->

    <q-ajax-bar size="5px"/>
  </q-layout>
</template>

<script>
import { openURL, QAjaxBar } from 'quasar'
import { mapGetters } from 'vuex'
import LocaleDropdown from '../components/LocaleDropdown'

export default {
  openURL,
  components: {
    QAjaxBar,
    LocaleDropdown
  },
  data () {
    return {
      leftDrawerOpen: false, // this.$q.platform.is.desktop,
      authDrawer: true,
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          label: 'About',
          icon: 'info',
          to: '/about'
        },
        {
          label: 'FAQ',
          icon: 'question_answer',
          to: '/help'
        },
        {
          label: 'Calendar',
          icon: 'calendar_today',
          to: '/calendar'
        },
        {
          label: 'Contact',
          icon: 'mail',
          to: '/contact'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  computed: mapGetters({
    user: 'users/authGetter',
    appName: 'config/appNameGetter'
  }),
  methods: {
    async logout () {
      // Log out the user.
      this.$store.dispatch('users/logoutAction', this.user)
        .then(() => {
          // Redirect to login.
          this.$router.push({ name: 'public.login' })
          this.authDrawer = true
        })
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
  color: white !important;
  }
}
</style>
