<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registro</ion-title>
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
                    <h2>Registro</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">Nombre de la empresa</ion-label>
                    <ion-input type="text" v-model="usuario"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Direccion</ion-label>
                    <ion-input
                      type="text"
                      v-model="direccion"
                      placeholder=""
                    ></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Sector economico</ion-label>
                    <ion-input type="text" v-model="sector"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">NIT</ion-label>
                    <ion-input type="text" v-model="nit"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="contraseña"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="comparador">Registrar</ion-button>
                <ion-button expand="block" @click="login">Iniciar sesion</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="typescript">
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
  alertController,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  QuerySnapshot,
} from "firebase/firestore/lite";

import router from "@/router";
import app from "../dbfirebase/initFirebase";
import sha256 from "js-sha256";
export default defineComponent({
  name: "RegisterPage",
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
      usuario: "",
      direccion: "",
      sector: "",
      nit: "",
      contraseña: "",
      err: "",
      eme: "",
    };
  },
  methods: {
    async registrar() {
      const db = getFirestore(app);
      const docRef = doc(db, "usuarios", this.nit);
      const docSnap = await getDoc(docRef)
          if (this.usuario.length > 0 && this.direccion.length > 0 && this.sector.length > 0 && this.nit.length > 0) {
            setDoc(doc(db, "usuarios", this.nit), {
              usuario: this.usuario,
              direccion: this.direccion,
              sector: this.sector,
              nit: this.nit,
              contaseña: sha256.sha256(this.contraseña),
            });
            this.usuario = "";
            this.direccion = "";
            this.sector = "";
            this.nit = "";
            this.contraseña = "";
             router.push("/login");
             console.log("registro exitoso");
      }
    },
    login() {
      router.push("/login");
    },
    home() {
      router.push("/Home");
    },
    async errorLogin() {
      const alert = await alertController.create({
        header: "Error",
        message: "Usuario o email ya registrados",
        buttons: ["OK"],
        cssClass: "my-custom-class",
      });
      await alert.present();
    },
     async comparador(){
      const db =getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "usuarios"))
        var i = 0;
      querySnapshot.forEach((doc) => {
        if(doc.id==this.usuario){
          i++;
        }if(doc.data().nit==this.nit){
          i++;
        }
      })
        if(i==0){
          this.registrar()
          console.log("registro exitoso")
        }else{
          this.errorLogin();
        }
    } 
  },
});
</script>

<style>
</style>