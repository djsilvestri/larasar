 <template>
<q-layout>
  <q-page-container>
     <q-page class="q-pa-md">
<div class="col-12 col-md-auto">
  <div class="column" style="height: 250px">
       <h4 v-if="user" >{{$t('you_are_logged_in')}}</h4>
      <div class="col col-md-8">
      <div class="header__logo-box">
                <img src="../img/logo_file.png" alt="Logo" class="header__logo">
            </div>
            </div>
            <br />
            <p class="special">New Student Special: 4 monthly 30 minute lessons for $99!</p>
    </div>
    <div class="col col-md-12">
 <div class="bg-video">
  <q-media-player
    playsinline
    type="video"
    :sources="sources"
    :show-big-play-button="false"
    hide-volume-slider
    mobile-mode
    class="bg-video-content"/>
</div>
</div>
  <br />
  <div class="row">
      <div class="col text-uppercase text-weight-bold text-h4 heading-secondary">Live, Personalized Music Lessons</div>
</div><br>
 We are a group of musicians who love to teach and have many years of experience between us.  Our instructors tailor their lesson plans to fit their students' needs.  It is our objective to provide all the means necessary for our students to advance in their musical instrument proficiency.  Let us help you maximize your potential on guitar or bass.  Please contact us for more information. <br /><br />
 <div class="col text-uppercase text-weight-bold text-h4 heading-secondary">What we offer</div>
<br />
<p>
We are proud to provide exceptional online instruction from some great guitar teachers who have a wealth of experience, talent, and a true passion for instructing.  In addition to the one-on-one focus with world-renowned guitarists, we offer lesson recaps in video format, scrolling tablature, printable PDFs for your personal use away from the computer, and workshops conducted by these musicians to help you hone your skill.  It is our belief that, when learning a new skill like guitar, a student must learn correctly the first time in order to prevent bad habits from forming.  There are intangible elements, such as sitting properly, strumming correctly, and even holding a pick properly, that the instructors will reinforce so that their students can learn good habits and get the most out of their training.  Our objective is for you to reach your musical potential, and we aim to give you the resources necessary to do that.
   </p><br />
 <div class="col text-uppercase text-weight-bold text-h4 heading-secondary">Learn from home, at your own pace</div>
<br />
<p>
Broadband Guitar provides a learning environment where busy students, professionals and established musicians can grow as artists.  We understand that schedules can conflict, and driving can consume a good portion of one's day.  Our online lessons fit into your busy lifestyle - you need not leave the comfort of your home to receive excellent instruction.  We provide a robust community for becoming proficient in the instrument of your choice. Simply logon for your lesson from you home or office with a broadband connection and you are ready to learn. By eliminating drive times and lugging gear around, our students can focus on learning and playing music.
 </p>
      </div>
</q-page>
  </q-page-container>
</q-layout>
</template>

<style scoped>
  ul {list-style-type: none}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      sources: [
        { src: '../videos/broadbandguitar.mp4',
          // src: 'https://broadbandguitar.com/broadbandguitar01.mp4',
          type: 'video/mp4'
        }
      ],
      slide: 1
    }
  },
  name: 'PageIndex',
  computed: mapGetters({
    user: 'users/authGetter'
  }),
  methods: {
    hideControls: () => 'true'
  }
}
</script>
<style scoped>

.bg-video {
  top:0;
  left:0;
  height:100%;
  width:100%;
  z-index:-1;
  opacity:0.9;
  overflow:hidden;
}

.header__text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.heading-primary {
  color: #000;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  text-transform: uppercase;
}

.heading--sub {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .75rem;
  text-transform: uppercase;
}

.heading-primary--main{display:block;font-size:6rem;font-weight:400;letter-spacing:3.5rem;-webkit-animation-name:moveInLeft;animation-name:moveInLeft;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@media only screen and (max-width: 37.5em){.heading-primary--main{letter-spacing:1rem;font-family:5rem}}

@font-face{
  font-family:"linea-basic-10";
    src:url("../css/fonts/linea-basic-10.eot");
    src:url("../css/fonts/linea-basic-10.eot?#iefix")
    format("embedded-opentype"),url("../css/fonts/linea-basic-10.woff") format("woff"),url("../css/fonts/linea-basic-10.ttf") format("truetype"),url("../css/fonts/linea-basic-10.svg#linea-basic-10") format("svg");
  font-weight:normal;
    font-style:normal
    }[data-icon]:before{font-family:"linea-basic-10" !important;content:attr(data-icon);font-style:normal !important;font-weight:normal !important;font-variant:normal !important;text-transform:none !important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[class^="icon-"]:before,[class*=" icon-"]:before{font-family:"linea-basic-10" !important;font-style:normal !important;font-weight:normal !important;font-variant:normal !important;text-transform:none !important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}

.main-font {
  text-align: center;
  font-family: 'Lato', sans-serif;
  color: #000;
}

.my-font {
  font-family: 'Lato', sans-serif;
  color: rgb(70, 64, 64);
  margin: 0px 11px 16px;
}

.body-text {
  font-family: 'Lato', sans-serif;
  color:#000;
}

@media only screen and (max-width: 37.5em){.header{-webkit-clip-path:polygon(0 0, 100% 0, 100% 85vh, 0 100%);clip-path:polygon(0 0, 100% 0, 100% 85vh, 0 100%)}}

.heading-secondary {
  color: #c79967;
  text-align: center;
}

.heading-tertiary {
  color: #504747;
  text-align: center;
}

.header__logo-box {
  text-align:center;
  margin-bottom:2rem;
  }
  @media only screen and (max-width: 56.25em){
    .header__logo-box{margin-bottom:6rem
    }
    }
    .header__logo {
      height:10rem;
      }

.feature-box {
  background-color:rgba(255,255,255,0.8);
  text-align:center;
  border-radius:3px;
  -webkit-box-shadow:0 1.5rem 4rem rgba(0,0,0,0.15);
  box-shadow:0 1.5rem 4rem rgba(0,0,0,0.15);-webkit-transition:-webkit-transform .3s;
  transition:-webkit-transform .3s;
  transition:transform .3s;
  transition:transform .3s,
   -webkit-transform .3s
  }
.feature-box:hover{-webkit-transform:translateY(-1.5rem) scale(1.03);transform:translateY(-1.5rem) scale(1.03)}.form__group:not(:last-child){margin-bottom:2rem}.form__input{font-size:1.5rem;font-family:inherit;color:inherit;padding:1.5rem 2rem;border-radius:2px;background-color:rbga(#fff, 0.5);border:none;border-bottom:3px solid transparent;width:90%;display:block;-webkit-transition:all .3s;transition:all .3s}@media only screen and (max-width: 56.25em){.form__input{width:100%}}.form__input:focus{outline:none;-webkit-box-shadow:0 1rem 2rem rgba(0,0,0,0.1);box-shadow:0 1rem 2rem rgba(0,0,0,0.1);border-bottom:3px solid #2343f7}.form__input:focus:invalid{border-bottom:3px solid #ff7730}.form__input::-webkit-input-placeholder{color:#999}.form__label{font-size:1.2rem;font-weight:700;margin-left:2rem;margin-top:.7rem;display:block;-webkit-transition:all .3s;transition:all .3s}.form__input:placeholder-shown+.form__label{opacity:0;visibility:hidden;-webkit-transform:translateY(-4rem);transform:translateY(-4rem)}

.special {
 color: #504747;
 text-align: center;
 font-style: italic;
 font-size: large;
 font-weight: 700;
}
.q-media__controls {
  display: none;
}
</style>
