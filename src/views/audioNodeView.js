/**
 * Superclass for all audio node views
 */
Maw.AudioNodeView = Ember.View.extend({

  tagName: 'img',

  classNames: ['node'],

  classNameBindings: ['selected'],

  attributeBindings: ['src', 'alt', 'draggable'],

  src:'',
  alt:'wave',

  selected: false,

  selectionManager: null,

  click: function() {
    var selectionManager = this.get('selectionManager');
    if(selectionManager) selectionManager.select(this);
  }

// guess we're not doing drag and drop for now...
//  draggable:true,
//
//  didInsertElement: function(){
//
//    function handleDragStart() {
//      this.style.opacity = '0.4';
//    }
//
//    this.get('element').addEventListener('dragstart', handleDragStart, false);
//
//  }



});
