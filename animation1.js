/*this is the javascript file use in youtube API*/
    var API_KEY="AIzaSyDAaMrRQAldRP8D5e4Su8noAeZTIJ99LU4"

    var video=''

    

    function bridgepose(pose,maxresults){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&type=video&part=snippet&maxresults="+ maxresults+"&q="+pose,function(data){
            console.log(data) 
            $("#video").empty()
            data.items.forEach(item => {
                video=`
                <iframe width="400" height="250" src="https://www.youtube.com/embed/${item.id.videoId}"frameborder="0" allowfullscreen></iframe>
                
                `
                $("#video").append(video)
            });
        })
        
    }
