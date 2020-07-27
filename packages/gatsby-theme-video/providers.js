module.exports = [
  {
    name: "youtube",
    embedUrl: (id) => `https://www.youtube.com/embed/${id}`,
    thumbnail: (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    videoId: (url) =>
      url
        .match(
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/i
        )
        ?.pop(),
  },
  {
    name: "vimeo",
    embedUrl: (id) => `https://player.vimeo.com/video/${id}`,
    videoId: (url) =>
      url
        .match(
          /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/i
        )
        ?.pop(),
  },
]
