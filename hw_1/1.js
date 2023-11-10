"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const Collection = {
  albums: [
    {
      title: "High voltage",
      artist: "AC / DC",
      year: 1975
    },
    {
      title: "Metallica through the never",
      artist: "Metallica",
      year: 2013
    },
    {
      title: "Herzeleid",
      artist: "Rammstein",
      year: 1995
    },
  ],
  [Symbol.iterator] (){
    let i = 0;
    const array = this.albums;
    return {       
        next() {
            return i < array.length ? {done: false, value: array[i++]} : {done: true};
        }
    }
  },
  consoleAlbums(){
    const arr = this.albums;
    for (const iter of arr){
      console.log(`"${iter.title}" - ${iter.artist} (${iter.year})`);
      
    }
  }
}

Collection.consoleAlbums();
