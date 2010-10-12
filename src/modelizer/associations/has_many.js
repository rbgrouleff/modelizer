Modelizer.Associations.HasMany = function(klass, association_name, options) {
  var self = this;
  options = options || {};
  
  this.childClass = function() {
    var klass_name = options.class_name || association_name.classify();
    return window[klass_name];
  };
  
  klass.prototype[association_name] = function() {
    var foreign_key = klass.klass_name.underscore() + '_id';
    var options = {}
    options[foreign_key] = this.get('id');
    return self.childClass().where(options);
  };
  
  this.name = function() {
    return association_name;
  };
};
$.extend(Modelizer.Associations.HasMany.prototype, Modelizer.Associations.Base);