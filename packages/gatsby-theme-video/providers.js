module.exports = [
  {
    name: "youtube",
    embedUrl: ({ videoId }) => `https://www.youtube.com/embed/${videoId}`,
    thumbnail: ({ videoId }) =>
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    videoId: ({ url }) =>
      url
        .match(
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/i
        )
        .pop(),
  },
  {
    name: "vimeo",
    embedUrl: ({ videoId }) => `https://player.vimeo.com/video/${videoId}`,
    videoId: ({ url }) =>
      url
        .match(
          /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/i
        )
        .pop(),
  },
]
