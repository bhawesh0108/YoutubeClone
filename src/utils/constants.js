
const API_KEY = "AIzaSyDpDt-0iMqYRfo167jpMwZbjoBM7LOihNk";
export const YOUTUBE_POPULAR_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key='+API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key="+API_KEY;


export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEOS_API = "https://www.googleapis.com/youtube/v3/search?maxResults=50&key="+API_KEY+"&q=";

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&key="+API_KEY+"&videoId=";

export const YOUTUBE_COMMENT_REPLIES_API = "https://www.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&key="+API_KEY+"&parentId=";

export const YOUTUBE_RELATED_VIDEOS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key="+API_KEY+"&relatedToVideoId=";