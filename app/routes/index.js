import Ember from 'ember';

//a method within an Ember class is called a hook
export default Ember.Route.extend({
  model() { // this is referred to as a model hook
    return this.store.findAll('rental');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
