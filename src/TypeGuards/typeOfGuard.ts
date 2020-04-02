export namespace TypeOfGuard {
   class Song {
        constructor(public title: string, public duration: string | number){}
   }

   function getSongDuration(item: Song){
       if (typeof item.duration === 'string'){
           return item.duration;
       }

       const {duration} = item;
       const minutes = Math.floor(duration / 60);
       const seconds = duration - minutes * 60;


       return `${minutes}:${seconds}`;
   }

   const sondDurationFromString = getSongDuration(
        new Song('Wonderful Wonderful', '05:31')
   );

   const sondDurationFromNumber = getSongDuration(
    new Song('Wonderful Wonderful', 185)
    );

    console.log(sondDurationFromString);
    console.log(sondDurationFromNumber);
}