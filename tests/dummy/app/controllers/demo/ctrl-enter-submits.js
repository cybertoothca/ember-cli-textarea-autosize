import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    withSubmit(/*event*/) {
      window.alert('<form {{action "submitWithOn" on="submit"}}>');
      return false;
    },

    withOnSubmit(/*event*/) {
      window.alert('<form onsubmit={{action "submitWithOn"}}>');
      return false;
    }
  }
});
