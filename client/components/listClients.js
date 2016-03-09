/**
 * Created by felix on 09.03.16.
 */
Template.listClients.helpers({
    clients: function () {
        return Clients.find({});
    }
});