/**
 * Created by felix on 09.03.16.
 */

Template.chat.helpers({
    messages: function () {
        return Messages.find({});
    }
});

Template.chat.events({
    "submit .new-msg": function (event) {
        event.preventDefault();

        var text = event.target.text.value;

        Meteor.call("addMsg", text);

        event.target.text.value = "";
    }
});
