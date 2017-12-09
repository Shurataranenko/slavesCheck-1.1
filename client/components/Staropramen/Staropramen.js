export default {
    data () {
       return {
          beer: 'Staropramen',
          pros: [],
          cons: []
       }
    },
    mounted () {
       const vm = this;
       this.$http.get('/data')
       .then(data => {
          vm.pros = data.pros;
          vm.cons = data.cons;
       })
       .catch(err => {
          console.log(err);
       });
    },
    computed: {
       totalPros() {
          return this.pros.reduce((total, pro) => total + pro.value, 0);
       },
       totalCons() {
          return this.cons.reduce((total, con) => total + con.value, 0);
       },
       overall() {
          return this.totalPros - this.totalCons;
       }
    },
    filters: {
       capitalize: function (value) {
          if (!value) {
             return '';
          }
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
       }
    }
 }