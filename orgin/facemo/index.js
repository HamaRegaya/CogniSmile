const Web = require( "webwebweb" );
const fs = require( "fs" );
Web.APIs[ "/data" ] = ( qs, body, opts ) => {
    let data = {};
    [ "angry", "disgust", "fear", "happy", "neutral", "sad", "surprise" ]
        .forEach( emotion => {
            data[ emotion ] = fs.readdirSync( `web/fer2013/train/${emotion}` )
                .map( x => `web/fer2013/train/${emotion}/${x}` );
        });
    return data;
};
Web.Run( 8080 );
