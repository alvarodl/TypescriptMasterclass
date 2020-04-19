export namespace InstanceOfGuard {
    class Song {
         constructor(public title: string, public duration: string | number){}
    }

    class Playlist {
        constructor(public name: string, public songs: Song[]){}
    }
 
    function getItemName(item: Song | Playlist){
        if (item instanceof Song){
            return item.title;
        }
        return item.name;
    }
   
    const songName = getItemName(
         new Song('Wonderful Wonderful', 300000)
    );
 
    const playlistName = getItemName(
     new Playlist('The Best Songs', [new Song('The Man', 300000)])
     );
 
     console.log(songName);
     console.log(playlistName);
 }