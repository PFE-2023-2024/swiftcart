class MediaConverter {
    static async convertUrlToFile(mediaUrl, fileName, mimeType) {
      try {
        const response = await fetch(mediaUrl);
        if (!response.ok) throw new Error('Network response was not ok.');
        const mediaBlob = await response.blob();
        const mediaFile = new File([mediaBlob], fileName, { type: mimeType || mediaBlob.type });
  
        return mediaFile;
      } catch (error) {
        console.error('Error converting media URL to File:', error);
        return null;
      }
    }
    static arrayMoveImmutable(array, fromIndex, toIndex) {
      const arrayCopy = [...array]; // Create a copy of the array to avoid mutation
      const startIndex = fromIndex < 0 ? arrayCopy.length + fromIndex : fromIndex;
      if (startIndex >= 0 && startIndex < arrayCopy.length) {
        const endIndex = toIndex < 0 ? arrayCopy.length + toIndex : toIndex;
        const [item] = arrayCopy.splice(startIndex, 1);
        arrayCopy.splice(endIndex, 0, item);
      }
      return arrayCopy;
    }

    static determinerTypeDeLien(url) {
      // Regex pour détecter l'extension de fichier dans l'URL
      const patternExtension = /\.(jpg|jpeg|png|gif|bmp|webp|mp4|avi|mov|wmv|flv)$/i;
      const matchExtension = url.match(patternExtension);
    
      if (matchExtension) {
        if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(matchExtension[1].toLowerCase())) {
          return 'image';
        } else if (['mp4', 'avi', 'mov', 'wmv', 'flv'].includes(matchExtension[1].toLowerCase())) {
          return 'video';
        }
      }
    
      // Regex pour détecter des liens de vidéo populaires sans extension spécifique
      const patternVideoSites = /youtube\.com|vimeo\.com|dailymotion\.com|youtu\.be/i;
      if (patternVideoSites.test(url)) {
        return 'video';
      }
    
      // Retourne 'inconnu' si l'URL ne correspond à aucun motif connu
      return 'inconnu';
    }
    
  }
  
  
  export default MediaConverter;
  