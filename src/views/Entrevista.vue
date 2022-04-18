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
                      <ion-label>1. Sector economico al que pertenece su empresa</ion-label>
                    <h1>{{sector}}</h1>
                <ion-radio-group>
                    <ion-item>
                        <ion-label>Ganaderia</ion-label>
                        <ion-radio value="Ganaderia" v-model="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Mineria de Carbón</ion-label>
                        <ion-radio value="Carbon" v-model="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Comercio</ion-label>
                        <ion-radio value="Comercio" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Arcillas</ion-label>
                        <ion-radio value="Arcillas" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Grava</ion-label>
                        <ion-radio value="Grava" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Cuero y/o calzado</ion-label>
                        <ion-radio value="Cuero o calzado" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Artefactos domesticos</ion-label>
                        <ion-radio value="Artefactos domesticos" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Equipo y Maquinaria electrica y electronica</ion-label>
                        <ion-radio value="Equipo y Maquinaria electrica y electronica" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Lacteos</ion-label>
                        <ion-radio value="Lacteos" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Convenio software y servicios asociados</ion-label>
                        <ion-radio value="Convenio software y servicios asociados" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Servicios de salud</ion-label>
                        <ion-radio value="Servicios de salud" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Financiero</ion-label>
                        <ion-radio value="Financiero" v-bind="sector"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Telecomunicaciones</ion-label>
                        <ion-radio value="Telecomunicaciones" v-bind="sector"></ion-radio>
                    </ion-item>
                </ion-radio-group>
                    <ion-label>2.Por favor indique el sector económico objetivo de su actividad principal</ion-label>
                    <ion-radio-group>
                    <ion-item>
                        <ion-label>Ganaderia</ion-label>
                        <ion-radio value="Ganaderia" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Mineria de Carbón</ion-label>
                        <ion-radio value="Carbon" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Comercio</ion-label>
                        <ion-radio value="Comercio" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Arcillas</ion-label>
                        <ion-radio value="Arcillas" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Grava</ion-label>
                        <ion-radio value="Grava" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Cuero y/o calzado</ion-label>
                        <ion-radio value="Cuero o calzado" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Artefactos domesticos</ion-label>
                        <ion-radio value="Artefactos domesticos" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Equipo y Maquinaria electrica y electronica</ion-label>
                        <ion-radio value="Equipo y Maquinaria electrica y electronica" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Lacteos</ion-label>
                        <ion-radio value="Lacteos" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Convenio software y servicios asociados</ion-label>
                        <ion-radio value="Convenio software y servicios asociados" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Servicios de salud</ion-label>
                        <ion-radio value="Servicios de salud" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Financiero</ion-label>
                        <ion-radio value="Financiero" v-model="objetivo"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Telecomunicaciones</ion-label>
                        <ion-radio value="Telecomunicaciones" v-model="objetivo"></ion-radio>
                    </ion-item>
                </ion-radio-group>
                  <ion-item>
                      <ion-label position="floating">3.	Por favor escriba de que sector económico provienen los insumos para su actividad productiva o económica.</ion-label>
                      <ion-input type="text" v-model="proovedor"></ion-input>
                      </ion-item>
                      <ion-label>4. Indique el rango de ingresos anuales de su empresa a partir de la actividad productiva o economica.</ion-label>
                    <ion-radio-group>
                        <ion-item>
                          <ion-label>inferiores a $500 millones de pesos anuales</ion-label>
                          <ion-radio value="inferiores a $500 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                        <ion-item>
                          <ion-label>entre $500 millones de pesos anuales y $1000 millones de pesos anuales</ion-label>
                          <ion-radio value="entre $500 millones de pesos anuales y $1000 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                        <ion-item>
                          <ion-label>entre $1001 millones de pesos anuales y $5000 millones de pesos anuales</ion-label>
                          <ion-radio value="entre $1001 millones de pesos anuales y $5000 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                        <ion-item>
                          <ion-label>entre $5001 millones de pesos anuales y $10.000 millones de pesos anuales</ion-label>
                          <ion-radio value="entre $5001 millones de pesos anuales y $10.000 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                        <ion-item>
                          <ion-label>entre $10.001 millones de pesos anuales y $20.000 millones de pesos anuales</ion-label>
                          <ion-radio value="entre $10.001 millones de pesos anuales y $20.000 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                        <ion-item>
                          <ion-label>Más de $20.001 millones de pesos anuales</ion-label>
                          <ion-radio value="Más de $20.001 millones de pesos anuales" v-model="ingresos"></ion-radio>
                        </ion-item>
                    </ion-radio-group>
                      <ion-label>5.	Cual es el producto final de su empresa:</ion-label>
                      <ion-radio-group>
                          <ion-item>
                            <ion-label>Materia prima para otras empresas</ion-label>
                            <ion-radio value="Materia prima para otras empresas" v-model="producto"></ion-radio>
                            </ion-item>
                            <ion-item>
                            <ion-label>Producto semiterminado para otras empresas</ion-label>
                            <ion-radio value="Producto semiterminado para otras empresas" v-model="producto"></ion-radio>
                            </ion-item>
                            <ion-item>
                            <ion-label>Producto terminado para usuarios finales o canales de distribucion</ion-label>
                            <ion-radio value="Producto terminado para usuarios finales o canales de distribucion" v-model="producto"></ion-radio>
                            </ion-item>
                            <ion-item>
                            <ion-label>Servicios</ion-label>
                            <ion-radio value="Servicios" v-model="producto"></ion-radio>
                            </ion-item>
                      </ion-radio-group>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <!-- <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item>
                  <ion-item><ion-label position="floating">Nombre de la empresa</ion-label><ion-input type="text" v-model="usuario"></ion-input></ion-item> -->
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
    IonRadio, 
  IonRadioGroup
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
      IonRadio, 
  IonRadioGroup
  },
  data() {
    return {
      sector: "",
      objetivo: "",
      proovedor: "",
      ingresos: "",
      producto: "",
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
          if (this.objetivo.length > 0 && this.sector.length > 0 && this.proovedor.length > 0 && this.ingresos.length > 0 && this.producto.length > 0) {
            setDoc(doc(db, "datos", aux2), {
                nit: aux2,
                sector: this.sector,
                objetivo: this.objetivo,
                proovedor: this.proovedor,
                ingresos: this.ingresos,
                producto: this.producto,
            });
            this.sector = "";
            this.objetivo = "";
            this.proovedor = "";
            this.ingresos = "";
            this.producto = "";
             //router.push("/profile");
             console.log("registro exitoso");
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