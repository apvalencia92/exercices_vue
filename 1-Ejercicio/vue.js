new Vue({
  el: "#app",
  data: {
    nombre: "",
    edad: "",
    sexo: "",
    isGenero: '',
    msn: "",
    formSubmitted: false
  },
  methods: {
    camposObligatorios: function() {
      return this.nombre != "" && this.edad != "" && this.sexo != "";
    },

    submitForm: function() {
        if(!this.camposObligatorios()) return;
        this.genderVerify;
        this.isGenero ? this.msn = 'Bienvenido' : this.msn = 'Bienvenida'
        this.formSubmitted = true 
    }
  },
  computed : {
    genderVerify : function(){
        if(this.sexo === 'Hombre'){
            this.isGenero = true
        }else{
            this.isGenero = false
        }
    }
  }

});
