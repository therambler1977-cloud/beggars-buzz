// The song list. Add a line per song; the Song List page groups them by decade
// and visitors can search it. decade must be one of '60s', '70s', '80s', '90s'.

export interface Song {
  title: string;
  artist: string;
  decade: '60s' | '70s' | '80s' | '90s';
}

// TODO: replace this sample list with the band's real songs.
export const songs: Song[] = [
  { title: 'Satisfaction', artist: 'The Rolling Stones', decade: '60s' },
  { title: 'Born to Be Wild', artist: 'Steppenwolf', decade: '60s' },
  { title: 'Proud Mary', artist: 'Creedence Clearwater Revival', decade: '60s' },
  { title: 'Gimme Three Steps', artist: 'Lynyrd Skynyrd', decade: '70s' },
  { title: 'Takin’ Care of Business', artist: 'Bachman-Turner Overdrive', decade: '70s' },
  { title: 'Hold On Loosely', artist: '.38 Special', decade: '80s' },
  { title: 'Jessie’s Girl', artist: 'Rick Springfield', decade: '80s' },
  { title: 'Hard to Handle', artist: 'The Black Crowes', decade: '90s' },
  { title: 'Hey Jealousy', artist: 'Gin Blossoms', decade: '90s' },
];
