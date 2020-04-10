<template>
<q-layout>
  <q-page-container>
     <q-page class="q-pa-md">
<div class="col-12 col-md-auto">
  <div class="column" style="height: 250px">
<div class="col col-md-8">
<div class="header__logo-box">
<img src="../img/logo_file.png" alt="Logo" class="header__logo">
</div>
</div>
<br />
</div>
    <div class="responsiveCal">
  <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=aDNlbmptY2UybWJmbXY3bzZqcWlsdjdlZjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;mode=AGENDA" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
      </div>
</q-page>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  data () {
    return {
      sources: [
        { // src: './videos/broadbandguitar01.mp4',
          src: 'https://broadbandguitar.com/broadbandguitar01.mp4',
          type: 'video/mp4'
        }
      ],
      slide: 1
    }
  }
}
</script>

<style scoped>

.responsiveCal {
position: relative; padding-bottom: 75%; height: 0; overflow: hidden;
}

.responsiveCal iframe {
position: absolute; top:0; left: 0; width: 100%; height: 100%;
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
format("embedded-opentype"),url("../css/fonts/linea-basic-10.woff") format("woff"),url("../css/fonts/linea-basic-10.ttf") format("truetype"),url("../css/fonts/linea-basic-10.svg#linea-basic-10") format("svg");font-weight:normal;
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
</style>
