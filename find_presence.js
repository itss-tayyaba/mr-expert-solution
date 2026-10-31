import https from 'https';

https.get('https://mrexpertsolution.com/assets/index-DxvpJXKu.js', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const idx = data.toLowerCase().indexOf('presence');
    if (idx !== -1) {
      console.log('Found presence:', data.slice(idx - 100, idx + 400));
    } else {
      console.log('presence not found in main bundle');
    }
    
    // search for map-
    const mapChunks = [...data.matchAll(/assets\/[a-zA-Z0-9_-]*map[a-zA-Z0-9_-]*\.js/gi)].map(m => m[0]);
    console.log('Map chunks:', mapChunks);
  });
});
