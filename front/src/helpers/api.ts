import { Directus } from '@directus/sdk';

const directus = new Directus('/api');

async function start() {
  // We don't need to authenticate if data is public
  const publicData = await directus.items('public').readByQuery({ meta: 'total_count' });

  console.log({
    items: publicData.data,
    total: publicData.meta.total_count,
  });

  // But, we need to authenticate if data is private
  let authenticated = false;

  // Try to authenticate with token if exists
  await directus.auth
    .refresh()
    .then(() => {
      authenticated = true;
    })
    .catch(() => { });

  // Let's login in case we don't have token or it is invalid / expired
  while (!authenticated) {
    const email = window.prompt('Email:');
    const password = window.prompt('Password:');

    await directus.auth
      .login({ email, password })
      .then(() => {
        authenticated = true;
      })
      .catch(() => {
        window.alert('Invalid credentials');
      });
  }

  // After authentication, we can fetch the private data in case the user has access to it
  const privateData = await directus.items('privateData').readByQuery({ meta: 'total_count' });

  console.log({
    items: privateData.data,
    total: privateData.meta.total_count,
  });
}

start();

export const getUsers = () => directus.items('public').readByQuery({ meta: 'total_count' })
