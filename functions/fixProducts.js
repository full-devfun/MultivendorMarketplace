const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://local-guru-aeac9.firebaseio.com'
});


const fixProducts = async () => {
  const productsRef = admin.firestore().collection('products')

  try {
    const products = await productsRef.get()

    return products.docs.map(async product => {

      try {
        const productRef = productsRef.doc(product.id)
        const sellers = await productRef.collection('producers').get()

        return sellers.docs.map(async seller => {
          productRef.set({
            producers: admin.firestore.FieldValue.arrayUnion({ [seller.id]: true })
          }, { merge: true } )
        })
      } catch(err) {
        console.log('Error fetching producers')
      }
    })

  } catch(err) {
    console.log('Error catching products', err)
  }
}

return fixProducts()
