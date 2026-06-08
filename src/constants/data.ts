
export const USER_DATA = {
  name: 'John Doe',
  username: 'johndoe',
  bio: 'Digital creator | Tech enthusiast | Coffee lover',
  profileImage: 'https://randomuser.me/api/portraits/men/41.jpg',
  posts: 128,
  followers: 2468,
  following: 1357,
  contact: {
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    website: 'johndoe.com',
  },
};

export const POSTS = Array.from({ length: 21 }, (_, i) => ({
  id: `post-${i + 1}`,
  imageUrl: `https://picsum.photos/id/${i + 10}/300/300`,
}));

export const VIDEOS = Array.from({ length: 7 }, (_, i) => ({
  id: `video-${i + 1}`,
  thumbnailUrl: `https://picsum.photos/id/${i + 50}/300/300`,
  videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
}));

export const TAGGED_POSTS = Array.from({ length: 15 }, (_, i) => ({
  id: `tagged-${i + 1}`,
  imageUrl: `https://picsum.photos/id/${i + 100}/300/300`,
}));

export const YOUTUBE_FEED = [
  {
    id: '1',
    username: 'NatureExplorer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    image: 'https://picsum.photos/id/1015/600/400',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Chasing waterfalls in a lush green forest. #nature #waterfall #adventure',
  },
  {
    id: '2',
    username: 'CityLights',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://picsum.photos/id/102/600/400',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    description: 'A stunning view of the city skyline at night. #cityscape #nightlife',
  },
  {
    id: '3',
    username: 'FoodieFinds',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://picsum.photos/id/1080/600/400',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    description: 'This homemade pizza was to die for! 🍕 #food #pizza #homemade',
  },
  {
    id: '4',
    username: 'AnimalLover',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    image: 'https://picsum.photos/id/237/600/400',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    description: 'Puppy love! ❤️ #dog #puppy #cute',
  },
    {
    id: '5',
    username: 'TravelBug',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    image: 'https://picsum.photos/id/1018/600/400',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    description: 'Exploring the ancient ruins. #travel #history #explore',
  },
];
