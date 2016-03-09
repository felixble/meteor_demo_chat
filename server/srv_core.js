var lastClientId = 0;

function getNewClientId() {
    return "User " +  lastClientId++;
}

Meteor.methods({
    addClient: function () {
        if (Clients.findOne({_id: this.connection.id}) != null)
            return;

        var identifier = getNewClientId();
        var newClient = {_id: this.connection.id,identifier: identifier, createdAt: new Date()};
        Clients.insert(newClient);
    },
    setName: function (name) {
        Clients.update(this.connection.id, {
            $set: {identifier: name}
        });
    },
    removeClient: function () {
        var user = Clients.findOne({_id: this.connection.id});
        Messages.remove({user: user});
        Clients.remove(this.connection.id);
    },
    addMsg: function(text) {
        var user = Clients.findOne({_id: this.connection.id});
        var msg = {text: text, user: user, uid: this.connection.id};
        Messages.insert(msg);
    }
});