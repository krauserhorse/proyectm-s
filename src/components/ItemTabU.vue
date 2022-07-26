<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>M-S</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/profile"></ion-back-button>
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
                      <img src="../images/jake-bacon.gif">
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
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
  IonImg
} from "@ionic/vue";
import { defineComponent } from "vue";
//import AccountInfo from "../views/Login.vue";
//import {  getFirestore,  collection,  getDocs,  doc,  setDoc,  getDoc,  QuerySnapshot,} from "firebase/firestore/lite";
import router from "@/router";
import app from "../dbfirebase/initFirebase";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
export default defineComponent({
    name: "JakePage",
    components: {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonBackButton,
      },        
    data() {
        return {
        nit: "",
        usuario: "",
        direccion: "",
        sector: "",
        sesion: "",
        };
    },
    methods:{
      //print cookie
      async mostrar(){
        const aux = document.cookie;
        const aux2 = aux.toString();
        console.log(aux2);

          const db = getFirestore(app);
          const docRef = doc(db, "usuarios", aux2);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.nit = docSnap.data().nit;
            this.usuario = docSnap.data().usuario;
            this.direccion = docSnap.data().direccion;
            this.sector = docSnap.data().sector;
            this.sesion = docSnap.data().sesion;
            console.log(docSnap.data());
          } else {
            console.log("No such document!");
          }
        //console.log(document.cookie);

      },
      entrevistar(){
        router.push("/entrevista");
      },
    }
}); 
</script>

<style>

</style>
