/**
 * Created by felix on 17.02.16.
 */



// This code only runs on the client


Template.start.events({
    "submit .new-client": function (event) {
        event.preventDefault();

        Meteor.call("addClient");

        var text = event.target.text.value;

        Meteor.call("setName", text);

        event.target.text.value = "";

        Router.go('chat');
    }
});


window.onbeforeunload = function() {
    Meteor.call("removeClient");
};