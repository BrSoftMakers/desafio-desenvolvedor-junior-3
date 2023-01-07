import { readFileSync } from 'fs';

const content = readFileSync(
  `${__dirname}/contentPost.txt`,
  { encoding: 'utf-8' },
);

const newPostMock = [
  {
    title: 'Post',
    subtitle: 'This is a post',
    thumbnail: 'https://placekitten.com/g/800/500',
    content,
  },
  {
    title: 'Other Post',
    subtitle: 'This is a other post',
    thumbnail: 'https://placekitten.com/g/700/500',
    content,
  },
];

export default newPostMock;