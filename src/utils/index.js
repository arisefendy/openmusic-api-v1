/* eslint-disable camelcase */
const mapAlbumsDB = ({ id, name, year }, song) => ({
  id,
  name,
  year,
  songs: song,
});

const mapSongsDB = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
});

module.exports = { mapAlbumsDB, mapSongsDB };
