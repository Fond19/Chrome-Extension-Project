// let changeColor = document.getElementById('changeColor');

//   chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
//     changeColor.onclick = function(element) {
//         let color = element.target.value;
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//           chrome.tabs.executeScript(
//               tabs[0].id,
//               {code: 'document.body.style.backgroundColor = "' + color + '";'});
//         });
//       };
//   });



let changeImage = document.getElementById('myForm').val();
let images = document.getElementsByTagName('img');

chrome.storage.sync.get('value', function(data) {
    changeImages.setAttribute('value', data.value);
  });

changeColor.onclick = function(element) {
    let category = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          function(){
            for(var i=0, l=imgs.length; i<l; i++) {
                var random = Math.floor(Math.random() * (4 - 0 + 1));
                images[i].src = bean[random];
            }
          });
    });
  };



var funny = ["https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-4.gif",
             "https://i.pinimg.com/736x/97/18/46/971846bb2ed3f5195711761b9d6738cb--work-funnies-work-humor.jpg?b=t",
             "http://3.bp.blogspot.com/-KL7d7LdSANg/Tm5VLQf9k4I/AAAAAAAAACo/cSV52JoD7vk/s1600/cat-wallpaper-34-713472.jpg",
            "https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/01/Grumpy-Cat-920x584.jpg",
            "https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/donald-trump-memes-graphic-web-design-gif-meme.gif"];

var chuck = ["https://i.pinimg.com/236x/fc/9e/0a/fc9e0a256d27375e2eaa805504d6fcf1--chuck-norris-facts-chuck-norris-funny.jpg",
             "https://s.hdnux.com/photos/57/61/03/12521691/3/920x920.jpg",
             "https://i.pinimg.com/736x/af/02/bd/af02bd038fb4729360cd5834052968b0--chuck-norris-sailor-moon.jpg",
             "http://crossfitinvasion.com/wp-content/uploads/2013/12/Santa-vs.-Chuck-Norris.jpg",
             "https://www.lifewire.com/thmb/qZ5uLay_SmnEMRAON7MPalksu5c=/996x652/filters:no_upscale():max_bytes(150000):strip_icc()/chucknorrisshowercry-5ac2b2f63418c60037493750.JPG",
             "https://blazepress.com/.image/t_share/MTI4OTk1Mjc2NzQzNTQ3MzU4/4.jpg"];

var bean = ["https://media1.tenor.com/images/4858f43f53f0ae4cc4d9f48ef06ff002/tenor.gif",
            "https://media.tenor.com/images/433ceb3eb653a389ac1dbd1773ab63b2/tenor.gif",
            "https://media2.giphy.com/media/9eSJ3YKbFDtS0/giphy.gif",
            "https://media.tenor.com/images/c82f1b89d527b9a684ad544933463d7e/tenor.gif",
            "https://thumbs.gfycat.com/BiodegradableCreativeIncatern-size_restricted.gif"
            ];

var soft = ["https://i.ebayimg.com/images/g/nlMAAOSwAYtWPfzf/s-l300.jpg",
            "https://fiver.media/cdn-thumb/280x420/e5p/images/mu/2016/07/10/strappy-red-bikini-red-36569-3.jpg",
           "https://ae01.alicdn.com/kf/HTB1P2YUQpXXXXcHXFXXq6xXFXXXA/Sexy-Mousse-Hot-Luxury-lace-1-2-cup-Y-buckle-beauty-back-sexy-women-Lingerie-push.jpg_640x640.jpg",
           "https://cdn.shopify.com/s/files/1/1459/0556/products/product-image-370465335.jpg",
           "https://image2.geekbuying.com/ggo_pic/2018-07-30/Women-Sexy-Lingerie-Sexy-Underwear-Pajamas-Size-L-Black-673161-.jpg"];

var shemale = ["http://cdn.shemalepictures.net/2016-10-03/83609_13.jpg",
            "https://s9v7j7a4.ssl.hwcdn.net/galleries/full/34/e6/88/34e688aa83d3fec662101aa71b730b01/0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjkDc32NOtKoqPL_pLprSRvjZDLeeSptJoB8MIl_r6b0qN-Uy",
            "http://cdn.shemalepictures.net/2016-12-04/84110_12.jpg",
            "http://cdn.shemaletrannypics.com/st/thumbs1/029/iV3y4hd7K5.jpg"];



  
