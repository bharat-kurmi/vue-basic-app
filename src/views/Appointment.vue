<template>

    <div>

    <div v-if="errors" class="alert alert-danger">
        <ul v-for="(v, k) in errors" :key="k">
            <li v-for="error in v" :key="error">{{ error }}</li>
        </ul>
    </div>

    <div v-if="success" class="alert alert-success" role="alert">
      Gelukt! Je verzoek is verzonden. Je hebt ook een bevestiging van je verzoek gekregen per e-mail.
    </div>

        <div v-if="error" class="alert alert-danger" role="alert">
          {{ this.error }}
        </div>

      <ValidationObserver v-slot="{ invalid }" ref="appointmentForm">
          <b-form @submit.prevent="submit()">

              <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('object_id')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-10"
                          label-align="left"
                          label-for="input-10">
                          <template v-slot:label>{{ $t('object_id')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-10" v-model="appointment.object_id" :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-input>
                          <div class="float-left text-danger">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('name')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-10"
                          label-align="left"
                          label-for="input-10">
                          <template v-slot:label>{{ $t('name')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-10" v-model="appointment.name" :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-input>
                          <div class="float-left text-danger">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('appointment_at')" rules="required">
                   <b-form-group
                     id="fieldset-10"
                     label-align="left"
                     label-for="input-10">
                       <template v-slot:label>{{ $t('appointment_at')}} <span class="text-danger">*</span></template>
                          <VueCtkDateTimePicker
                            v-model="appointment.appointment_at"
                            :minDate="next" format="DD-MM-YYYY HH:MM"
                            :minute-interval="15"
                            :no-label="true"
                           />
                       </b-form-group>
                    </ValidationProvider>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('email')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-10"
                          label-align="left"
                          label-for="input-10">
                          <template v-slot:label>{{ $t('email')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-10" v-model="appointment.email" :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-input>
                          <div class="float-left text-danger">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
              </b-row>

                <b-row>
                    <b-col cols="12" sm="10">
                      <b-form-group
                      id="fieldset-12"
                      :label="$t('note')"
                      label-align="left"
                      label-for="input-12"
                        >
                      <b-form-textarea
                      id="textarea"
                      v-model="appointment.note"
                      rows="3"
                      max-rows="6"
                      ></b-form-textarea>
                      </b-form-group>
                    </b-col>
                </b-row>

            <b-button type="submit" variant="primary" :disabled="invalid" class="float-left">{{ $t('submit_appointment') }} </b-button>
          </b-form>
      </ValidationObserver>

</div>

</template>

<script>

import axios from "axios";
import moment from 'moment'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate/dist/vee-validate.full.esm';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// setting the error message dynamically
import en from 'vee-validate/dist/locale/en.json';
import nl from 'vee-validate/dist/locale/nl.json';
import i18n from "../i18n";
localize({
  en,
  nl
});
localize(i18n.locale);

export default {
  name: 'App',
  components: {
    VueCtkDateTimePicker,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
        user: null,
        appointment: {
            location_id: null,
            appointment_at: moment().add(2, 'days').format('DD-MM-YYYY HH:MM'),
            type: 1
        },
        errors: null,
        error: null,
        success: null,
        next: moment().add(2, 'days').format('YYYY-MM-DD HH:MM')
    }
  },

  mounted() {

       axios
        .get(process.env.VUE_APP_API_URL + 'iframe/' + this.$route.params.uuid)
        .then(response => {
         console.log(response.data)
         this.user = response.data.result
       })
        .catch(error => {
            if(error.response.status == 404) { // not found

                console.log('Not found')
            }

       })

  },
  methods: {
    async submit() {

        // check appointment form here
        const valid = await this.$refs.appointmentForm.validate();
        if (!valid ) {
          return;
        }

        this.appointment.uuid = this.$route.params.uuid
        //this.appointment.customer_number = 1

        // reset vars
        this.errors = ''
        this.success = ''
        this.error = ''

        axios
            .post(process.env.VUE_APP_API_URL + 'appointments', this.appointment, {headers: {'X-localization': 'nl'}})
            .then(response => {
                console.log(response)
                this.appointment = {}
                this.success = true
                this.$nextTick(() => {
                  this.$refs.appointmentForm.reset();
                });
            })
            .catch(error => {

            if(error.response.status == 422) {
                this.errors = error.response.data.errors;

             } else {

                // error.response.data.message write this in this.errors array
                this.error = error.response.data.message

             }


            })


    }
  }
}
</script>

