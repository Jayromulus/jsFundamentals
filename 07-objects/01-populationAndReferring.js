// Objects

// bjects store multiple caluues that are similar in structure. this is great for or js logic
// Objects can store mltiple deatatypes
// Denoted with { }

// example
let netflix = {
    id: 1,
    name: 'Super Store',
    seasons: {
        season1: {
            seasonInfo: {
                episodeInfo: [
                    {episode: 1, episodeName: "Pilot"},
                    {episode: 2, episodeName: "Magazine Profile"},
                    {episode: 3, episodeName: "Shots and Salsa"},
                    {episode: 4, episodeName: "Mannequin"},
                ]
            }
        },
        season2: {
            seasonInfo: {
                episodeInfo: [
                    {episode: 5, episodeName: "Shoplifter"},
                    {episode: 6, episodeName: "Secret Shopper"},
                    {episode: 7, episodeName: "Color Wars"},
                    {episode: 8, episodeName: "Weddig Day Sale"},
                    {episode: 9, episodeName: "All-Nighter"}
                ]
            }
        },
        season3: {
            seasonInfo: {
                episodeInfo: [
                    {episode: 10, episodeName: "Demotion"},
                    {episode: 11, episodeName: "Labor"}
                ]
            }
        }
    }
};
// Dot Notation
// console.log("all the data", netflix)
// console.log('Just season info ', netflix.seasons.season1.seasonInfo)]
// console.log('Episode Name: ', netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName);

console.log('Episode: ', netflix.seasons.season2.seasonInfo.episodeInfo[3].episode, ' || Episode Name: ', netflix.seasons.season2.seasonInfo.episodeInfo[3].episodeName);