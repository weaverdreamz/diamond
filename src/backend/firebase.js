import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, setDoc, getDoc, writeBatch, query, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAanqTA6Tq3DPLB1Y7bSEy1LKvNI5e6h0s",
    authDomain: "yourswatch-e2ad1.firebaseapp.com",
    projectId: "yourswatch-e2ad1",
    storageBucket: "yourswatch-e2ad1.appspot.com",
    messagingSenderId: "572639982124",
    appId: "1:572639982124:web:1a86464ab7ba9104c0d789",
    measurementId: "G-WRDRGJ1GJ3"
  };

  const app = initializeApp(firebaseConfig);

  const database = getFirestore();

  export const setNewProduct = async (productkey, productdata)=>{

    const collectionRef = collection(database, productkey)

    const batch = writeBatch(database);

    productdata.forEach((newProduct)=>{

      const docRef = doc(collectionRef, newProduct.title.toLowerCase());
      batch.set(docRef,newProduct)
    })
    await batch.commit()

  }

  export const grabNewProduct = async()=>{

    const collectionRef = collection(database, 'newproduct');
    const q = query(collectionRef);
    const latestMap = await getDocs(q);

    return latestMap.docs.map((docSnapshot)=>docSnapshot.data())
  
  }

 
