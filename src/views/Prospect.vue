/* eslint-disable no-unused-vars */
<template>

    <div>

      <div v-if="success" class="alert alert-success" role="alert">
        Gelukt! Je verzoek is verzonden. Je hebt ook een bevestiging van je verzoek gekregen per e-mail.
      </div>

      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <ValidationObserver v-slot="{ invalid }" ref="prospectForm">
          <b-form @submit.prevent="submit()">
          <h5 class="text-left mb-3 mt-3"> {{ $t('personal_information') }} </h5>
            <b-row>

                <b-col cols="12" sm="3">
                    <ValidationProvider :name="$t('firstname')" rules="required|alpha" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-1"
                          label-align="left"
                          label-for="input-1">
                           <template v-slot:label>{{ $t('firstname')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-1" v-model="prospect.firstname" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>   
                </b-col>

                <b-col cols="12" sm="7">
                   <ValidationProvider :name="$t('lastname')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-2"
                          label-align="left"
                          label-for="input-2">
                           <template v-slot:label>{{ $t('lastname')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-2" v-model="prospect.lastname" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider> 
                </b-col>

            </b-row>

            <b-row>
                <b-col cols="12" sm="7">
                     <ValidationProvider :name="$t('street')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-3"
                          label-align="left"
                          label-for="input-3">
                           <template v-slot:label>{{ $t('street')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-3" v-model="prospect.street" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider> 
                </b-col>
                <b-col cols="12" sm="3">
                  <ValidationProvider :name="$t('number')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-4"
                          label-align="left"
                          label-for="input-4">
                           <template v-slot:label>{{ $t('number')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-4" v-model="prospect.number" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" sm="3">
                    <ValidationProvider :name="$t('zipcode')" rules="required|alpha_num" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-5"
                          label-align="left"
                          label-for="input-5">
                           <template v-slot:label>{{ $t('zipcode')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-5" v-model="prospect.zipcode" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>

                <b-col cols="12" sm="7">
                    <ValidationProvider :name="$t('city')" rules="required|alpha_num" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-6"
                          label-align="left"
                          label-for="input-6">
                           <template v-slot:label>{{ $t('city')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-6" v-model="prospect.city" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" sm="10">
                    <ValidationProvider :name="$t('email')" rules="required|email" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-7"
                          label-align="left"
                          label-for="input-7">
                           <template v-slot:label>{{ $t('email')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-7" v-model="prospect.email" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('phone')" rules="required|numeric" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-8"
                          label-align="left"
                          label-for="input-8">
                          <template v-slot:label>{{ $t('phone')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-8" v-model="prospect.phone" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>

          <h5 class="text-left mb-3 mt-3"> {{ $t('advanced_personal_information') }} </h5>
            <b-row>
                <b-col cols="12" sm="10">
                     <ValidationProvider :name="$t('object_type')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-9"
                          label-align="left"
                          label-for="input-9">
                          <template v-slot:label>{{ $t('object_type')}} <span class="text-danger">*</span></template>
                           <b-form-select
                           v-model="prospect.object_type_id"
                           :options="object_types"
                             value-field="id"
                             text-field="name"
                            :class="['form-control',  errors[0] ? 'is-invalid' : '']"
                          />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('brand')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-10"
                          label-align="left"
                          label-for="input-10">
                          <template v-slot:label>{{ $t('brand')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-10" v-model="prospect.brand" :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-input>
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="10">
                   <ValidationProvider :name="$t('type')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-12"
                          label-align="left"
                          label-for="input-12">
                          <template v-slot:label>{{ $t('type')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-11" v-model="prospect.type" :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-input>
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="10">
                    <ValidationProvider :name="$t('license_plate')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-15"
                          label-align="left"
                          label-for="input-15">
                           <template v-slot:label>{{ $t('license_plate')}} <span class="text-danger">*</span></template>
                           <b-form-input id="input-15" v-model="prospect.license_plate"
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" sm="5">
                     <ValidationProvider :name="$t('object_length')" :rules="{ required: true, regex: /^\d+(\,?\.?\d{1,2})?$/ }" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-4"
                          label-align="left"
                          label-for="input-4">
                          <template v-slot:label>{{ $t('object_length')}} <span class="text-danger">*</span></template>
                          <b-form-input id="input-4" v-model="prospect.length" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
                <b-col cols="12" sm="5">
                     <ValidationProvider :name="$t('object_width')"  
                        :rules="{ required: true, regex: /^\d+(\.?\,?\d{1,2})?$/ }" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-11"
                          label-align="left"
                          label-for="input-11">
                          <b-form-input id="input-11" v-model="prospect.width" 
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']" />
                          <template v-slot:label>{{ $t('object_width')}} <span class="text-danger">*</span></template>
                          <div class="float-left text-danger"> 
                            <span>{{ errors[0] }}</span>
                          </div>               
                        </b-form-group>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="5">
                   <ValidationProvider :name="$t('delivery_at')" rules="required" v-slot="{ errors }">
                        <b-form-group
                          id="fieldset-12"
                          label-align="left"
                          label-for="input-12">
                          <template v-slot:label>{{ $t('delivery_at')}} <span class="text-danger">*</span></template>
                          <b-form-datepicker id="example-datepicker" v-model="prospect.delivery_at" 
                          :placeholder="$t('choose_date')"
                          :class="['form-control',  errors[0] ? 'is-invalid' : '']"></b-form-datepicker>
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
                  v-model="prospect.note"
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
                  </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary" :disabled="invalid" class="float-left">{{ $t('submit_prospect') }} </b-button>
          </b-form>
      </ValidationObserver>

    </div>

</template>

<script>

import axios from "axios";
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate/dist/vee-validate.full.esm';
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
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
        user: null,
        prospect: {},
        errors: null,
        error: null,
        success: null,
        object_types: {}
    }
  },
  created() {

      // get object types
       axios.get(process.env.VUE_APP_API_URL + 'object_types')
       .then(response => {
         this.object_types = response.data.result
       })
       .catch(error => {
            if(error.response.status == 404) { // not found
                console.log('Not found')
            }
       })
  },
  mounted() {

      if(this.$route.params.uuid) {
          // find user with this uuid
          axios
            .get(process.env.VUE_APP_API_URL + 'iframe/' + this.$route.params.uuid)
            .then(response => {
                this.user = response.data.result
            })
            .catch(error => {
                if(error.response.status == 404) { // not found
                    console.log('Not found')
                }
            });
      }
  },
  methods: {
    async submit() {
        // check propect form here
        const valid = await this.$refs.prospectForm.validate();
        if (!valid ) {
          return;
        }

       this.prospect.uuid = this.$route.params.uuid;
        // reset vars
        axios
            .post(process.env.VUE_APP_API_URL + 'prospects', this.prospect)
            .then(response => {
                this.prospect = {};
                this.success = response.data.message;
                this.$nextTick(() => {
                  this.$refs.prospectForm.reset();
                });
            }).catch(error => {
                if(error.response.status == 422) {
                    this.errors = error.response.data.errors;
                } else {
                    this.error = error.response.data.message;
                }
        });
    }
  }
}
</script>