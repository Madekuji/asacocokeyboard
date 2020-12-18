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
        a:'<picture><source srcset="img/a.webp" type="image/webp"><source srcset="img/a.png" type="image/png"><img src="img/a.png" align="top" class="letters" alt=":_aaa:"></picture>',
        b:'<picture><source srcset="img/b.webp" type="image/webp"><source srcset="img/b.png" type="image/png"><img src="img/b.png" align="top" class="letters" alt=":_bbb:"></picture>',
        c:'<picture><source srcset="img/c.webp" type="image/webp"><source srcset="img/c.png" type="image/png"><img src="img/c.png" align="top" class="letters" alt=":_ccc:"></picture>',
        d:'<picture><source srcset="img/d.webp" type="image/webp"><source srcset="img/d.png" type="image/png"><img src="img/d.png" align="top" class="letters" alt=":_ddd:"></picture>',
        e:'<picture><source srcset="img/e.webp" type="image/webp"><source srcset="img/e.png" type="image/png"><img src="img/e.png" align="top" class="letters" alt=":_eee:"></picture>',
        f:'<picture><source srcset="img/f.webp" type="image/webp"><source srcset="img/f.png" type="image/png"><img src="img/f.png" align="top" class="letters" alt=":_fff:"></picture>',
        g:'<picture><source srcset="img/g.webp" type="image/webp"><source srcset="img/g.png" type="image/png"><img src="img/g.png" align="top" class="letters" alt=":_ggg:"></picture>',
        h:'<picture><source srcset="img/h.webp" type="image/webp"><source srcset="img/h.png" type="image/png"><img src="img/h.png" align="top" class="letters" alt=":_hhh:"></picture>',
        i:'<picture><source srcset="img/i.webp" type="image/webp"><source srcset="img/i.png" type="image/png"><img src="img/i.png" align="top" class="letters" alt=":_iii:"></picture>',
        j:'<picture><source srcset="img/j.webp" type="image/webp"><source srcset="img/j.png" type="image/png"><img src="img/j.png" align="top" class="letters" alt=":_jjj:"></picture>',
        k:'<picture><source srcset="img/k.webp" type="image/webp"><source srcset="img/k.png" type="image/png"><img src="img/k.png" align="top" class="letters" alt=":_kkk:"></picture>',
        l:'<picture><source srcset="img/l.webp" type="image/webp"><source srcset="img/l.png" type="image/png"><img src="img/l.png" align="top" class="letters" alt=":_lll:"></picture>',
        m:'<picture><source srcset="img/m.webp" type="image/webp"><source srcset="img/m.png" type="image/png"><img src="img/m.png" align="top" class="letters" alt=":_mmm:"></picture>',
        n:'<picture><source srcset="img/n.webp" type="image/webp"><source srcset="img/n.png" type="image/png"><img src="img/n.png" align="top" class="letters" alt=":_nnn:"></picture>',
        o:'<picture><source srcset="img/o.webp" type="image/webp"><source srcset="img/o.png" type="image/png"><img src="img/o.png" align="top" class="letters" alt=":_ooo:"></picture>',
        p:'<picture><source srcset="img/p.webp" type="image/webp"><source srcset="img/p.png" type="image/png"><img src="img/p.png" align="top" class="letters" alt=":_ppp:"></picture>',
        q:'<picture><source srcset="img/q.webp" type="image/webp"><source srcset="img/q.png" type="image/png"><img src="img/q.png" align="top" class="letters" alt=":_qqq:"></picture>',
        r:'<picture><source srcset="img/r.webp" type="image/webp"><source srcset="img/r.png" type="image/png"><img src="img/r.png" align="top" class="letters" alt=":_rrr:"></picture>',
        s:'<picture><source srcset="img/s.webp" type="image/webp"><source srcset="img/s.png" type="image/png"><img src="img/s.png" align="top" class="letters" alt=":_sss:"></picture>',
        t:'<picture><source srcset="img/t.webp" type="image/webp"><source srcset="img/t.png" type="image/png"><img src="img/t.png" align="top" class="letters" alt=":_ttt:"></picture>',
        u:'<picture><source srcset="img/u.webp" type="image/webp"><source srcset="img/u.png" type="image/png"><img src="img/u.png" align="top" class="letters" alt=":_uuu:"></picture>',
        v:'<picture><source srcset="img/v.webp" type="image/webp"><source srcset="img/v.png" type="image/png"><img src="img/v.png" align="top" class="letters" alt=":_vvv:"></picture>',
        w:'<picture><source srcset="img/w.webp" type="image/webp"><source srcset="img/w.png" type="image/png"><img src="img/w.png" align="top" class="letters" alt=":_www:"></picture>',
        x:'<picture><source srcset="img/x.webp" type="image/webp"><source srcset="img/x.png" type="image/png"><img src="img/x.png" align="top" class="letters" alt=":_xxx:"></picture>',
        y:'<picture><source srcset="img/y.webp" type="image/webp"><source srcset="img/y.png" type="image/png"><img src="img/y.png" align="top" class="letters" alt=":_yyy:"></picture>',
        z:'<picture><source srcset="img/z.webp" type="image/webp"><source srcset="img/z.png" type="image/png"><img src="img/z.png" align="top" class="letters" alt=":_zzz:"></picture>'
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