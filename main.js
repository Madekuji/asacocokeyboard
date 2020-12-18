function myFunction(){
    var inputText = document.getElementById('target').value;
    var cocoChatObj = {
      a:":_aaa:",
      b:":_bbb:",
      c:":_ccc:",
      d:":_ddd:",
      e:":_eee:",
      f:":_fff:",
      g:":_ggg:",
      h:":_hhh:",
      i:":_iii:",
      j:":_jjj:",
      k:":_kkk:",
      l:":_lll:",
      m:":_mmm:",
      n:":_nnn:",
      o:":_ooo:",
      p:":_ppp:",
      q:":_qqq:",
      r:":_rrr:",
      s:":_sss:",
      t:":_ttt:",
      u:":_uuu:",
      v:":_vvv:",
      w:":_wowow:",
      x:":_xxx:",
      y:":_yyy:",
      z:":_zzz:"
    };
    var discordObj = {
      a:":letteraaa:",
      b:":letterbbb:",
      c:":letterccc:",
      d:":letterddd:",
      e:":lettereee:",
      f:":letterfff:",
      g:":letterggg:",
      h:":letterhhh:",
      i:":letteriii:",
      j:"🇯",
      k:":letterkkk:",
      l:":letterlll:",
      m:":lettermmm:",
      n:":letternnn:",
      o:":letterooo:",
      p:":letterppp:",
      q:"🇶",
      r:":letterrrr:",
      s:":lettersss:",
      t:":letterttt:",
      u:":letteruuu:",
      v:"🇻",
      w:":letterwww:",
      x:"🇽",
      y:":letteryyy:",
      z:"🇿"
    };
    var emoteObj = {
      a:'<img src="img/a.png" align="top" alt=":_aaa:">',
      b:'<img src="img/b.png" align="top" alt=":_bbb:">',
      c:'<img src="img/c.png" align="top" alt=":_ccc:">',
      d:'<img src="img/d.png" align="top" alt=":_ddd:">',
      e:'<img src="img/e.png" align="top" alt=":_eee:">',
      f:'<img src="img/f.png" align="top" alt=":_fff:">',
      g:'<img src="img/g.png" align="top" alt=":_ggg:">',
      h:'<img src="img/h.png" align="top" alt=":_hhh:">',
      i:'<img src="img/i.png" align="top" alt=":_iii:">',
      j:'<img src="img/j.png" align="top" alt=":_jjj:">',
      k:'<img src="img/k.png" align="top" alt=":_kkk:">',
      l:'<img src="img/l.png" align="top" alt=":_lll:">',
      m:'<img src="img/m.png" align="top" alt=":_mmm:">',
      n:'<img src="img/n.png" align="top" alt=":_nnn:">',
      o:'<img src="img/o.png" align="top" alt=":_ooo:">',
      p:'<img src="img/p.png" align="top" alt=":_ppp:">',
      q:'<img src="img/q.png" align="top" alt=":_qqq:">',
      r:'<img src="img/r.png" align="top" alt=":_rrr:">',
      s:'<img src="img/s.png" align="top" alt=":_sss:">',
      t:'<img src="img/t.png" align="top" alt=":_ttt:">',
      u:'<img src="img/u.png" align="top" alt=":_uuu:">',
      v:'<img src="img/v.png" align="top" alt=":_vvv:">',
      w:'<img src="img/w.png" align="top" alt=":_wowow:">',
      x:'<img src="img/x.png" align="top" alt=":_xxx:">',
      y:'<img src="img/y.png" align="top" alt=":_yyy:">',
      z:'<img src="img/z.png" align="top" alt=":_zzz:">'
      };
  var modifiedText = inputText.replace(/a|b|c|d|e|f|g|h|i|k|l|m|n|o|p|r|s|t|u|w|y/ig, function(matched){
    return cocoChatObj[matched.toLowerCase()];
  });
  var discordText = inputText.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/ig, function(matched){
    return discordObj[matched.toLowerCase()];
  });
  var emoteDisplay = inputText.replace(/a|b|c|d|e|f|g|h|i|k|l|m|n|o|p|r|s|t|u|w|y/ig, function(matched){
    return emoteObj[matched.toLowerCase()];
  });
    //var modifiedText = (inputText.replace(/a/ig, ':aaa:'));
    
      //var chars = {'a':':aaa:','b':':bbb:','c':':ccc:'};
      //modifiedText = inputText.replace(/[abc]/ig, m => chars[m]);
    //var myTextarea = document.getElementsByName('#container')[0];
    document.getElementById('cocochat').value = modifiedText;
    document.getElementById('discord').value = discordText;
    document.getElementById('display').innerHTML = emoteDisplay;
  
    document.querySelector("#chatButton").onclick = function(){
      document.querySelector("#cocochat").select();
      document.execCommand('copy');
    }
    document.querySelector("#discordButton").onclick = function(){
      document.querySelector("#discord").select();
      document.execCommand('copy');
  }
  
  }