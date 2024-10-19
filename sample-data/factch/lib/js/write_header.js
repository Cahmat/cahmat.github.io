// Function to write the header of HTML page
function writeHeader(participant_task) {
    document.write('\
    <!DOCTYPE html>\
    <html>\
      <head>\
        <title>' + participant_task + '</title>\
      </head>\
      <body>\
          <div id="webbodyDiv"></div>\
      </body>\
    </html>\
  ')
}
