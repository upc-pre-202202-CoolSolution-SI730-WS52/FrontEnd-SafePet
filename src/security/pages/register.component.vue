<template>

  <div class="navigation-container">
    <pv-toolbar>
      <template #start>
        <div class="navigation-container-left flex align-items-center">
          <img class="logo" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/logo.png" alt="logo" />
          <h1 class="logo-text ml-3">SafePet</h1>
        </div>
      </template>
    </pv-toolbar>
  </div>


    <div class="register">
    <pv-dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
        <h5>Registration Successful!</h5>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <pv-button label="OK" @click="this.showMessage=false" class="p-button-text" />
        </div>
      </template>
    </pv-dialog>


      <div class="cardo">
    <div class="flex justify-content-center">
      <div class="card">
       <br> <h5 class="text-center">Register</h5>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">

          <div class="field">
            <div class="p-float-label">
              <pv-input-text id="name" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
              <label for="name" :class="{'p-error':v$.name.$invalid && submitted}">Name*</label>
            </div>
            <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
          </div>



          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <pv-input-text id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
              <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
            </div>
            <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                            <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-password id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{sp.level}}
                  <pv-divider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </pv-password>
              <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Password*</label>
            </div>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-calendar id="date" v-model="date" :showIcon="true" />
              <label for="date">Birthday</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-dropdown id="country" v-model="role" :options="roles" optionLabel="name" />
              <label for="country">Role</label>
            </div>
          </div>

          <div class="field">
            <div class="p-float-label">
              <pv-input-text id="phone" v-model="v$.phone.$model" :class="{'p-invalid':v$.phone.$invalid && submitted}" />
              <label for="name" :class="{'p-error':v$.phone.$invalid && submitted}">Phone*</label>
            </div>
            <small v-if="(v$.phone.$invalid && submitted) || v$.phone.$pending.$response" class="p-error">{{v$.phone.required.$message.replace('Value', 'Phone')}}</small>
          </div>

          <div class="field-checkbox">
            <pv-checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
            <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
          </div>
          <div class="toLogin">
            <label >Do you already have an account?<a  @click="$router.push(`/`)"> Login</a></label>

          </div>

          <pv-button type="submit" label="Register" class="mt-2"  />
        </form>
      </div>
    </div>
   </div>
  </div>




</template>

<script>
import { reactive, ref} from 'vue';
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import {UsersServices} from "../services/users.services";



export default {
  name: "register.component",

  setup() {


    const state = reactive({
      name: '',
      email: '',
      password: '',
      phone:'',
      accept: null,
    });

    const rules = {
      name: { required },
      email: { required, email },
      phone: { required },
      password: { required },
      accept: { required }
    };


    const submitted = ref(false);
    const showMessage = ref(false);
    const date = ref(false);
    const role = ref(false);

    const v$ = useVuelidate(rules, state);


    return { state, v$, submitted, showMessage, date, role,
      roles: [
        {name: 'Pet Owner'},
        {name: 'Vet'}
      ]

    }

  },
  methods:{

    handleSubmit(isFormValid){
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.showMessage = !this.showMessage;

      if(this.showMessage===true) {

        new UsersServices().createUser(String(this.state.email),String(this.state.password), String(this.role.name) ).then((response) => {});


        this.state.name = '';
        this.state.email = '';
        this.state.password = '';
        this.date = null;
        this.role = null;
        this.state.phone = '';
        this.state.accept = null;
        this.submitted = false;

      }
    },







    aa(){

      //new UsersServices().createUser()

      console.log(this.state.name)
      console.log(new Date(this.date).toLocaleDateString());
      console.log(this.role.name)
    }
  }
}
</script>

<style scoped>

.register{
  margin-top: 40px;

}
.register .card {
  min-width: 450px;

}
.register .card form {
  margin-top: 2rem;
}
.register .card .field {
  margin-bottom: 1.5rem;
}
@media screen and (max-width: 960px) {
  .register .card {
    width: 80%;
  }
}




.navigation-container-left {
margin-left: 280%
}

.navigation-container {
  width: 100%;
  margin: 0 auto;
}
.logo {
  height: 90px;
}


.cardo {
  font-family: "Lato", sans-serif;
  position: relative;
  width: 500px;
  height: 600px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-left: 35%;
  margin-bottom: 20px;
  margin-top: 10px;
}

.cardo h5{
  font-size: 20px;
}
.toLogin{
  display:flex;
  align-items: center;
  justify-content: center;
}

.toLogin a{
  color: #00a641;
}

.toLogin a:hover{
  cursor:pointer;
}

</style>