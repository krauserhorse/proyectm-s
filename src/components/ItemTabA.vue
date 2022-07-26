<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar selectedTab="tab1" slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="businessOutline" />
            <ion-label>Perfil</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="documentTextOutline" />
            <ion-label>Caracterización</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="readerOutline" />
            <ion-label>Resultados</ion-label>
          </ion-tab-button>

           <ion-tab-button tab="tab4" href="/tabs/tab4">
            <ion-icon :icon="trailSignOutline" />
            <ion-label>Mas Opciones</ion-label>
          </ion-tab-button>




        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue';
  import {exitOutline, trailSignOutline, readerOutline, documentTextOutline, businessOutline} from 'ionicons/icons';

  export default {
    name: 'TabA',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
    },
    setup() {
      return {
        exitOutline,
        trailSignOutline,
        readerOutline,
        documentTextOutline,
        businessOutline
        
      };
    },
  };
</script>
