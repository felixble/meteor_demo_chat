/**
 * Created by felix on 17.02.16.
 */

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render('start');
});


Router.route('/chat', function () {
    this.render('chat');
});

