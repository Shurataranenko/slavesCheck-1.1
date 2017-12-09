import Crusovice from '../components/Crusovice/Crusovice.vue';
import Holsten from '../components/Holsten/Holsten.vue';
import Staropramen from '../components/Staropramen/Staropramen.vue';

export default [
   {
      path: '/', redirect: '/crusovice'
   },
   {
      path: '/crusovice',
      component: Crusovice
   },
   {
      path: '/holsten',
      component: Holsten
   },
   {
      path: '/staropramen',
      component: Staropramen
   }
];