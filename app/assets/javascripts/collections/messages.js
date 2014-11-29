KS.Collections.Messages = Backbone.Collection.extend({
  url: 'api/messages',

  model: KS.Models.Message
});
