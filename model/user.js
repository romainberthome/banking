var profileSchema = new Schema({
  id: Number, //id: 123456
  type: String, //type: 'individual'
  first_name: String, //first_name: 'romain'
  last_name: String, //last_name: 'Berthome'
  persona_id_number: Number, //persona_id_number: '123456'
  email: String, //email: 'romain@gmail.com'
  password: String, //password: 'qwerty'
  dod:{
    day: Number, //day: 01
    month: Number, //month: 01
    year: Number //year: 1989
  },
  address:{
    line1: String, //line1: 'blabla'
    postal_code: String, //postal_code:'2452'
    city: String, //city: 'Rio de janeiro'
    state: String, //state: 'test'
    country: String //country: 'Brazil'
  },
  payment_profile: [paymentprofileSchema]
});

var profile = mongoose.model('profile', profileSchema);






"id": string, //"acct_1032D82eZvKYlo2C"
 "object": string, //"account"
 "business_profile": {
   "mcc": null,
   "name": "Stripe.com",
   "product_description": null,
   "support_address": null,
   "support_email": null,
   "support_phone": null,
   "support_url": null,
   "url": null
 },
 "business_type": null,
 "charges_enabled": false,
 "country": "US",
 "created": 1385798567,
 "default_currency": string, //"usd",
 "details_submitted": false,
 "email": string, //"bob@example.com",
 "external_accounts": {
   "object": string, //"list",
   "data": [],
   "has_more": false,
   "total_count": 0,
   "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
 },
 "metadata": {},
 "payouts_enabled": false,
 "requirements": {
   "current_deadline": null,
   "currently_due": [
     "business_type",
     "business_url",
     "company.address.city",
     "company.address.line1",
     "company.address.postal_code",
     "company.address.state",
     "person_8UayFKIMRJklog.dob.day",
     "person_8UayFKIMRJklog.dob.month",
     "person_8UayFKIMRJklog.dob.year",
     "person_8UayFKIMRJklog.first_name",
     "person_8UayFKIMRJklog.last_name",
     "product_description",
     "support_phone",
     "tos_acceptance.date",
     "tos_acceptance.ip"
   ],
   "disabled_reason": "requirements.past_due",
   "eventually_due": [
     "business_url",
     "product_description",
     "support_phone",
     "tos_acceptance.date",
     "tos_acceptance.ip"
   ],
   "past_due": []
 },
 "settings": {
   "branding": {
     "icon": null,
     "logo": null,
     "primary_color": null
   },
   "card_payments": {
     "decline_on": {
       "avs_failure": true,
       "cvc_failure": false
     }
   },
   "dashboard": {
     "display_name": "Stripe.com",
     "timezone": "US/Pacific"
   },
   "payments": {
     "statement_descriptor": ""
   },
   "payouts": {
     "debit_negative_balances": true,
     "schedule": {
       "delay_days": 7,
       "interval": "daily"
     },
     "statement_descriptor": null
   }
 },
 "tos_acceptance": {
   "date": null,
   "ip": null,
   "user_agent": null
 },
 "type": "custom",
 "keys": {
   "secret": "sk_test_VUEtgCS1fO1mYvYi63i0oSsp",
   "publishable": "pk_test_KpUdvOXBDG8OuzHFDqHZH421"
 }
}
