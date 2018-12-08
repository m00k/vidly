// retrieve a value from a deep path, e.g. movie.genre.name
export default function getFromPath(obj, path) {
  return path
    .split('.')
    .reduce((a, b) => a[b], obj);
}