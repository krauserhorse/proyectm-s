<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>M-S</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-label>
                    <h2>Iniciar sesion</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    
                    <ion-label position="floating">NIT</ion-label>
                    <ion-input type="text" v-model="nit"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="contraseña"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="login">Iniciar Sesion</ion-button>
                <ion-button expand="block" @click="Register">Registrar</ion-button>
              </ion-card-content>
              {{ passIncorrect }}
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import router from "@/router";
import "@/dbfirebase/initFirebase";
import app from "../dbfirebase/initFirebase";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import ProfilePage from "@/views/ProfilePage.vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCardTitle,
  IonCardHeader,
  IonItem,
  IonList,
  IonButton,
  IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonInput,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import sha256 from "js-sha256";
export default defineComponent({


  name: "LoginLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
    IonBackButton,
  },
  data() {
    return {
      nit: "",
      contraseña: "",
      passIncorrect: "",
      sesion: "",
      cookie: "",
    };
  },
  methods: {
// el metodo register es un boton que permite el redireccionamiento del usuario a la pagina de register.
    Register() {
      router.push("/Register");
    },
//el metodo home redirecciona al usuario a la pantalla principal
    home() {
      router.push("/Home");
    },
    async login() {
      const db = getFirestore(app);
      const docRef = doc(db, "usuarios", this.nit);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const contraseña = docSnap.data();
        const comparar = sha256.sha256(this.contraseña);

        if (comparar == contraseña.contaseña) {
          //enviar nit a perfil.vue
          this.sesion = this.nit;
          router.push("/tabs/");

        } else {
          this.passIncorrect = "Contraseña incorrecta";
        }
          document.cookie = this.nit;
      } else {
        this.passIncorrect = "Datos erroneos";
        console.log("No such document!");
      }
    },
    //document do cookie
    


  },
});

</script>
<style scoped>
</style>
