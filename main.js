

$(document).ready(function () {
    var chatParentScroll = '.message-list .scroll-container ';
    var targetMessages = '.message-list .components-chatbox-user-menu:not(.checked)';


    function eliminardonaciones(){
      var elements = document.getElementsByClassName("components-gifter-rank");
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
            }
    }

    function eliminardonacioneschat(){
        var xd1 = document.getElementsByClassName("components-chatbox-banners");
          while(xd1.length > 0){
            xd1[0].parentNode.removeChild(xd1[0]);
              }
      }


    
    function eliminarmensajenuevo(){
        var xd = document.getElementsByClassName("icon-arrow");
          while(xd.length > 0){
            xd[0].parentNode.removeChild(xd[0]);
              }
      }   
    



      var interval = setInterval(function () {
        if (document.querySelector(chatParentScroll)) {
        eliminardonacioneschat();  
          eliminardonaciones();
          clearInterval(interval);
          eliminarmensajenuevo();
          setMessagesObserver();
        }
    }, 300);
  



    var colors = [
      '#2323FF',
      '#FE1E1E',
      '#008100',
      '#FF804D',
      '#80CE08',
      '#FF4401',
      '#018C53',
      '#EBA600',
      '#EE690C',
      '#279FA0',
      '#0091FE',
      '#FF69B8',
      '#A027E8',
      '#00D3C0',
    ];
  
    
    var map = {
      "<3": "\u2764\uFE0F",
      "</3": "\uD83D\uDC94",
      ":D": "\uD83D\uDE00",
      ":)": "\uD83D\uDE03",
      ";)": "\uD83D\uDE09",
      ":(": "\uD83D\uDE12",
      ":p": "\uD83D\uDE1B",
      ";p": "\uD83D\uDE1C",
      ":'(": "\uD83D\uDE22"
    };
    
    var userColors = [];
  

    if (window.location.href.includes('standalone/chatroom/')) {
      document.querySelector('.views-standalone-chatroom').style.backgroundColor =
        '#16181a';
    }
  
    var isStreamer = document.querySelector('.verified-streamer-badge');
    var streamerFind = document.querySelector('.streamer-badge');

    if (streamerFind != null) {
      streamerFind.src = 'https://i.imgur.com/HCeElm6.png';
    }
    
  
    function setMessagesObserver() {

      var targetNode = document.querySelector(chatParentScroll);
      var config = { childList: true };
      var timeout;
      var callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            clearTimeout(timeout);
            $(targetMessages).each(function () {
              var t = $(this);
              var $nick = t.find('.username');
              var $id = t.find('.userid');
              var nickname = $nick.text();
              var $message = t.siblings('.message-text');
              var messageText = $message.text();

              var iconPrefix = '';
              let arrMessage = messageText.split(' ');
  
              var guionIndex = nickname.lastIndexOf('-');
              var hasColor = guionIndex != -1;
  
              for (let i = 0; i < arrMessage.length; i++) {
                if (arrMessage[i] === ":off:") {
                      arrMessage[i] = `<img src="https://i.imgur.com/7FEfCKo.png" alt="" style="width:25px;">`;
                }     
                if (arrMessage[i] === ":kappa:") {
                  arrMessage[i] = `<img src="https://i.imgur.com/P24atg9.png" alt="" style="width:20px;">`;
                }    
                  if (arrMessage[i] === ":tortad:") {
                    arrMessage[i] = `<img src="https://i.imgur.com/e1EyUKW.png" alt="" style="width:20px;">`;
                  }       
                  if (arrMessage[i] === ":silla:") {
                    arrMessage[i] = `<img src="https://i.imgur.com/ccSHi73.gif" alt="" style="width:20px;">`;
              }         
                if (arrMessage[i] === ":aw:") {
                  arrMessage[i] = `<img src="https://i.imgur.com/MGndolJ.png" alt="" style="width:20px;">`;
                }                      
                if (arrMessage[i] === ":opa:") {
                  arrMessage[i] = `<img src=" https://i.imgur.com/hxb6tRp.png" alt="" style="width:20px;">`;
                }      
                if (arrMessage[i] === ":risa:") {
                  arrMessage[i] = `<img src="https://i.imgur.com/Z1CXiDq.png" alt="" style="width:20px;">`;
                }                 
                if (arrMessage[i] === ":brunopatri:") {
                    arrMessage[i] = `<img src="https://i.imgur.com/Ev0UvWC.gif" alt="" style="width:20px;">`;
                  }                 

                  if (arrMessage[i] === ":patri:") {
                    arrMessage[i] = `<img class="emotesgrandes" src="https://i.imgur.com/srpndc1.png" alt="" style="width:20px;">`;
                  }                   
                  if (arrMessage[i] === ":rata:") {
                    arrMessage[i] = `<img class="emotesgrandes" src="https://i.imgur.com/qhS0BR5.png" alt="" style="width:20px;">`;
                  }                  
                  if (arrMessage[i] === ":sapo:") {
                    arrMessage[i] = `<img class="emotesgrandes" src="https://i.imgur.com/3lVyhp1.gif" alt="" style="width:20px;">`;
                  }                      
                if (
                  arrMessage[i].startsWith('https://') ||
                  arrMessage[i].startsWith('http://')
                ) {
                  arrMessage[
                    i
                  ] = `<a target="_blank" style="color: lightblue;" href="${arrMessage[i]}">${arrMessage[i]}</a>`;
                } else if (arrMessage[i].startsWith('@')) {
                  if (localStorage.getItem('name') != null) {
                    let atHasColor =
                      localStorage.getItem('name').lastIndexOf('-') != -1;
                    if (atHasColor == true) {
                      if (
                        localStorage
                          .getItem('name')
                          .substr(0, guionIndex)
                          .toLowerCase() == arrMessage[i].substr(1).toLowerCase()
                      ) {
                        arrMessage[
                          i
                        ] = `<span style="background-color: rgba(173, 173, 173, 0.5) !important">${arrMessage[i]}</span>`;
                      }
                    } else {
                      if (
                        localStorage.getItem('name').toLowerCase() ==
                        arrMessage[i].substr(1).toLowerCase()
                      ) {
                        arrMessage[
                          i
                        ] = `<span style="background-color: rgba(173, 173, 173, 0.5) !important">${arrMessage[i]}</span>`;
                      }
                    }
                  }
                }
              }
  
              $message.html(arrMessage.join(' '));
  
              var badges = document.querySelectorAll('.badge-icon');
  
              t.addClass('checked');
  
              badges.forEach(badge => {
                if (badge.src == null) {
                  badge.src = 'https://i.imgur.com/7FEfCKo.png';
                }
              
                if (
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/pc/static/media/medal.85ed3418.png' ||
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/standalone/chatroom/static/media/medal.85ed3418.png'
                ) {
                  badge.src = 'https://i.imgur.com/5BrtZoc.png';
                }

                if (
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/standalone/chatroom/static/media/verified-streamer.4597e270.png' ||
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/pc/static/media/verified-streamer.4597e270.png'
                 ) {
                  t.addClass('orange streamer');
                  badge.src = 'https://i.imgur.com/HCeElm6.png';
                }
                if (
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/standalone/chatroom/static/media/crown.deccbcb4.png' ||
                  badge.src ==
                    'https://cdnmambet-a.akamaihd.net/booyah/build/pc/static/media/crown.deccbcb4.png'
                ) {
                  t.addClass('orange streamer');
                  badge.src = 'https://i.imgur.com/Y4rnUbA.png';
                }
              });
  
              if (hasColor) {
                var color = nickname.substr(guionIndex + 1);
                t.children().attr('style', `color: #${color} !important;`);
                $nick.text(nickname.substr(0, guionIndex));
              } else {
                let userColor = userColors.find(e => e.nickname == nickname);
                if (userColor == undefined) {
                  let color = colors[Math.floor(Math.random() * colors.length)];
                  t.children().attr('style', `color: ${color} !important;`);
  
                  userColors.push({
                    nickname,
                    color,
                  });
                } else {
                  t.children().attr(
                    'style',
                    `color: ${userColor.color} !important;`
                  );
                }
              }
  
            if (nickname == 'Mahada') {
                const badges = t.find('.message-badge');
                $nick.text('Mahada');
                if (badges.length != 0) {
                  badges.append(
                    `<img class="badge-icon" src="https://i.imgur.com/7FEfCKo.png" alt="">`
                  );
                }

              }
    
              if (messageText == 'Seguió Streamer') {
                t.addClass('hide');
              }
            });
  
            timeout = setTimeout(function () {
              $(chatParentScroll).scrollTop($(chatParentScroll)[0].scrollHeight);
            }, 500);
          }
        }
      };
  
      var observer = new MutationObserver(callback);
  
      observer.observe(targetNode, config);
    }

  });
  