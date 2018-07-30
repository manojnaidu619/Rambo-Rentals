import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      id: 'first',
      title: "The Hotel"
    }, {
      id: 'second',
      title: 'Royal mansion'
   }];
  }
});
