function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return rawFile.responseText 
}

function loadCSV(url) {
    txt = readTextFile(url)
    return Papa.parse(txt, {
                header: true,
                skipEmptyLines: true
            }).data
}
