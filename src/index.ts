import app from './app';

// starting the server
app.listen(app.get('port'), () => {
    console.log('server listening on port', app.get('port'));
});