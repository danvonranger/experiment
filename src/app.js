/*
async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);

    return await response.json();
}
*/
import { exec } from 'child_process';
const magnet = `magnet:?xt=urn:btih:e180c3014fbf70f1cc1ebad55c9f9e4e6c43895d&dn=Into+The+Badlands+S02E07720p+WEB+x264-%5BMULVAcoded%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969`;
var child = exec('Tixati.exe ' + magnet, function( error, stdout, stderr) 
   {
       if ( error != null ) {
            console.log(stderr);
            // error handling & exit
       }

       // normal 

   });

getData().then((data) => console.log('DATA',data));
