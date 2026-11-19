// The song list. Add a line per song; the Song List page groups them by decade
// and visitors can search it. decade must be one of '60s', '70s', '80s', '90s'.

export interface Song {
  title: string;
  artist: string;
  decade: '60s' | '70s' | '80s' | '90s';
}

// Decade is when the version we play first came out (e.g. Van Halen's You Really Got Me is 70s).
export const songs: Song[] = [
  { title: 'Dead Flowers', artist: 'The Rolling Stones', decade: '70s' },
  { title: 'Bad Moon Rising', artist: 'Creedence Clearwater Revival', decade: '60s' },
  { title: 'The Weight', artist: 'The Band', decade: '60s' },
  { title: 'Into the Great Wide Open', artist: 'Tom Petty and the Heartbreakers', decade: '90s' },
  { title: 'Proud Mary', artist: 'Creedence Clearwater Revival', decade: '60s' },
  { title: 'Can\u2019t You See', artist: 'The Marshall Tucker Band', decade: '70s' },
  { title: 'It\u2019s Still Rock and Roll to Me', artist: 'Billy Joel', decade: '80s' },
  { title: 'Gimme Three Steps', artist: 'Lynyrd Skynyrd', decade: '70s' },
  { title: 'Come Together', artist: 'The Beatles', decade: '60s' },
  { title: 'Runnin\u2019 Down a Dream', artist: 'Tom Petty', decade: '80s' },
  { title: 'Rock and Roll', artist: 'Led Zeppelin', decade: '70s' },
  { title: 'The Boys Are Back in Town', artist: 'Thin Lizzy', decade: '70s' },
  { title: 'Hard to Handle', artist: 'The Black Crowes', decade: '90s' },
  { title: 'Tush', artist: 'ZZ Top', decade: '70s' },
  { title: 'Get Back', artist: 'The Beatles', decade: '60s' },
  { title: 'Take It Easy', artist: 'Eagles', decade: '70s' },
  { title: 'Amie', artist: 'Pure Prairie League', decade: '70s' },
  { title: 'While My Guitar Gently Weeps', artist: 'The Beatles', decade: '60s' },
  { title: 'One Way Out', artist: 'The Allman Brothers Band', decade: '70s' },
  { title: 'Takin\u2019 Care of Business', artist: 'Bachman-Turner Overdrive', decade: '70s' },
  { title: 'Ramblin\u2019 Man', artist: 'The Allman Brothers Band', decade: '70s' },
  { title: 'Communication Breakdown', artist: 'Led Zeppelin', decade: '60s' },
  { title: 'You Really Got Me', artist: 'Van Halen', decade: '70s' },
  { title: 'Surrender', artist: 'Cheap Trick', decade: '70s' },
  { title: 'Call Me the Breeze', artist: 'Lynyrd Skynyrd', decade: '70s' },
  { title: 'American Girl', artist: 'Tom Petty and the Heartbreakers', decade: '70s' },
  { title: 'Magic Carpet Ride', artist: 'Steppenwolf', decade: '60s' },
  { title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd', decade: '70s' },
  { title: 'Free Bird', artist: 'Lynyrd Skynyrd', decade: '70s' },
  { title: 'Remedy', artist: 'The Black Crowes', decade: '90s' },
  { title: 'After Midnight', artist: 'Eric Clapton', decade: '70s' },
  { title: 'All Right Now', artist: 'Free', decade: '70s' },
  { title: 'Already Gone', artist: 'Eagles', decade: '70s' },
  { title: 'Stay with Me', artist: 'Faces', decade: '70s' },
  { title: 'We\u2019re an American Band', artist: 'Grand Funk Railroad', decade: '70s' },
  { title: 'Mary Jane\u2019s Last Dance', artist: 'Tom Petty and the Heartbreakers', decade: '90s' },
  { title: 'Sunshine of Your Love', artist: 'Cream', decade: '60s' },
  { title: 'Long Cool Woman (in a Black Dress)', artist: 'The Hollies', decade: '70s' },
  { title: 'Free Fallin’', artist: 'Tom Petty', decade: '80s' },
  { title: 'The Joker', artist: 'Steve Miller Band', decade: '70s' },
  { title: 'Rockin’ in the Free World', artist: 'Neil Young', decade: '80s' },
  { title: 'Rebel Rebel', artist: 'David Bowie', decade: '70s' },
  { title: 'Young Lust', artist: 'Pink Floyd', decade: '70s' },
  { title: 'Wild Horses', artist: 'The Rolling Stones', decade: '70s' },
];
