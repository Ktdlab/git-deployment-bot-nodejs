var gith = require('gith').create( 8080 );
var exec = require('child_process').execFile;

gith({
    repo: 'Username/Repo' // Change Username/Repo.
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            
            exec("whoami ; git pull ; git status ; git submodule sync ; git submodule update; git submodule status", function(error, stdout, stderr) { 
                    console.log( 'exec complete' );
            });
    }
});
