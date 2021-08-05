var gith = require('gith').create( 8080 );
var execFile = require('child_process').execFile;

gith({
    repo: 'Username/Repo' // Change Username/Repo.
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/path/to/script.sh', function(error, stdout, stderr) { // Change /path/to/script.sh to path of script
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
    }
});
