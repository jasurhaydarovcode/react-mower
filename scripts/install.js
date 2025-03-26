const figlet = require( 'figlet' );

(async () => {
    const chalk = (await import('chalk')).default;

    // Define gradients
    const gradients = [
        chalk.hex( '#00FF7F' ).bold,
        // chalk.hex('#FF4500').bold,
        // chalk.hex('#FF6347').bold,
        // chalk.hex('#FF7F50').bold,
        // chalk.hex('#FF8C00').bold,
        // chalk.hex('#FFA500').bold,
        // chalk.hex('#FFD700').bold,
        // chalk.hex('#FFFF00').bold,
        // chalk.hex('#ADFF2F').bold,
        // chalk.hex('#00CED1').bold,
    ];

    const renderGradientText = async ( text, gradientFunc ) => {
        return new Promise( ( resolve, reject ) => {
            figlet( text, ( err, data ) => {
                if ( err ) {
                    console.log( 'An error occurred' );
                    console.dir( err );
                    reject( err );
                    return;
                }

                console.log( gradientFunc( data ) );
                resolve();
            } );
        } );
    };

    // Log each gradient component
    for ( const gradientFunc of gradients ) {
        await renderGradientText( `React Mower`, gradientFunc );
    }

    console.log( chalk.cyan( 'Thank you for installing React Mower! ' +
        '\nhttps://github.com/jasurhaydarovcode/react-mower-docs' ) );
})();
