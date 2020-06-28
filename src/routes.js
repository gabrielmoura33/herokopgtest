import { Router } from 'express';

const routes = new Router();
import Post from './app/models/Post';

routes.post('/', async (req, res) => {
  const post = await Post.create({
    url:  'https://gabrieltestrocketseat.s3.amazonaws.com/5fb3e12c46e19c97e72ca4fe48c160bc-IMG_0384.jpeg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum blanditiis commodi. Illo praesentium aut alias ipsa perspiciatis nisi quae consequatur atque, cum necessitatibus provident voluptas incidunt, nam ex pariatur!',
  });

  return res.json(post);
});

routes.get('/', async (req, res) => {
  const posts = await Post.findAll();

  return res.json(posts);
});


export default routes;