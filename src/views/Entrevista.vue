<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Diagnostico</ion-title>
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
                    <h2>Señor Empresario:</h2>
                    <h2>Por favor rellena todos los campos que estan a continuacion para realizar su diagnostico empresarial</h2>
                    <h3>Teniendo en cuenta que en este momento se lleva a cabo la el proyecto "ESTUDIO PARA IDENTIFICAR LAS CAPACIDADES TECNOLÓGICAS EN LAS PYMES DE LA VILLA DE SAN DIEGO DE UBATE”, hemos diseñado una serie de preguntas generales sobre las capacidades tecnológicas de su empresa, las cuales deberá responder con la mayor sinceridad posible. </h3>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                  <ion-form>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">¿A que sector económico pertenece su empresa?</ion-label>
                    <ion-input type="text" v-model="p1"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">¿Con cuantos computadores cuenta su compañía?</ion-label>
                    <ion-input type="text" v-model="p2"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">¿Su empresa ha definido formatos y procedimientos estándares para los procesos administrativos y de operación? Si/No</ion-label>
                    <ion-input type="text" v-model="p3"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">¿Con cuantos clientes su empresa logra el 70% de las ventas totales?</ion-label>
                    <ion-input type="text" v-model="p4"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">¿cuantos proveedores de materias primas tiene su compañía?</ion-label>
                    <ion-input type="text" v-model="p5"></ion-input>
                  </ion-item>
                </ion-list>
                  </ion-form>
                <ion-button expand="block" @click="registrar">Enviar</ion-button>
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
  name: "EntrevistaPage",
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
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      nit: "",
      err: "",
      eme: "",
    };
  },
  methods: {
    async registrar() {
        const aux= document.cookie
        const aux2 = aux.toString()
      const db = getFirestore(app);
      const docRef = doc(db, "datos", aux2);
      const docSnap = await getDoc(docRef)
          if (this.p1.length > 0 && this.p2.length > 0 && this.p3.length > 0 && this.p4.length > 0 && this.p5.length > 0) {
            setDoc(doc(db, "datos", aux2), {
                nit: aux2,
                sector: this.p1,
                número_de_computadores_de_la_empresa: this.p2,
                formatos_estandar: this.p3,
                Numero_clientes: this.p4,
                proveedor: this.p5,
            });
            this.p1 = "";
            this.p2 = "";
            this.p3 = "";
            this.p4 = "";
            this.p5 = "";
             router.push("/profile_Company");
             //console.log("registro exitoso");
      }
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
  },
});
</script>

<style>
</style>