var paymentprofileSchema = new Schema({
  id: Number, //id: 123456
  profile_id: Number, // profile_id:123456
  type: String, //type: 'card'
  exp_month: String, //exp_month:'07'
  exp_year: String, //exp_year:'2010'
  number: Number, //number:123456
  country: String, //country: 'BR'
  currency: String, //currency: 'brl'
  payment_processor:{
    Stripe: {
      onboarded: Boolean, //onboarded: true
      capability: {
        collection: Boolean, //collection: true
        disbursement: Boolean //disbursement: true
      },
      account_id: Number //account_id: 123456
    },
    Greendot: {
      onboarded: Boolean, //onboarded: false
      capability: {
        collection: Boolean, //collection: false
        disbursement: Boolean //disbursement: false
      },
      account_id: Number //account_id: null
    }
  }
});

var paymentprofile = mongoose.model('payment_profile', paymentprofileSchema);
