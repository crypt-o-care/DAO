import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop(
  '0x3F2328C90A59ABEA9F001756587Cee08Ea24C5be'
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Crypt-o-Care',
        description: 'This NFT will give you access to Crypt-o-Care!',
        image: readFileSync('scripts/assets/crypt-o-care.png'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
