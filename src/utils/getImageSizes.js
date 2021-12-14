export default function getImageSizes(url) {
  // ex: "https://firebasestorage.googleapis.com/v0/b/local-guru-aeac9.appspot.com/o/assets%2F3-fennel-159471.jpg?alt=media&token=6f7ea26b-be38-4486-bcbd-971ab524d1ec"
  const fileName = url.split(".jpg")[0];
  console.log(url);
  return [
    `${fileName}400x400.jpg`,
    `${fileName}800x800.jpg`,
    `${fileName}1200x1200.jpg`,
    `${fileName}2000x2000.jpg`
  ];
}
