/* Renders window.TVV_COLUMN into the cosmos column. Runs right after the column in the HTML,
   so the column is drawn before the page first paints and looks identical on every page. */
(function(){
  var list = document.getElementById('cosmos-list'), items = window.TVV_COLUMN || [];
  if (!list) return;
  var here = location.pathname.split('/').pop() || 'index.html';
  items.forEach(function(it, i){
    if (!it || !it.image || !it.link) return;
    var li = document.createElement('li'), a = document.createElement('a'), img = document.createElement('img');
    a.className = 'cosmos-item'; a.href = it.link;
    if (it.newTab){ a.target = '_blank'; a.rel = 'noopener'; }
    if (it.link === here) a.setAttribute('data-here', '');
    img.src = it.image;
    if (it.image2x) { img.srcset = it.image + ' 1280w, ' + it.image2x + ' 1920w'; img.sizes = '(max-width: 820px) 60vw, 24vw'; }
    img.alt = it.alt || ''; img.width = 1280; img.height = 720;
    if (i > 3) img.loading = 'lazy';
    if (it.hires) img.setAttribute('data-hires', it.hires);
    var cap = document.createElement('span'); cap.className = 'ci-cap'; cap.textContent = it.caption || '';
    a.appendChild(img); a.appendChild(cap);
    if (it.label || it.newTab){
      var lab = document.createElement('span'); lab.className = 'ci-label';
      lab.textContent = (it.label || '') + (it.newTab ? ' (opens in new tab)' : '');
      a.appendChild(lab);
    }
    li.appendChild(a); list.appendChild(li);
  });
  // Keep the column's scroll position from page to page, so it reads as one steady column.
  var col = document.getElementById('cosmos');
  try { var y = +sessionStorage.getItem('aav-col-y'); if (y) col.scrollTop = y; } catch(e){}
  window.addEventListener('pagehide', function(){ try { sessionStorage.setItem('aav-col-y', col.scrollTop); } catch(e){} });
})();
