/**
 * The view for choosing and controlling a filter
 */
Maw.FiltersView = Ember.ContainerView.extend({

  childViews: [
    Maw.NoFilterView,
    Maw.LowpassFilterView,
    Maw.HighpassFilterView,
    Maw.BandpassFilterView,
    Maw.FilterControlsView
  ],

  didInsertElement: function() {
    var self = this;
    var childViews = this.get('childViews');
    childViews.forEach(function(childView) {
      childView.set('selectionManager', self);
    });
    childViews[0].set('selected', true);
  },

  select: function(target) {
    var filterChoices = this.get('model');
    if(target instanceof Maw.NoFilterView) filterChoices.selectByType("noFilter");
    else if(target instanceof Maw.LowpassFilterView) filterChoices.selectByType('lowPass');
    else if(target instanceof Maw.HighpassFilterView) filterChoices.selectByType('highPass');
    else if(target instanceof Maw.BandpassFilterView) filterChoices.selectByType('bandPass');

    var childViews = this.get('childViews');
    childViews.forEach(function(childView) {
      childView.set('selected', (childView===target));
    });


  }

});
