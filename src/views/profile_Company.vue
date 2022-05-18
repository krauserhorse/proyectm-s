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
                    <h2>Perfil empresarial</h2>
                    <h2>NIT: {{ nit }}</h2>
                    <h2>Direccion: {{ direccion }}</h2>
                    <h2>Sector economico: {{ sector }}</h2>
                    <h2>Nombre de la empresa: {{ usuario }}</h2>
                    <h2>Sector: {{ p1 }}</h2>
                    <h2>Número de computadores de la empresa: {{ p2 }}</h2>
                    <h2>{{ p3 }}, posee formatos estandar de procesos administrativos.</h2>
                    <h2>{{ p4 }} clientes, son necesarios para suplir los gastos empresariales</h2>
                    <h2>{{ p5 }} proveedores suplen su empresa</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-button expand="block" @click="mostrar">analizar</ion-button>
                  <ion-button expand="block" @click="entrevistar">Entrevista</ion-button>
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
  IonButton,
  IonList,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
//import AccountInfo from "../views/Login.vue";
//import {  getFirestore,  collection,  getDocs,  doc,  setDoc,  getDoc,  QuerySnapshot,} from "firebase/firestore/lite";
import router from "@/router";
import app from "../dbfirebase/initFirebase";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
export default defineComponent({
    name: "ProfileCompanyPage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonLabel,
        IonCardTitle,
        IonButton,
        IonList,
        IonCardHeader,
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
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
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
        const docRef1 = doc(db, "datos", aux2);
        const docSnap1 = await getDoc(docRef1);
        if (docSnap1.exists()) {
          this.p1 = docSnap1.data().sector;
          this.p2 = docSnap1.data().número_de_computadores_de_la_empresa;
          this.p3 = docSnap1.data().formatos_estandar;
          this.p4 = docSnap1.data().Numero_clientes;
          this.p5 = docSnap1.data().proveedor;
          console.log(docSnap1.data());
        } else {
          console.log("No such document!");
        }

      },
      entrevistar(){
        router.push("/entrevista");
      },
    }
}); 
</script>

<style>

</style>